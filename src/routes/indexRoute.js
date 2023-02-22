const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/recipes');
});

module.exports = router;