const jwt = require('jsonwebtoken');
const { models } = require('mongoose');

async function generalMiddleWare(req, res, next) {
  console.log('authorizing...')
  try {
    const token = req.header('Authorization');
    token?
    next():
    console.log('not authorized')
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = generalMiddleWare;
