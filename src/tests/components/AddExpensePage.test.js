import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

test('Should render Add Expense Correctly', () => {
    const onSubmit = jest.fn();
    const history = {push : jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onsubmit correctly', () => {
    const onSubmit = jest.fn();
    const history = {push : jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    wrapper.find('withStyles(ExpenseForm)').prop('onSubmit')(expenses[1]);
    expect(hidtory.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);

});