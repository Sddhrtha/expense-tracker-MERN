const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savingsSchema = new Schema({
    date: { type: Date, required: true},
    amount: { type: String, required: true}
})

const Savings = mongoose.model('Savings', savingsSchema);

module.exports = Savings;