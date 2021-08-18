const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_DAY = 60 * 60 * 24;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_DAY
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(400).send({
        error: 'This email account is already in use'
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });

      if (!user) { // is it undefined?
        return res.status(404).send({
          error: 'User does not exists in the database'
        });
      }

      const isPasswordValid = await user.validatePassword(password);

      if (!isPasswordValid) {
        return res.status(401).send({
          error: 'Password is invalid'
        });
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (e) {
      res.status(500).send({
        error: 'Invalid login information',
        hello: e.toString()
      });
    }
  }
};
