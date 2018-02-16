const routers = global.express.Router();
// const routers = global.router
const request = require('request')
const colors = require('colors');
// const http = require('http')

// const httpsAgent = new http.Agent({ keepAlive: true });

/* GET home page. */
routers.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW'
    },
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    let sessionStore = true
    const bodyData = JSON.parse(body)
    console.log(sessionStore);
    console.log(req.session.userId);
    if (req.session.userId) { sessionStore = true }
    console.log(`session is the :: ${sessionStore}`)
    res.render('index', { data: bodyData, session: sessionStore });
  });
});


// login form handler
routers.post('/login', (req, res) => {
  const usrName = req.body.userName;
  const userPassword = req.body.passWord;

  const user = global.MongoHandler.opened.baggge.collection('users')
  const where1 = {
    $or: [{ emailId: usrName },
      { number: usrName }]
  }
  user.find(where1, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query users ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        if (docs.length === 0) {
          res.send('incorrect mail id or Number');
        } else if (docs.length === 1) {
          if (docs[0].password !== userPassword) {
            res.send('incorrect passWord');
          } else {
            console.log('login successfully');
            req.session.userId = docs[0].userId;
            console.log(`req.session.userId ::::: ${docs[0].userId}`);
            res.redirect('/');
          }
        }
      });
    }
  })
});


// signUp form handle
routers.post('/signUp', (req, res) => {
  const usrName = req.body.userName;
  const userEmailId = req.body.emailId;
  const userNumber = req.body.mobileNumber;
  const userPassword = req.body.passWord;
  const userDocument = {
    userId: userNumber,
    name: usrName,
    emailId: userEmailId,
    password: userPassword,
    number: userNumber,
    isActive: 1
  };

  const user = global.MongoHandler.opened.baggge.collection('users');
  const where = {
    $or: [{ emailId: userEmailId },
      { number: userNumber }]
  }
  user.find(where, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query users ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        if (docs.length === 0) {
          user.insert(userDocument, (errors) => {
            if (errors) {
              console.log(errors);
            } else {
              console.log('user registered successfully');
              res.redirect('/')
            }
          });
        } else {
          console.log('user already registered');
        }
      });
    }
  })
});


/* GET Hotels page. */
routers.get('/hotels', (req, res) => {
  res.render('hotels', {});
});

/* GET Vendor Registration page. */
routers.get('/vendorRegistration', (req, res) => {
  res.render('vendorRegistration', {});
});


/* GET ABOUT US page. */
routers.get('/aboutus', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
    console.log(`session in aboutus page is the :: ${sessionStore}`)
  res.render('aboutus', { session: sessionStore });
});


/* GET Terms and Conditions page. */
routers.get('/termsandconditions', (req, res) => {
  res.render('termsandconditions', {});
});

/* GET Refund Policy page. */
routers.get('/refundpolicy', (req, res) => {
  res.render('refundpolicy', {});
});

/* GET Privacy Policy page. */
routers.get('/privacypolicy', (req, res) => {
  res.render('privacypolicy', {});
});
/* GET Privacy Policy page. */
routers.get('/cancellationPolicy', (req, res) => {
  res.render('cancellationPolicy', {});
});


/* GET CONTACT US page. */
routers.get('/contactus', (req, res) => {
  res.render('contactus', {});
});
/* GET CAREERS page. */
routers.get('/career', (req, res) => {
  res.render('career', {});
});

// get admin login page
routers.get('/admin', (req, res) => {
  res.render('admin', {});
});


/* Contact Us page handler */
routers.post('/contactus', (req, res) => {
  if (req.body.submit) {
    const yourNamename = req.body.yourName;
    const emailId = req.body.email;
    const subjects = req.body.subject;
    const question = req.body.yourQuestion;
    const contactDoc = {
      name: yourNamename,
      email: emailId,
      subject: subjects,
      question
    };
    const randomVisitors = global.MongoHandler.opened.baggge.collection('randomVisitors');
    randomVisitors.insert(contactDoc, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('submitted successfully');
        res.render('contactus', { msg: 'submitted successfully' })
      }
    });
  } else {
    res.render('contactus', {});
  }
});

// success url
routers.post('/success', (req, res) => {
  console.log(req.body);
  const customerNumber = req.body.phone;
  const operators = req.body.operator;
  const rechargeAmount = req.body.net_amount_debit;
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
  console.log(options);
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    console.log(bodyData);
    //   res.send(bodyData);
    res.render('success', { response: req.body, presponse: bodyData });
  });
//  res.render('success', { response: req.body });
});

// failure url
routers.post('/failure', (req, res) => {
  console.log(req.body);
  res.render('failure', { response: req.body });
});

// cancel url
routers.post('/cancel', (req, res) => {
  console.log(req.body);
  res.render('cancel', { response: req.body });
});


module.exports = routers;
