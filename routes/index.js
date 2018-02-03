const routers = global.express.Router();
// const routers = global.router
const request = require('request')
const colors = require('colors');
// const http = require('http')

// const httpsAgent = new http.Agent({ keepAlive: true });

/* GET home page. */
routers.get('/', (req, res) => {
  console.log("session checking is the ::: "+req.session.page_views)
  console.log("session 2nd is the ::: "+req.session.userId)
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
    if (req.session.userId) { sessionStore = false }
    console.log(`session is the :: ${sessionStore}`)
    res.render('index', { data: bodyData, session: sessionStore });
  });
});


// login form handler
routers.post('/login', (req, res, next) => {
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
            console.log("req.session.userId ::::: "+docs[0].userId);
            req.session.page_views = 'hhh'
            console.log(req.session.page_views)
            res.redirect('/');
          }
        }
      });
    }
  })
});


// signUp form handle
routers.post('/signUp', (req, res, next) => {
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
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: { api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW' }
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
          user.insert(userDocument, (err, doc) => {
            if (err) {
              console.log(err);
            } else {
              console.log('user registered successfully');
              req.session.page_views = 'hhh'
              console.log(req.session.page_views)
              res.redirect('/')
            }
          });
        }
        else {
          console.log('user already registered');
        }
        //res.redirect('/')
      });
    }
  })
  // });


  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    req.session.signupDone = 1
    res.redirect('/')
  });
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
  res.render('aboutus', {});
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

/* GET CONTACT US page. */
routers.get('/contactus', (req, res) => {
  res.render('contactus', {});
});
/* GET CAREERS page. */
routers.get('/career', (req, res) => {
  res.render('career', {});
});


/* Contact Us page handler */
routers.post('/contactus', (req, res) => {
  if (req.body.submit) {
    const yourNamename = req.body.yourName;
    const emailId = req.body.email;
    const subject = req.body.subject;
    const question = req.body.yourQuestion;
    const contactDoc = {
      name: yourNamename,
      email: emailId,
      subject,
      question
    };
    const randomVisitors = global.MongoHandler.opened.baggge.collection('randomVisitors');
    randomVisitors.insert(contactDoc, (err, doc) => {
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


module.exports = routers;
