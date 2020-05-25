import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>This is Expense List</h1>
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.expenses.length === 0 ? 
                        <tr>
                            <td>No Data found</td>
                        </tr>
                    :
                    props.expenses.map((expense)=>
                        <ExpenseListItem key={expense.id} {...expense} />
                    )
                }
            </tbody>
        </table>

    </div>
);

const mapStatetoProps = (state) => {
    return {
        expenses : SelectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStatetoProps)(ExpenseList);