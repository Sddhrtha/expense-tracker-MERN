import React, { useContext, useEffect } from "react";
import { Income } from "./Income";
import { GlobalContext } from '../context/GlobalState';



export const IncomeList = () => {
    const { incomeList, getIncomeList } = useContext(GlobalContext);
     
    useEffect(() => {
        getIncomeList();
        //eslint-disable-next-line react-hooks/exhaustive-deps        
    })

    return(
        <>
            <h1 id='heading'>Income List</h1>
            <table id='table'>
                <tr>
                    <th>Date</th>
                    <th>Source</th>
                    <th>Amount</th>
                </tr>

                {incomeList.map(incomeRecord => (<Income key={incomeRecord._id} income={incomeRecord}/>))}
            </table>
        </>
    )
}