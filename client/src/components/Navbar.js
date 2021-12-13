import React from  'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <ul className='navbar'>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/income">Income</Link> </li>
            <li> <Link to="/expenses">Expenses</Link> </li>
            <li> <Link to="/savings">Savings</Link> </li>
            </ul>
        </div>
    )
}