const Router = require('express').Router()
const UserControllers = require('../controllers/UserControlles')
const validator = require('../config/validator')

const { userRegistration, userSignin, verifyEmail } = UserControllers


Router.route('/user/singup')
    .post(validator, userRegistration);

Router.route('/user/signin')
    .post(userSignin);

Router
    .route('/verify/:uniqueString')
    .get(verifyEmail);

module.exports = Router