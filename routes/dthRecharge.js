//  const express = require('express');
const router = global.express.Router();

// const router = global.router
const request = require('request')


/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource recharge /');
});

router.post('/dth', (req, res) => {
  const customerNumber = req.body.number;
  const operators = req.body.operator;
  const amounts = req.body.amount;
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/paynow',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW',
      number: customerNumber,
      provider_id: operators,
      amount: amounts,
      client_id: '12'
    },
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    res.send(bodyData);
  });
});

module.exports = router;
