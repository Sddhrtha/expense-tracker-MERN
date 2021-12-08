const Expense = require('../models/expenses.model.js');

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find();

        return res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addExpense = async (req, res, next) => {
    try {
        const date = Date.parse(req.body.date);
        const type = req.body.type;
        const category = req.body.category;
        const mode = req.body.mode;
        const description = req.body.description;
        const amount = Number(req.body.amount);
    
        const expense = await Expense.create({
            date, type, category, mode, description, amount
        });

        return res.status(201).json({
            success: true,
            data: expense
        });
    } catch (err) {
        return res.status (500).json({
            success: false,
            error: err
        });
    }
};

exports.deleteExpense = async(req, res, next) => {
    try {
        
        const expense = await Expense.findById(req.params.id);

        if(!expense) {
            return res.status(404).json({
                success: false,
                error: 'No Expense found'
            });
        }

        await expense.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
        success: false,
            error: 'Server Error'
        });
    }
}

exports.updateExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if(!expense){
            return res.status(404).json({
                success: false,
                error: 'No such expense'
            });
        }
        expense.date = req.body.date;
        expense.type = req.body.type;
        expense.category = req.body.category;
        expense.mode = req.body.mode;
        expense.description = req.body.description;
        expense.amount = Number(req.body.amount);

        expense.save();

        return res.status(201).json({
            success: true,
            data: expense
        });
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
};

exports.findExpenseById = async (req, res, next) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if(!expense){
            return res.status(404).json({
                success: false,
                error: 'No such expense found'
            });
        }

        return res.status(200).json({
            success: true,
            data: expense
        });

    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}