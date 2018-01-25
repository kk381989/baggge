const express = require('express');

const router = express.Router();
const request = require('request')
const colors = require('colors');
// const http = require('http')

// const httpsAgent = new http.Agent({ keepAlive: true });

/* GET home page. */
router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW'
    },
//  agent: httpsAgent
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    console.log(bodyData.providers)
    res.render('index', { data: bodyData });
  });
});


// login form handler
router.post('/login', (req, res, next) => {
  const userName = req.body.userName;
  const userPassword = req.body.passWord;
  const options = {
    method: 'GET',
    url: 'https://www.pay2all.in/web-api/get-provider',
    qs: {
      api_token: '1swdyd5JddEUDK8iqwZJpMmCTPzakBemqOIAwV00f1O9x0LDG5hQjtb98brW'
    }
  //  agent: httpsAgent
  };


  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    const bodyData = JSON.parse(body)
    console.log(body.providers);
//  res.render('index', { data: bodyData });
  });

  const user = global.MongoHandler.opened.baggge.collection('users')
  const where1 = {
    $or: [{ emailId: userName },
      { number: userName }]
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
        }
        res.send('correct mail id or number');
        console.log('docs is the :::: ')
        console.log(docs[0].password)
      });
    }
  })
});


// signUp form handle
router.post('/signUp', (req, res, next) => {
  const userName = req.body.userName;
  const userEmailId = req.body.emailId;
  const userNumber = req.body.mobileNumber;
  const userPassword = req.body.passWord;
  const userDocument = {
    userId: userNumber,
    name: userName,
    emailId: userEmailId,
    password: userPassword,
    number: userNumber,
    isActive: 1
  };
  const user = global.MongoHandler.opened.baggge.collection('users');
  user.insert(userDocument, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log('user registered successfully');
      console.log(doc);
    }
  });

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

/* GET ABOUT US page. */
router.get('/aboutus', (req, res) => {
  res.render('aboutus', {});
});

/* GET Terms and Conditions page. */
router.get('/termsandconditions', (req, res) => {
  res.render('termsandconditions', {});
});

/* GET Refund Policy page. */
router.get('/refundpolicy', (req, res) => {
  res.render('refundpolicy', {});
});

/* GET Privacy Policy page. */
router.get('/privacypolicy', (req, res) => {
  res.render('privacypolicy', {});
});

/* GET CONTACT US page. */
router.get('/contactus', (req, res) => {
  res.render('contactus', {});
});
/* GET CAREERS page. */
router.get('/career', (req, res) => {
  res.render('career', {});
});



/* Contact Us page handler */
router.post('/contactus', (req, res) => {
  if (req.body.submit) {
    const yourNamename = req.body.yourName;
    const emailId = req.body.email;
    const subject = req.body.subject;
    const question = req.body.yourQuestion;
    const contactDoc = {
      name: yourNamename,
      email: emailId,
      subject: subject,
      question: question
    };
    const randomVisitors = global.MongoHandler.opened.baggge.collection('randomVisitors');
    randomVisitors.insert(contactDoc, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log('submitted successfully');
        console.log(doc);
        res.render('contactus', { msg: 'submitted successfully' })
      }
    });
  } else {
    res.render('contactus', {});
  }
});


module.exports = router;
