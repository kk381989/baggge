const routers = global.express.Router();
const ObjectId = require('mongodb').ObjectID;
const colors = require('colors');

// handle admin login page
routers.post('/adminLogin', (req, res) => {
  const userPassword = req.body.passWord;
  const adminPassword = 'admin123';

  if (adminPassword !== userPassword) {
    res.render('admin', { fail: 'Incorrect password', msg: 'Please try again' });
  } else {
    console.log('login successfully');
    const hotels = global.MongoHandler.opened.baggge.collection('hotels');
    const where = {};
    hotels.find(where, (err1, cursor1) => {
      if (err1) {
        console.log(colors.red(`Mongo:error can't query hotels ==>${err1}`))
      } else {
        cursor1.toArray((error2, hotel) => {
          if (error2) {
            console.log(error2)
          }
          const hotelData = hotel;
          console.log(hotelData);
          res.render('adminPanel', { hotels: hotelData });
        });
      }
    });
  }
});

// verify hotels
routers.post('/verify', (req, res) => {
  const Id = req.body.id;
  console.log(Id);
  const hotels = global.MongoHandler.opened.baggge.collection('hotels');
  const where = { _id: ObjectId(Id) };
  const newvalue = { $set: { isVerified: 1 } };
  hotels.updateOne(where, newvalue, (err, doc) => {
    if (err) throw err;
    console.log('hotel verified');
    console.log(doc);
    res.send('request done');
  });
});

module.exports = routers;
