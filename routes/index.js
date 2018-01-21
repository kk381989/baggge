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

router.post('/login', (req, res) => {
  const userNumber = req.body.number;
  const userPassword = req.body.pass;
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

router.post('/signUp', (req, res) => {
  const userNumber = req.body.number;
  const userPassword = req.body.pass;
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
