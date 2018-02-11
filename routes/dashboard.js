const multer = require('multer');
const ObjectId = require('mongodb').ObjectID;

const mulstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/hotelsUploads/')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.vendorId + req.body.name + file.fieldname)
  }
})
const mulstorage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/productsUploads/')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.vendorId + req.body.productName + file.fieldname)
  }
})

const upload = multer({
  storage: mulstorage
});
const upload1 = multer({
  storage: mulstorage1
});


const fields = [
  { name: 'room1', maxCount: 1 },
  { name: 'room2', maxCount: 1 },
  { name: 'reception', maxCount: 1 },
  { name: 'exterior', maxCount: 1 },
  { name: 'interior', maxCount: 1 },
  { name: 'facility', maxCount: 1 }
]

const fields1 = [
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 }
]
const router = global.express.Router();
const colors = require('colors');
/*  */
router.get('/', (req, res) => {
  if (req.session.vendorId) {
    const vendor = req.session.vendorId;
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
            const products = global.MongoHandler.opened.baggge.collection('products');
            const where = {
              vendorId: docs[0].vendorId
            }
            if (docs[0].vendorCategory === 'hotels') {
              hotels.find(where, (err1, cursor1) => {
                if (err1) {
                  console.log(colors.red(`Mongo:error can't query hotels ==>${err}`))
                } else {
                  cursor1.toArray((error2, hotel) => {
                    if (error2) {
                      console.log(error)
                    }
                    const hotelData = hotel;
                    req.session.vendorId = docs[0].vendorId;
                    res.render('dashboard', { data: docs[0], hotels: hotelData });
                  });
                }
              });
            } if (docs[0].vendorCategory === 'products') {
              products.find(where, (err1, cursor1) => {
                if (err1) {
                  console.log(colors.red(`Mongo:error can't query hotels ==>${err}`))
                } else {
                  cursor1.toArray((error2, product) => {
                    if (error2) {
                      console.log(error)
                    }
                    const productsData = product;
                    req.session.vendorId = docs[0].vendorId;
                    res.render('dashboard', { data: docs[0], products: productsData });
                  });
                }
              });
            }
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
  const hotelid = vendorid + hotelName;
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
    hotelId: hotelid,
    name: hotelName,
    address: hotelAddress,
    city: hotelCity,
    pincode: hotelPincode,
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
  if (req.body.id.length !== 0) {
    const myquery = { _id: ObjectId(req.body.id) };
    hotels.updateOne(myquery, hotelDocument, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('updated');
        res.redirect('/dashboard');
      }
    });
  } else if (req.body.id.length === 0) {
    hotels.insert(hotelDocument, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Hotel registered successfully');
        res.redirect('/dashboard');
      }
    });
  }
});

// add products form handle
router.post('/addProduct', upload1.fields(fields1), (req, res) => {
  console.log(req.body.id);
  const vendorid = req.body.vendorId;
  const pName = req.body.productName;
  const productid = vendorid + pName;
  const Model = req.body.model;
  const Brand = req.body.brand;
  const Quantity = req.body.quantity;
  const Manufacturer = req.body.manufacturer;
  const Category = req.body.productCategory;
  const description = req.body.productDescription;
  const productDocument = {
    vendorId: vendorid,
    productId: productid,
    productName: pName,
    model: Model,
    brand: Brand,
    quantity: Quantity,
    manufacturer: Manufacturer,
    productCategory: Category,
    productDescription: description,
    isActive: 1,
    isVerified: 0
  };

  const products = global.MongoHandler.opened.baggge.collection('products');
  if (req.body.id.length !== 0) {
    const myquery = { _id: ObjectId(req.body.id) };
    products.updateOne(myquery, productDocument, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('updated');
        res.redirect('/dashboard');
      }
    });
  } else if (req.body.id.length === 0) {
    products.insert(productDocument, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Product registered successfully');
        res.redirect('/dashboard');
      }
    });
  }
});

// add seller Details form handle
router.post('/addSellerDetails', (req, res) => {
  const vendorID = req.body.vendor;
  const businessName = req.body.businessLegalName;
  const sName = req.body.shopName;
  const sAddress = req.body.sellerAddress;
  const values = {
    businessLegalName: businessName,
    shopName: sName,
    sellerAddress: sAddress
  }
  const vendors = global.MongoHandler.opened.baggge.collection('vendors');
  const myquery = { vendorId: vendorID };
  vendors.update(myquery, { $set: values }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('updated');
      res.send('done');
    }
  });
});

// add TAX Details form handle
router.post('/addTaxDetails', (req, res) => {
  const vendorID = req.body.vendor;
  const pan = req.body.PAN;
  const vat = req.body.VAT;
  const tin = req.body.TIN;
  const gstin = req.body.GSTIN;
  const values = {
    PAN: pan,
    VAT: vat,
    TIN: tin,
    GSTIN: gstin
  }
  const vendors = global.MongoHandler.opened.baggge.collection('vendors');
  const myquery = { vendorId: vendorID };
  vendors.update(myquery, { $set: values }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('updated');
      res.send('done');
    }
  });
});

// add TAX Details form handle
router.post('/addaccountDetails', (req, res) => {
  const vendorID = req.body.vendor;
  const aName = req.body.accountName;
  const accountNum = req.body.accountNumber;
  const bName = req.body.branchName;
  const ifsc = req.body.IFSC;
  const values = {
    accountName: aName,
    accountNumber: accountNum,
    branchName: bName,
    IFSC: ifsc
  }
  const vendors = global.MongoHandler.opened.baggge.collection('vendors');
  const myquery = { vendorId: vendorID };
  vendors.update(myquery, { $set: values }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('updated');
      res.send('done');
    }
  });
});


module.exports = router;
