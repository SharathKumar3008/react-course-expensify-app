import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <tr>
        <td>
            <Link to={'edit/'+id}>
                {description}
            </Link>
        </td>
        <td>{numeral(amount/100).format('$0,0.00')}</td>
        <td>{moment(createdAt).format('MMMM Do, YYYY')}</td>
    </tr>
); 

export default connect()(ExpenseListItem);