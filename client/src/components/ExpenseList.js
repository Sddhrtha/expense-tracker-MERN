import React, { useContext, useEffect } from 'react';
import { Expense } from './Expense';
import { GlobalContext } from '../context/GlobalState';



export const ExpenseList = () => {
    const { expenses, getExpenses} = useContext(GlobalContext);

    useEffect(() => {
        getExpenses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1 id='heading'>Expenses</h1>
            <table id='table'>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Mode</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>

                {expenses.map(expense => (<Expense key={expense._id} expense={expense} />))}
                
            </table>
        </>
    )
}