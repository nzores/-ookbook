const express = require('express');
const router = express.Router();

const  {MainPage} = require('../controllers/MainControllers')

router.get('/', MainPage)


module.exports = router;