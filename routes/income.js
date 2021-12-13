const express = require('express');
const { getIncomeList, addIncome, deleteIncome, updateIncome, findIncomeById } = require('../controllers/incomes');

const router = express.Router();

router.route('/').get(getIncomeList)
router.route('/add').post (addIncome)
router.route('/:id').delete(deleteIncome);
router.route('/:id').post(updateIncome);
router.route('/:id').get(findIncomeById);

module.exports = router;