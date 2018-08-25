const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json').settings;
const userAuth = require('../auth/userAuth');

/* GET todo listing. */
router.get('/', userAuth, function (req, res, next) {
  model.Users.findAll({})
    .then(users => res.json({
        error: false,
        data: users
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
  }));
});


/* POST todo. */
router.post('/', function (req, res, next) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  model.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location,
    email: req.body.password,
    password: hashedPassword
  })
  .then(user => {
    const token = jwt.sign({ id: user.id }, config.jwt_secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(201).json({
      error: false,
      data: user,
      message: 'New user has been created.',
      token: token
    })}
  )
  .catch(error => res.json({
      error: true,
      data: [],
      error: error
  }));
});

module.exports = router;