const Expense = require('../models/expenses.model');
const Income = require('../models/income.model.js');

exports.getIncomeList = async(req, res, next) => {
    try {
        const incomeList = await Income.find();

        return res.status(200).json({
            success: true,
            count: incomeList.length,
            data: incomeList
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addIncome = async (req, res, next) => {
    try{
        const date = Date.parse(req.body.date);
        const source = req.body.source;
        const amount = Number(req.body.amount);

        const income = await Income.create({
            date, source, amount
        });

        return res.status(201).json({
            success: true,
            data: income
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        });
    }
}

exports.deleteIncome = async(req, res, next) => {
    try {
        const income = await Income.findById(req.params.id);

        if(!income) {
            return res.status(404).json({
                success: false,
                error: 'No Expense Found'
            });
        }

        await income.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.updateIncome = async (req, res, next) => {
    try{
        const income = await Income.findById(req.params.id);
        if(!income){
            return res.status(404).json({
                success: false,
                error: 'No Such Income Record'
            });
        }
        
        income.date = req.body.date;
        income.source = req.body.date;
        income.amount = Number(req.body.amount);

        income.save();

        return res.status(201).json({
            success: true,
            data: income            
        })
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
};

exports.findIncomeById = async (req, res, next) => {
    try{
        const income = await Income.findById(req.params.id);
        if(!income){
            return res.status(404).json({
                success: false,
                error: 'No such Income Record Found'
            });
        }

        return res.status(200).json({
            success: true,
            data: income
        });
    }catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}