var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/linknaocungdc", (req, res) => {
  res.render("tengicungdc")
})

router.get('/api', (req, res) => {
  var data = {
    name: 'Nguyen Tuan Minh',
    age: 22,
    address: 'Ha Noi'
  }
  res.json(data)
})

module.exports = router;
