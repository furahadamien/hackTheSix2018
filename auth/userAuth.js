const jwt = require('jsonwebtoken');
const config = require('../config/config.json').settings;

module.exports = function(req,res,next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.jwt_secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        next();
    });
};