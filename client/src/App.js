import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ExpenseList } from './components/ExpenseList';
import { IncomeList } from './components/IncomeList';
import { SavingList } from './components/SavingList';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './components/Home';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Navbar />
      </div>
      <GlobalProvider>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/income" element={<IncomeList />} />
        <Route path ="/expenses" element={<ExpenseList />} />
        <Route path ="/savings" element={<SavingList />} />
      </Routes>
      </GlobalProvider>
    </Router>
    </>
  );
}

export default App;
