import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

//Text Filter
test('Should filter by text value', () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

//Start Date Filter
test('Should filter by StartDate value', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

//End Date Filter
test('Should filter by EndDate value', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

//Sort By date
test('Should Sort by Date value', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

//Sort By amount
test('Should Sort by Amount value', () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});