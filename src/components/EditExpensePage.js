import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

/*const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense = {props.expense}
                onSubmit= {(expense)=>{
                    console.log('Updated',expense);
                    props.dispatch(editExpense({id: props.expense.id}, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={()=>{
                props.dispatch(removeExpense({id :props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
}*/

export class EditExpensePage extends React.Component{

    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        console.log(this.props.expense.id);
        console.log(expense);
        this.props.EditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onClick = () => {
        console.log(this.props.expense.id);
        this.props.RemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <ExpenseForm
                    expense = {this.props.expense}
                    onSubmit= {this.onSubmit}
                />
                <button 
                    onClick={this.onClick}
                >Remove</button>
            </div>
        );
    }
}

const mapStatetoProps = (state, props) => {
    return {
        expense : state.expenses.find((expense)=>expense.id == props.match.params.id)
    };
};

const mapDisptchToProps = (dispatch) => ({
    EditExpense : (id, expense)=> dispatch(editExpense({id}, expense)),
    RemoveExpense : (id) => dispatch(removeExpense({id}))
});

export default connect(mapStatetoProps,mapDisptchToProps)(EditExpensePage);