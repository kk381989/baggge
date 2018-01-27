const colors = require('colors');

const router = global.express.Router();

/* GET Vendor login Page. */
router.get('/', (req, res) => {
  res.render('vendorLogin', {});
});

// vendor login form handler
router.post('/login', (req, res, next) => {
  const vendorUserName = req.body.userName;
  const userPassword = req.body.passWord;

  const vendors = global.MongoHandler.opened.baggge.collection('vendors')
  const where1 = {
    username: vendorUserName
  }
  vendors.find(where1, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query users ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        if (docs.length === 0) {
          res.send('Incorrect Username');
        } else if (docs.length === 1) {
          if (docs[0].password !== userPassword) {
            res.send('Incorrect passWord');
          } else {
            console.log('login successfully');
            req.session.vendorId = docs[0].vendorId;
            console.log(req.session.vendorId);
            res.render('dashboard');
          }
        }
      });
    }
  })
});

// vendor Registration form handle
router.post('/signUp', (req, res, next) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const emailId = req.body.email;
  const vendorNumber = req.body.number;
  const userName = req.body.username;
  const vendorPassword = req.body.pass;
  const userDocument = {
    vendorId: vendorNumber,
    firstname: firstName,
    lastname: lastName,
    email: emailId,
    number: vendorNumber,
    username: userName,
    password: vendorPassword,
    isActive: 1,
    isVerified: 0
  };

  const vendors = global.MongoHandler.opened.baggge.collection('vendors');
  const where = {
    $or: [{ email: emailId },
      { number: vendorNumber }]
  }
  vendors.find(where, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query users ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        if (docs.length === 0) {
          vendors.insert(userDocument, (err, doc) => {
            if (err) {
              console.log(err);
            } else {
              console.log('Vendor registered successfully');
              res.render('vendorLogin', { success: 'Vendor registered successfully :) ' });
            }
          });
        } else if (docs.length !== 0) {
          res.render('vendorRegistration', { msg: 'Vendor number or Email ID is already registered' })
        }
      });
    }
  })
});


module.exports = router;
