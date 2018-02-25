// const routers = global.router
const router = global.express.Router();
const request = require('request');
const crypto = require('crypto');

/*  */
router.get('/', (req, res) => {
  res.send('respond with a resource recharge /');
});

router.post('/mobile', (req, res) => {
  const plan = req.body.planType;
  const mobileNumber = req.body.number;
  const Operator = req.body.operator;
  const Amount = req.body.amount;
  const transactionId = crypto.randomBytes(8).toString('hex');
  const recData = {
    planType: plan,
    phone: mobileNumber,
    operator: Operator,
    udf1: Operator,
    amount: Amount,
    productinfo: 'recharge',
    firstname: 'himanshu',
    lastname: 'yadav',
    email: 'yadavhimanshu477@gmail.com',
    key: 'B74f96',
    salt: 'o2o0Cf7r',
    surl: 'https://baggge.com/success',
    curl: 'https://baggge.com/cancel',
    furl: 'https://baggge.com/failure',
    txnid: transactionId,
  };

  // create hash
  const formula = `${recData.key}|${recData.txnid}|${recData.amount}|${recData.productinfo}|${recData.firstname}|${recData.email}|||||||||||${recData.salt}`;
  const hashValue = crypto.createHash('sha512').update(formula).digest('hex');

  const options = {
    method: 'GET',
    url: 'https://www.coupomated.com/apiv3/9deb-cbcf-917a-02bd/getOnlyCoupons/json',
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    res.render('coupons', { data: bodyData, rData: recData, hash: hashValue });
  });
});


module.exports = router;
