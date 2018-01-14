var express = require('express');
var router = express.Router();
var request = require('request')
const http = require('http')
const httpsAgent = new http.Agent({ keepAlive: true });

/* GET home page. */
router.get('/', function(req, res, next) {
	var options = { method: 'GET',
  	url: 'https://www.pay2all.in/web-api/get-provider',
  	qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW' },
  	headers: 
   	{ 'postman-token': '4eda708c-796a-455b-acae-a0579f044c90',
     'cache-control': 'no-cache' } };

	request(options, function (error, response, body) {
  		if (error) throw new Error(error);
  		body = JSON.parse(body)
  		console.log(body.providers);
  		res.render('index', {data:body});
	});
});

module.exports = router;
