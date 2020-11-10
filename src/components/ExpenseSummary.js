import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral'

export const ExpenseSummary = (props) => {
    const expenseWord = props.expensescount === 1 ? 'expense' : 'expenses';
    const formatNumeralAmount = numeral(props.expenseTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {props.expensescount} {expenseWord} totalling {formatNumeralAmount}</h1>
        </div>
    )
};

const mapStatetoProps = (state) => {
    const VisibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseTotal : ExpenseTotal(VisibleExpenses),
        expensescount: VisibleExpenses.length
    }
}
export default connect(mapStatetoProps)(ExpenseSummary);