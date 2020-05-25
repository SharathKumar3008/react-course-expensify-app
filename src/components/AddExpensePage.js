import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import expenses from '../tests/fixtures/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <ExpenseForm 
                    onSubmit = {this.onSubmit}
                />
            </div>
        );
    }
}

const mapDisptchToProps = (dispatch) => ({
    onSubmit : (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDisptchToProps)(AddExpensePage);