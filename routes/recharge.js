var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('respond with a resource recharge /');
});

router.get('/mobile', function(req, res, next) {
	//var data = JSON.stringify(req.query);
  	res.send(global.conf.apiToken);
});

module.exports = router;
