import moment from 'moment';
import filtersReducers from '../../reducers/filters';

//Default Filter Reducer
test('Should set Default filter', () => {
    const state = filtersReducers(undefined, {type : '@@INIT'});
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    });
});

//Sort By Amount Reducer
test('Should set SortBy to amount', () => {
    const state = filtersReducers(undefined, {type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

//Sort By Date Reducer
test('Should set SortBy to date', () => {
    const currentState = {
        text : '',
        sortBy : 'amount',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const action = {type : 'SORT_BY_DATE'}
    const state = filtersReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

//Set Text Filter State
test('Should set Filter Text', () => {
    const currentState = {
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    }
    const state = filtersReducers(currentState, {type : 'SET_TEXT_FILTER', text : 'Sample Filter Test'});
    expect(state.text).toBe('Sample Filter Test');
});

//Set Start Date filter
test('Should set Filter Start Date', () => {
    const startDate = moment();
    const action = {
        type : 'SET_START_DATE',
         startDate : startDate
    }
    const state = filtersReducers(undefined, action);
    expect(state.startDate).toBe(startDate);
});

//Set End Date filter
test('Should set Filter Start Date', () => {
    const endDate = moment();
    const action = {
        type : 'SET_END_DATE',
         endDate : endDate
    }
    const state = filtersReducers(undefined, action);
    expect(state.endDate).toBe(endDate);
});