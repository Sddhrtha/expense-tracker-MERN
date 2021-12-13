import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { AppReducer } from './AppReducer';

//Initial State
const initialState = {
    expenses: [],
    incomeList: [],
    savings: [],
    error : null,
    loading: true
}

//Creating Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getExpenses() {
        try {
            const res = await axios.get('http://localhost:8000/expenses');

            dispatch({
                type: 'GET_EXPENSES',
                payload: res.data.data
            });
        }catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err
            });
        }
    }
    async function addExpense(expense) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:8000/expenses/add',expense, config);
            
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteExpense(id) {
        try {

            await axios.delete(`http://localhost:8000/expenses/${id}`);

            dispatch({
                type: 'DELETE_EXPENSE',
                payload: id
            })

        } catch (err) {

            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
            
        }
    }

    async function getIncomeList () {
        try {
            const res = await axios.get('http://localhost:8000/income');
            dispatch({
                type: 'GET_INCOME_LIST',
                payload: res.data.data
            });
        }catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err
            });
        }
    }

    async function addIncome(income) {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:8000/income/add', income, config);

            dispatch({
                type: 'ADD_INCOME_RECORD',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err
            });
        }
    }

    async function deleteIncome(id) {
        try {
            
            await axios.delete(`http://localhost:8000/income/${id}`);

            dispatch({
                type: 'DELETE_INCOME_RECORD',
                payload: id
            })
        } catch (err) {
            
            dispatch({
                type: 'ERROR',
                payload: err
            })
        }
    }

    async function getSavings () {

        try {

            const res = await axios.get('http://localhost:8000/savings');

            dispatch({
                type: 'GET_SAVINGS',
                payload: res.data.data
            });
        
        }catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err
            });
        }
    }

    async function addSaving(saving) {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:8000/savings/add', saving, config);

            dispatch({
                type: 'ADD_SAVING',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err
            });
        }
    }

    async function deleteSaving(id) {
        try {
            
            await axios.delete(`http://localhost:8000/savings/${id}`);

            dispatch({
                type: 'DELETE_SAVING',
                payload: id
            })
        } catch (err) {
            
            dispatch({
                type: 'ERROR',
                payload: err
            })
        }
    }

    return (<GlobalContext.Provider value={{
        expenses: state.expenses,
        incomeList: state.incomeList,
        savings: state.savings,
        error: state.error,
        loading: state.loading,
        getExpenses,
        addExpense,
        deleteExpense,
        getIncomeList,
        deleteIncome,
        addIncome,
        getSavings,
        addSaving,
        deleteSaving
    }}>
        {children}
    </GlobalContext.Provider>);
}

