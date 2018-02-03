const express = require('express');
// const sess = global.session;
// const sessionv = global.session;
const router = express.Router();
const request = require('request')
const http = require('http')

const httpsAgent = new http.Agent({ keepAlive: true });


/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource recharge /');
});

router.post('/mobile', (req, res) => {
//  const plan = req.body.planType;
  const customerNumber = req.body.number;
  const operators = req.body.operator;
  const rechargeAmount = req.body.amount;
  console.log(req.session.userId);
  if (req.session.userId) {
    const options = {
      method: 'GET',
      url: 'https://www.pay2all.in/web-api/paynow',
      qs: {
        api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW',
        number: customerNumber,
        provider_id: operators,
        amount: rechargeAmount,
        client_id: '12'
      },
    //  agent: httpsAgent
    };

    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      const bodyData = JSON.parse(body)
      console.log(bodyData.status);
      res.send(bodyData);
    });
  }
  res.send('Please login');
});

module.exports = router;
