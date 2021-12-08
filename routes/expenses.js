const express = require("express");
let Expense = require("../models/expenses.model.js");
const { getExpenses, addExpense, deleteExpense, updateExpense, findExpenseById} = require('../controllers/expenses.js');

const router = express.Router()

router.route('/').get(getExpenses);
router.route('/add').post(addExpense);
router.route('/:id').delete(deleteExpense);
router.route('/:id').post(updateExpense);
router.route('/:id').get(findExpenseById);

module.exports = router;