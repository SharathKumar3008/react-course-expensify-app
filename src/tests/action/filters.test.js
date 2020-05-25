import moment from 'moment';
import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';

//Start Date Filter Test
test('Should set Start Date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    });
});

//End Date Filter Test
test('Should set End Date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    });
});

//Sort Date Filter Test
test('Should Sort Date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type : 'SORT_BY_DATE'
    });
});

//Sort Amount Filter Test
test('Should Sort Amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type : 'SORT_BY_AMOUNT'
    });
});

//Sort Text Filter Test
test('Should Sort Amount action object', () => {
    const action = setTextFilter('Test Filter Search');
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text : 'Test Filter Search'
    });
});

//Sort Text Filter Test Default
test('Should Sort Amount action object Default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text : ''
    });
});