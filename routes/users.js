const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json').settings;
const userAuth = require('../auth/userAuth');

/* GET users organizations. */
router.post('/organizations', async (req, res, next) => {
  try {
    const token = req.body['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.jwt_secret, async function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        const user = await model.Users.findOne({
          where: {
              id: decoded.id
          }
        });
        const organizations = await model.Organizations.findAll({
          where: {
            causeId: {
              $or: user.causes
            },
            totalVolunteeringDays: {
              $between: [req.body.volunteeringDayMin, req.body.volunteeringDayMax]
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
    });
  } 
  catch(error) {
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
  console.log(req.body.causes);
  model.Users.create({
    fullName: req.body.fullName,
    country: req.body.country,
    city: req.body.city,
    email: req.body.email,
    password: hashedPassword,
    causes: req.body.causes
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