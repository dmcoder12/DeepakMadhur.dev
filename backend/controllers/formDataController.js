const clientData = require('../models/formModel')
const mongoose = require('mongoose');
const validationFormData = require('../validators/validationFormData')


// POST a new workout
const createClientData = async (req, res) => {
    try {
        const { Name, Gender, Age, Email, FullPhone, City, Country, Subject, Message } = req.body;

        const { errors, finalData } = validationFormData({ Name, Gender, Age, Email, FullPhone, City, Country, Subject, Message });

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ success: false, errors });
        }

        const formDoc = await clientData.create(finalData);

        return res.status(200).json({ success: true, data: formDoc });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error. Please try again later.'});
    }
};


module.exports = {
    createClientData
}