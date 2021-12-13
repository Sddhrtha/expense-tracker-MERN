const Savings = require('../models/savings.model.js');

exports.getSavings = async(req, res) => {
    try {
        const savings = await Savings.find();

        return res.status(200).json({
            success: true,
            count: savings.length,
            data: savings
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addSaving = async (req, res, next) => {
    try{
        const date = Date.parse(req.body.date);
        const amount = Number(req.body.amount);

        const saving = await Savings.create({
            date, amount
        });

        return res.status(201).json({
            success: true,
            data: saving
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        });
    }
}

exports.deleteSaving = async(req, res, next) => {
    try {
        const saving = await Savings.findById(req.params.id);

        if(!saving) {
            return res.status(404).json({
                success: false,
                error: 'No Such Saving Record Found'
            });
        }

        await saving.remove();

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

exports.updateSaving = async (req, res, next) => {
    try{
        const saving = await Savings.findById(req.params.id);
        if(!saving){
            return res.status(404).json({
                success: false,
                error: 'No Such Saving Record'
            });
        }
        
        saving.date = req.body.date;
        saving.amount = Number(req.body.amount);

        saving.save();

        return res.status(201).json({
            success: true,
            data: saving      
        })
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
};

exports.findSavingById = async (req, res, next) => {
    try{
        const saving = await Savings.findById(req.params.id);
        if(!saving){
            return res.status(404).json({
                success: false,
                error: 'No such Savings Record Found'
            });
        }

        return res.status(200).json({
            success: true,
            data: saving
        });
    }catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}