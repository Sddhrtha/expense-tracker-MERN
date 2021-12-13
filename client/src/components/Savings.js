import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const Savings = ({ saving }) => {

    const {deleteSavings } = useContext(GlobalContext);
    console.log(typeof saving.date)

    return(
        <>
        <tr>
            <td>{saving.date.substring(0, 10)}</td>
            <td>{saving.amount}</td>
        </tr>
        </>
    )
}