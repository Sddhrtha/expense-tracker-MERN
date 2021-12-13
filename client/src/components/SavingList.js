import React, { useContext, useEffect } from "react";
import { Savings } from "./Savings";
import { GlobalContext } from '../context/GlobalState';



export const SavingList = () => {
    const { savings, getSavings } = useContext(GlobalContext);
     
    useEffect(() => {

        getSavings();
        //eslint-disable-next-line react-hooks/exhaustive-deps        
    })

    return(
        <>
            <h1 id='heading'>Savings</h1>
            <table id='table'>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {savings.map(saving => (<Savings key={saving._id} saving={saving}/>))}
            </table>
        </>
    )
}