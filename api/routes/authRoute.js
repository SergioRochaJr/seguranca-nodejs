const {Router} = require('express')
const AuthController = require('../controllers/authContoller')

const router = Router();

router
    .post('/auth/login', AuthController.login)

module.exports = router;