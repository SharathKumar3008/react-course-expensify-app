import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should Render Expense form Correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should Render Expense form Correctly with values', () => {
    const wrapper = shallow(<ExpenseForm {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault : () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should Set Description on input Change', () => {
    const  value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Should Set Note on Text Area Change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('Should Set Amount on input change', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('Should not set Amount if input is wrong', () => {
    const value = '23.230';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target : { value }
    });
    expect(wrapper.state('amount')).toBe("");
});

test('Should Call Onsubmit props on Valid Submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        note : expenses[0].note,
        amount : expenses[0].amount,
        createdAt : expenses[0].createdAt
    });
});

test('Should Set New Date On Date Change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set Calander focus onChange', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop('onFocusChange')({focused});
    expect(wrapper.state('calendarfocused')).toBe(focused);
});