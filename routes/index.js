const routers = global.express.Router();
// const routers = global.router
const request = require('request')
const colors = require('colors');
const to_json = require('xmljson').to_json;
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
  const bus_city_name = global.MongoHandler.opened.baggge.collection('bus_city_name')
  let docs_bus_city_name = {}
  bus_city_name.find({}, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query users ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        docs_bus_city_name = docs
        request(options, (error, response, body) => {
          if (error) throw new Error(error);
          let sessionStore = true
          const bodyData = JSON.parse(body)
          console.log(sessionStore);
          console.log(req.session.userId);
          if (req.session.userId) { sessionStore = true }
          console.log(`session is the :: ${sessionStore}`)
        console.log(bodyData)
          res.render('index', { data: bodyData, session: sessionStore, docs_bus_city_name:docs_bus_city_name });
        });
      });
    }
  })
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
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
    console.log("qqqqqqqqqqqqqqq11111")

    const options = { method: 'POST',
      url: 'https://www.pay2all.in/api/hotel/v1/HotelAvailSearch',
      headers: 
       { 'postman-token': 'b7ee1032-ad16-b168-9532-ed137553b779',
         'cache-control': 'no-cache',
         accept: 'application/json',
         authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRiZmFhNGU5NDY4MTA0MzVhOTNhMGNkNDM5OTIzZTczNDg4NjQ1MTA3Y2Y0ZTM0M2QzYjUxNTUwODgyMDFkNjQxNWZmZjJmMjljNjA4MzZhIn0.eyJhdWQiOiI1IiwianRpIjoiNGJmYWE0ZTk0NjgxMDQzNWE5M2EwY2Q0Mzk5MjNlNzM0ODg2NDUxMDdjZjRlMzQzZDNiNTE1NTA4ODIwMWQ2NDE1ZmZmMmYyOWM2MDgzNmEiLCJpYXQiOjE1MjE4MzI0MTIsIm5iZiI6MTUyMTgzMjQxMiwiZXhwIjoxNTUzMzY4NDEyLCJzdWIiOiI0NTYiLCJzY29wZXMiOltdfQ.yBj7mL2Z--Yhqd-D68OtysNylcnXDHd1h3ZYoAmkiMlFVkdZz8TLLC4BZPDaCA-rSmoFudjl5Zm6CPUVPejXs6v3pwgmgvGmlKp_LIIqI1GcPmsgH8D8T0WEmGHKFmnhNIBo8nRmJD-c5ewpJkgWWQXTP_nAq4PlJiE489rkKdaN4V0vD-PAxw_D_r5KMWjCA8FLhY_qE5-_fLRmhhP6sGSyaWhA7dXi0U41T2Izmj1YAI05CRDcj9G7awLvJalQJvs6YR9VuGCNHZMRsHaH4OmGLZGBeAZJEZQ8lIzMHtgQXVCkIvDRK0BZviA2nuYevGV8LV5jzplbbbEjupLr7vfC6Ri3cNRG3Q0UPQjX3dBQiXmCFxvu4F1dujuq7t0wT6dD43xt63jvHEhomS1ZkJeZBxeJ8KCR7LiVyWWeZsn3oZjo_8YIoSEWQUoVFWPE4OMNdIZlPXHnWbQJniJnhOd8u5hUlqAbO9fnoHDfgPq8uDhxvdb5QWtAfItvhtUjKfB06CUjAPuVTtbLNWc8a9SdGtmYHfM9KbizypHUwVIP6prPuXgRR9qhD5e4CRDTpW5GixP1ULj1BGB6Bm_G6yK5_zlmToELcZWC3xrA5BmhtkKg9vtUVO79z4QFhAMrOCsp6Zc-cUKugftBTIQDkV2fBwM11q1rzGSoAMRKgWI',
         'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: 
       { fromdate: '28/03/2018',
         todate: '29/03/2018',
         hotelCityName: 'ghaziabad' } };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
       
      to_json(body, function (error, data) {
          console.log(data);
          console.log(JSON.stringify(data));
          res.render('hotels', { session: sessionStore, data:data });
      });
    });
});

routers.get('/flights', (req, res) => {
  var request = require("request");

  var options = { method: 'POST',
    url: 'https://www.pay2all.in/api/flight/domestic/v1/DOMFlightAvailability',
    headers: 
     { 'postman-token': '524b7314-884e-6dd0-a6ba-2d7e8a8ffdde',
       'cache-control': 'no-cache',
       authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRiZmFhNGU5NDY4MTA0MzVhOTNhMGNkNDM5OTIzZTczNDg4NjQ1MTA3Y2Y0ZTM0M2QzYjUxNTUwODgyMDFkNjQxNWZmZjJmMjljNjA4MzZhIn0.eyJhdWQiOiI1IiwianRpIjoiNGJmYWE0ZTk0NjgxMDQzNWE5M2EwY2Q0Mzk5MjNlNzM0ODg2NDUxMDdjZjRlMzQzZDNiNTE1NTA4ODIwMWQ2NDE1ZmZmMmYyOWM2MDgzNmEiLCJpYXQiOjE1MjE4MzI0MTIsIm5iZiI6MTUyMTgzMjQxMiwiZXhwIjoxNTUzMzY4NDEyLCJzdWIiOiI0NTYiLCJzY29wZXMiOltdfQ.yBj7mL2Z--Yhqd-D68OtysNylcnXDHd1h3ZYoAmkiMlFVkdZz8TLLC4BZPDaCA-rSmoFudjl5Zm6CPUVPejXs6v3pwgmgvGmlKp_LIIqI1GcPmsgH8D8T0WEmGHKFmnhNIBo8nRmJD-c5ewpJkgWWQXTP_nAq4PlJiE489rkKdaN4V0vD-PAxw_D_r5KMWjCA8FLhY_qE5-_fLRmhhP6sGSyaWhA7dXi0U41T2Izmj1YAI05CRDcj9G7awLvJalQJvs6YR9VuGCNHZMRsHaH4OmGLZGBeAZJEZQ8lIzMHtgQXVCkIvDRK0BZviA2nuYevGV8LV5jzplbbbEjupLr7vfC6Ri3cNRG3Q0UPQjX3dBQiXmCFxvu4F1dujuq7t0wT6dD43xt63jvHEhomS1ZkJeZBxeJ8KCR7LiVyWWeZsn3oZjo_8YIoSEWQUoVFWPE4OMNdIZlPXHnWbQJniJnhOd8u5hUlqAbO9fnoHDfgPq8uDhxvdb5QWtAfItvhtUjKfB06CUjAPuVTtbLNWc8a9SdGtmYHfM9KbizypHUwVIP6prPuXgRR9qhD5e4CRDTpW5GixP1ULj1BGB6Bm_G6yK5_zlmToELcZWC3xrA5BmhtkKg9vtUVO79z4QFhAMrOCsp6Zc-cUKugftBTIQDkV2fBwM11q1rzGSoAMRKgWI',
       accept: 'application/json',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: 
     { Origin: 'Delhi - DEL',
       Destination: 'MUMBAI - BOM',
       DepartDate: '2018-03-29',
       ReturnDate: '2018-03-30\t',
       AdultPax: 'Adult',
       ChildPax: 'child',
       InfantPax: 'child',
       mode: 'ONE WAY' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    to_json(body, function (error, data) { 
      res.render('flights', { data:body });
    });
  });

});

/* GET Vendor Registration page. */
routers.get('/vendorRegistration', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('vendorRegistration', { session: sessionStore });
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
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('termsandconditions', { session: sessionStore });
});

/* GET Refund Policy page. */
routers.get('/refundpolicy', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('refundpolicy', { session: sessionStore });
});

/* GET Privacy Policy page. */
routers.get('/privacypolicy', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('privacypolicy', { session: sessionStore });
});
/* GET Privacy Policy page. */
routers.get('/cancellationPolicy', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('cancellationPolicy', { session: sessionStore });
});


/* GET CONTACT US page. */
routers.get('/contactus', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('contactus', { session: sessionStore });
});
/* GET CAREERS page. */
routers.get('/career', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('career', { session: sessionStore });
});

// get admin login page
routers.get('/admin', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
  res.render('admin', { session: sessionStore });
});


/* Contact Us page handler */
routers.post('/contactus', (req, res) => {
  let sessionStore = true
  if (req.session.userId) { sessionStore = false }
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
        res.render('contactus', { msg: 'submitted successfully', session: sessionStore })
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
