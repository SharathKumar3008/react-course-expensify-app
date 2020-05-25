import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter,sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'; 


class ExpenseListFilters extends React.Component {
    state = {
        calendarfocused : null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarfocused) => {
        this.setState(()=>({calendarfocused}));
    }

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select onChange={(e)=>{
                        e.target.value == 'date' ? this.props.dispatch(sortByDate())
                        : this.props.dispatch(sortByAmount())
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate ={this.props.filters.startDate}
                    startDateId='your_unique_start_date_id'
                    endDate={this.props.filters.endDate}
                    endDateId='your_unique_end_date_id'
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarfocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day)=>false}
                    showClearDates={true}              
                />
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect(mapStatetoProps)(ExpenseListFilters);