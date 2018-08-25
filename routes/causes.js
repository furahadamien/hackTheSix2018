const express = require('express');
const router = express.Router();
const model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  model.Causes.findAll({})
    .then(causes => res.json({
        error: false,
        data: causes
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
  }));
});

module.exports = router;