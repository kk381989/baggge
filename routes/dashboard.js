const router = global.express.Router();
const colors = require('colors');
/*  */
router.get('/', (req, res) => {
  res.send('respond with a resource user');
});

// HOTEL Registration form handle
router.post('/addHotel', (req, res, next) => {
  const vendorid = req.body.vendorId;
  const hotelName = req.body.name;
  const hotelAddress = req.body.address;
  const hotelCity = req.body.city;
  const hotelPincode = req.body.pincode;
  const hotelState = req.body.state;
  const hotelCountry = req.body.country;
  const hotelWebsite = req.body.website;
  const hotelMobNumber = req.body.mNumber;
  const hotelTelNumber = req.body.tNumber;
  const hotelTime = req.body.time;
  const hotelStarCategory = req.body.starCategory;
  const hotelNearestAirport = req.body.nearestAirport;
  const hotelDescription = req.body.description;
  const hotelDocument = {
    vendorId: vendorid,
    name: hotelName,
    address: hotelAddress,
    lastname: hotelCity,
    email: hotelPincode,
    state: hotelState,
    country: hotelCountry,
    website: hotelWebsite,
    mobNumber: hotelMobNumber,
    telNumber: hotelTelNumber,
    time: hotelTime,
    starCategory: hotelStarCategory,
    nearestAirport: hotelNearestAirport,
    description: hotelDescription,
    isActive: 1,
    isVerified: 0
  };

  const hotels = global.MongoHandler.opened.baggge.collection('hotels');
  const where = {
    name: hotelName
  }
  hotels.find(where, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query hotels ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        if (docs.length === 0) {
          hotels.insert(hotelDocument, (err, doc) => {
            if (err) {
              console.log(err);
            } else {
              console.log('Hotel registered successfully');
              res.redirect('back');
            }
          });
        } else if (docs.length !== 0) {
          res.render('back')
        }
      });
    }
  })
});


module.exports = router;
