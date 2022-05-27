const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration',[
    check('username', "username is void").notEmpty(),
    check('password', "password must be more than 4 characters or less 100").isLength({min:4, max:100})
], controller.registration)
router.post('/login', controller.login)
router.get('/users',roleMiddleware(['USER', 'ADMIN']), controller.getUsers)

module.exports = router