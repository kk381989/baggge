const express = require('express');
// const sess = global.session;
// const sessionv = global.session;
const router = express.Router();
const request = require('request')
const url = require('url')


/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource recharge /');
});

router.post('/mobile', (req, res) => {
//  const plan = req.body.planType;
  const customerNumber = req.body.number;
  const operators = req.body.operator;
  const rechargeAmount = req.body.amount;
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
  // if (req.session.userId) {

  // key, txnid, amount, productinfo, firstname, email, phone, surl, furl, hash
  // const options = {
  //   method: 'POST',
  //   url: 'https://test.payu.in/_payment',
  //   qs: {
  //     key:'gtKFFx',
  //     txnid:'fd3e847h2',
  //     amount:10.00,
  //     productinfo:'fd3e847h2',
  //     firstname:'Himanshu',
  //     email:'yadavhimanshu477@gmail.com',
  //     phone:'9457542057',
  //     surl:'https://baggge.com/success',
  //     furl:'https://baggge.com/f',
  //     hash:'173226E84F15002DC3F801C49F0084D05195D4340748D8BCC19C376E67FC231A7B36723B47940193A26E9368CAF96DA75CA9BCEEEE5DC96F560A2EC8FA4B30BD'
  //   },
  // //  agent: httpsAgent
  // };
  //  res.redirect(url.format({
  //     pathname:"https://test.payu.in/_payment",
  //     method:'POST',
  //     query: {
  //      key:'gtKFFx',
  //      txnid:'fd3e847h2',
  //      amount:10.00,
  //      productinfo:'fd3e847h2',
  //      firstname:'Himanshu',
  //      email:'yadavhimanshu477@gmail.com',
  //      phone:'9457542057',
  //      surl:'https://baggge.com/success',
  //      furl:'https://baggge.com/failure',
  //      hash:'A8269C5BAF62ACF8459831D30255E0C99ECF1E4CC174B921E4EA93ADB3F6682EC022D40524EAE92F60CFE29C6B802F41868040F85BFFC61134BE97E44CEE65BE'
  //      }
  //   }));

  // request(options, (error, response, body) => {
  //   if (error) throw new Error(error);
  //   //const bodyData = JSON.parse(body)
  //   //console.log(bodyData.status);
  //   //res.send(bodyData);
  // });
  // }
  // res.send('Please login');
});

module.exports = router;
