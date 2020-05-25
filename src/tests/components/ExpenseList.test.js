import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should List Expenses correctly' , () => {
    const wapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wapper).toMatchSnapshot();
});

test('Should Render Expense with empty array', () => {
    const wapper = shallow(<ExpenseList expenses={[]}  />);
    expect(wapper).toMatchSnapshot();
});