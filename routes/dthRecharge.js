const express = require('express');

const router = express.Router();
const request = require('request')
const http = require('http')

const httpsAgent = new http.Agent({ keepAlive: true });


/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource recharge /');
});

router.post('/dth', (req, res) => {
  const customerNumber = req.body.number;
  const operator = req.body.operator;
  const amount = req.body.amount;
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/paynow',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW',
      number: customerNumber,
      provider_id: operator,
      amount: amount,
      client_id: '12'
    },
  //  agent: httpsAgent
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    res.send(bodyData);
  });
});

module.exports = router;
