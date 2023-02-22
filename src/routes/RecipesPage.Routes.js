const express = require('express');
const router = express.Router();

const  {Recipe} = require('../controllers/recipeControllers')

router.get('/:recipeId', Recipe)


module.exports = router;