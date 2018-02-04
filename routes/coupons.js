// const routers = global.router
const router = global.express.Router();
const request = require('request');

/*  */
router.get('/', (req, res) => {
  res.send('respond with a resource recharge /');
});

router.post('/mobile', (req, res) => {
  const rechargeData = req.body;
  const options = {
    method: 'GET',
    url: 'https://www.coupomated.com/apiv3/9deb-cbcf-917a-02bd/getOnlyCoupons/json',
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    res.render('coupons', { data: bodyData, rData: rechargeData });
  });
});


module.exports = router;
