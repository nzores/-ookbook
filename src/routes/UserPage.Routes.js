const express = require('express');
const router = express.Router();

const  {UserPage} = require('../controllers/userPageControllers')

router.get('/:userid', UserPage)


module.exports = router;