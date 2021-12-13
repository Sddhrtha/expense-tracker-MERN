const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    date: { type: Date, required: true},
    source: { type: String, required: true},
    amount: { type: String, required: true}
})

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;