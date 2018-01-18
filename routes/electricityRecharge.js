var express = require('express');
var router = express.Router();
var request = require('request')
const http = require('http')
const httpsAgent = new http.Agent({ keepAlive: true });


/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('respond with a resource recharge /');
});

router.get('/electricity', function(req, res, next) {
    var customer_number = req.query.number;
    var operator = req.query.operator;
    var amount = req.query.amount;
	  var options = { method: 'GET',
  	url: 'https://www.pay2all.in/web-api/paynow',
  	qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW',
  	      number: customer_number ,
  	      provider_id: operator ,
  	      amount: amount ,
  	      client_id: '12'  },
  	 };

  	request(options, function (error, response, body) {
  	if (error) throw new Error(error);
  	body = JSON.parse(body)
  	res.send(body);
    });
	//var data = JSON.stringify(req.query);
  	//res.send(global.conf.apiToken);
});

module.exports = router;
