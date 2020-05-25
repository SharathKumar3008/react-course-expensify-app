import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

console.log(store.getState());
//store.dispatch(addExpense({description:'Water Bill',amount:100}));
//store.dispatch(addExpense({description:'Gas Bill', createdAt: 1000}));
//store.dispatch(addExpense({description:'Rent',amount:19000}));

//store.dispatch(setTextFilter('WATER'));

/*
const state = store.getState();
const VisibleExpences = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpences);
*/

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));