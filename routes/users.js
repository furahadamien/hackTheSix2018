const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json').settings;
const userAuth = require('../auth/userAuth');

/* GET users organizations. */
router.get('/organizations', userAuth, async (req, res, next) => {
  try {
    const organizations = await model.Organizations.findAll({
      where: {
        causeId: {
          $or: req.currentUser.causes
        }
      },
      include: [
        { model: model.Causes }
      ]
    });
    res.json({
      error: false,
      data: organizations
    });
  } catch(error) {
    res.json({
      error: true,
      data: [],
      error: error.toString()
    })
  }
});

/* GET users listing. */
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

/* POST users. */
router.post('/', function (req, res, next) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  model.Users.create({
    fullName: req.body.fullName,
    country: req.body.country,
    city: req.body.city,
    email: req.body.email,
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