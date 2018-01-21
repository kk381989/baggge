const express = require('express');

const router = express.Router();
const request = require('request')
const http = require('http')

const httpsAgent = new http.Agent({ keepAlive: true });

/* GET home page. */
router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW'
    },
    agent: httpsAgent
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    console.log(bodyData.providers)
    res.render('index', { data: body });
  });
});

router.post('/login', (req, res, next) => {
  const userName = req.body.userName;
  const userPassword = req.body.passWord;

  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW'
    },
    agent: httpsAgent
  };


  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    console.log(body.providers);
    res.render('index', { data: bodyData });
  });
});

router.post('/signUp', (req, res, next) => {
  const userName = req.body.userName;
  const userEmailId = req.body.emailId;
  const userNumber = req.body.mobileNumber;
  const userPassword = req.body.passWord;

  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW' }
  };


  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    console.log(bodyData.providers);
    res.render('index', { data: body });
  });
});


module.exports = router;
