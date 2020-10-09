const response = require('../../network/response');
const express = require('express');
const router = express.Router();
router.get('/', (req,res) => {
    response.success(req,res, 'petición condida');
    
})

module.exports = {router: router} 