const jwt = require('jsonwebtoken');
const { models } = require('mongoose');

async function signUpMiddleWare(req, res, next) {
  try {
    const token = req.header('Authorization');
    console.log(token);
    next();
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = signUpMiddleWare;
