const express = require('express');
var request = require("request");
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
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
	  	const to_json = require('xmljson').to_json;

		 
		to_json(body, function (error, data) {
		    console.log(data);
		    console.log(JSON.stringify(data));
		});
	});


});

module.exports = router;
