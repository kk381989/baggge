var express = require('express');
var router = express.Router();
var request = require('request')
const http = require('http')
const httpsAgent = new http.Agent({ keepAlive: true });

/* GET home page. */
router.get('/', function(req, res, next) {
	var options = { method: 'GET',
  	url: 'https://www.pay2all.in/web-api/get-provider',
  	qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW' }
  	 };

	request(options, function (error, response, body) {
  		if (error) throw new Error(error);
  		body = JSON.parse(body)
  		console.log(body.providers);
  		res.render('index', {data:body});
	});
});

router.post('/login', function(req, res, next) {
  var userName = req.body.userName;
  var userPassword = req.body.passWord;
  
  var options = { method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW' }
   };
  

  request(options, function (error, response, body) {
      if (error) throw new Error(error);
      body = JSON.parse(body)
      console.log(body.providers);
      res.render('index', {data:body});
  });
});

router.post('/signUp', function(req, res, next) {
  var userName = req.body.userName;
  var userEmailId = req.body.emailId;
  var userNumber = req.body.mobileNumber;
  var userPassword = req.body.passWord;
  
  var options = { method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW' }
   };
  

  request(options, function (error, response, body) {
      if (error) throw new Error(error);
      body = JSON.parse(body)
      console.log(body.providers);
      res.render('index', {data:body});
  });
});


module.exports = router;
