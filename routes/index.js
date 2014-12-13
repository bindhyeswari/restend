var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

var contacts = [];

router.post('/contacts', function (req, res) {
  contacts.push(req.body);
  res.status(201).json({ message: 'Added contact successfully' });
});



require('../modules/edwin')('contact', router); // GET / POST / PUT / DELETE

module.exports = router;
