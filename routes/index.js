var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

require('../modules/edwin')('contact', router); // GET / POST / PUT / DELETE

module.exports = router;
