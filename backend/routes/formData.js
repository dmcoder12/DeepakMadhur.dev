const express = require('express')
const {
    createClientData
} = require('../controllers/formDataController')

const router = express.Router(); 

// POST the form data
router.post('/', createClientData);

module.exports = router