import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set Default expenses State', () => {
    const state = expensesReducer(undefined, {type : '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expenses by ID', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expenses if ID doesnot match', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should Add an Expense', () => {
    const expense = {
        description : 'Test description',
        amount : 1400,
        createdAt : 0,
        note : 'Test Note'
    }
    const action = {
        type : 'ADD_EXPENSE',
        expenses : expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]);
});

test('Should Edit an Expense', () =>{
    const amount = 2000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            amount : amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Should not Edit an Expense id id passed wrong', () =>{
    const amount = 2000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : '-1',
        updates : {
            amount : amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

