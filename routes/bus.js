const express = require('express');
var request = require("request");
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
	const ipAddress = new Buffer(req.connection.remoteAddress).toString('base64')
	let doj = req.query.Doj
	// doj = new Date(doj)
	// doj = doj.getFullYear()+'-' + (doj.getMonth()+1) + '-'+doj.getDate();
	const search_arr = req.originalUrl.split("?");
	console.log("req.originalUrl")
	console.log(req.originalUrl)
	console.log(search_arr)
	console.log(doj)
	console.log(req.query)
	console.log("req.connection.remoteAddress")
	console.log(req.connection.remoteAddress)

	const busPara = search_arr[1]+"&c265b5c852104bd4b4d595b350761a8c=MTg3NA==&b3a8a525cd769e9e1bf1977fdcb75847="+ipAddress+"&8d777f385d3dfec8815d20f7496026dc=eyJpZCI6IjEzODUiLCJ1c2VyX2lkIjoiMTg3NCIsInNob3BpZnlfaWQiOiJUUkFWLVNIT1AtMjg3NCIsInByZWZpeCI6IjE4NzQiLCJuYW1lIjoia2FuYWsiLCJsbmFtZSI6ImthbmFrIiwiZW1haWwiOiIiLCJ3ZWJzaXRlIjoid3d3LmJhZ2dnZS5jb20iLCJjb21wYW55IjoiU29tIHRlY2ggTWVkaWEiLCJjb3VudHJ5X2NvZGUiOiI5MSIsInN0ZF9jb2RlIjoiMDAwIiwibW9iaWxlIjoiNzcwMTgwNjg2NyIsImNvbnRhY3Rfbm8iOiIwIiwiYWRkcmVzcyI6IkRlbGhpIiwiZXh0cmFfYWRkcmVzcyI6bnVsbCwiY291bnRyeV9pZCI6IjMzIiwiY2l0eV9pZCI6IjIxIiwicGluY29kZSI6IjExMDA5MiIsIm1vYmlsZV9vbmUiOiI3NzAxODA2ODY3IiwibW9iaWxlX3R3byI6bnVsbCwibGFuZGxpbmVfb25lIjoiMDAwIiwibGFuZGxpbmVfdHdvIjpudWxsLCJlbWFpbF9vbmUiOiIiLCJlbWFpbF90d28iOm51bGwsIm1vcm5pbmciOiIwIiwiZXZlbmluZyI6IjAiLCJmYWNlYm9vayI6bnVsbCwiYW5kcm9pZCI6bnVsbCwidHdpdHRlciI6bnVsbCwieW91dHViZSI6bnVsbCwiYmxvZ3MiOm51bGwsInBpbnRlcmVzdCI6bnVsbCwiaW5ldGFncmFtIjpudWxsLCJwbHVzX2dvb2dsZSI6bnVsbCwibGlua2VkaW4iOm51bGwsIndvcmRwcmVzcyI6bnVsbCwiZG9tZXN0aWMiOm51bGwsIm91dGJvdW5kIjpudWxsLCJjYXJlZXIiOm51bGwsImZlZWRiYWNrIjpudWxsLCJpbmZvIjpudWxsLCJpYXRhIjoiTiIsInRyYWRlbWFyayI6Ik4iLCJleHBpcmVzX29uIjoiMDAwMC0wMC0wMCIsInJlZ2lzdGVyZWRfb24iOiIwMDAwLTAwLTAwIiwidXBkYXRlZF9vbiI6IjAwMDAtMDAtMDAiLCJhZGRlZF9ieSI6IjAiLCJhZGRlZF9vbiI6bnVsbCwiaGVscGxpbmVfdGVhbSI6IjEiLCJsYXN0X2xvZ2luIjpudWxsLCJnc3Rfbm8iOm51bGwsInN0YXR1cyI6IlkiLCJhY2NvdW50IjoicHJlcGFpZCIsImFzc2lnbl90byI6IjAiLCJhc3NpZ25fYnkiOiIwIiwiaG90ZWxfbWFya3VwIjoiMCIsImZsaWdodF9tYXJrdXAiOiIwIiwiYnVzX21hcmt1cCI6IjAiLCJwYWNrYWdlX21hcmt1cCI6IjMwIiwibm9fb2ZfcGtnIjoiMjUiLCJtb2RpZnlfc2VhcmNoX3Blcm0iOiJOIiwicGRmX3Blcm0iOiJOIiwicHJvbW9fcGVybSI6Ik4iLCJoYl9saXZlIjpudWxsLCJzdGF0ZSI6IjEwIiwicGFyZW50X2lkIjoiMCIsImFnVHlwZSI6IkEifQ=="+doj;
	console.log("busPara")
	console.log(busPara)
	res.render('bus', { busPara:busPara });

});

module.exports = router;
