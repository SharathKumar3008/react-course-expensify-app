import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <tr>
        <td>
            <Link to={'edit/'+id}>
                {description}
            </Link>
        </td>
        <td>{amount}</td>
        <td>{createdAt}</td>
    </tr>
); 

export default connect()(ExpenseListItem);