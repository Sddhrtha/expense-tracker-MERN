import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const Income = ({ income }) => {

    const {deleteIncome } = useContext(GlobalContext);

    return(
        <>
        <tr>
            <td>{income.date.substring(0, 10)}</td>
            <td>{income.source}</td>
            <td>{income.amount}</td>
        </tr>
        </>
    )
}