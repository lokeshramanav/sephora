const express = require('express');
const router  = express.Router();

const loadCsvController = require('../controller/load-csv.js')

router.post('/' , loadCsvController.csvLoader)

module.exports = router