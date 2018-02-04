const multer = require('multer');

const upload = multer({
  dest: 'public/images/hotelsUploads/'
});
const fields = [
  { name: 'room1', maxCount: 1 },
  { name: 'room2', maxCount: 1 }
]
const router = global.express.Router();
const colors = require('colors');
/*  */
router.get('/', (req, res) => {
  if (req.session.vendorId) {
    const vendor = req.session.vendorId;
    console.log(vendor);
    const vendors = global.MongoHandler.opened.baggge.collection('vendors')
    const where1 = {
      vendorId: vendor
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
            res.send('not logged in');
          } else if (docs.length === 1) {
            const hotels = global.MongoHandler.opened.baggge.collection('hotels');
            const where = {
              vendorId: docs[0].vendorId
            }
            hotels.find(where, (err1, cursor1) => {
              if (err1) {
                console.log(colors.red(`Mongo:error can't query hotels ==>${err}`))
              } else {
                cursor1.toArray((error2, hotel) => {
                  if (error2) {
                    console.log(error)
                  }
                  const hotelData = hotel;
                  console.log(hotelData);
                  req.session.vendorId = docs[0].vendorId;
                  res.render('dashboard', { data: docs[0], hotels: hotelData });
                });
              }
            });
          }
        });
      }
    })
  }
});

// HOTEL Registration form handle
router.post('/addHotel', upload.fields(fields), (req, res) => {
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
  hotels.insert(hotelDocument, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Hotel registered successfully');
      res.redirect('/dashboard');
    }
  });
});


module.exports = router;
