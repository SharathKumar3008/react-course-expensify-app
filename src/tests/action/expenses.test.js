import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

//Remove Expense Action
test('Should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    });
});

//Edit Expense Action
test('Should setup edit expenses action object', () => {
    const action = editExpense({id : '123abc'}, {note:'nEW nOTE VALUE'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : '123abc',
        updates : {note:'nEW nOTE VALUE'}
    });
});

//Add Expense Action
test('Should setup add expenses action object', () => {
    const expenseData = {
        description:'Rent',
        amount:19500,
        createdAt:1000,
        note:'This is test Rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expenses : {
            ...expenseData,
            id : expect.any(String)
        }
    });
});

//Add Expense Action with Default values
test('Should setup add expenses action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expenses : {
            description:'',
            note:'', 
            amount:0, 
            createdAt:0,
            id : expect.any(String)
        }
    });
});
