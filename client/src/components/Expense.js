import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Expense = ({ expense }) => {

    const { deleteExpense } = useContext(GlobalContext);

    return (
        <tr>
            <td>{expense.date.substring(0, 10)}</td>
            <td>{expense.type}</td>
            <td>{expense.category}</td>
            <td>{expense.mode}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
        </tr>   
    )
}