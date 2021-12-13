const express = require('express');
const { getSavings, addSaving, deleteSaving, updateSaving, findSavingById } = require('../controllers/savings');

const router = express.Router();

router.route('/').get(getSavings)
router.route('/add').post (addSaving);
router.route('/:id').delete(deleteSaving);
router.route('/:id').post(updateSaving);
router.route('/:id').get(findSavingById);

module.exports = router;