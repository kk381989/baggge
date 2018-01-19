var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var colors = require('colors')

var index = require('./routes/index');
var users = require('./routes/users');
var recharge = require('./routes/recharge');
var electricityRecharge = require('./routes/electricityRecharge');
var dthRecharge = require('./routes/dthRecharge');
var appFunctions = require('./lib/appFunction');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/recharge', recharge);
app.use('/dthRecharge', dthRecharge);
app.use('/electricityRecharge', electricityRecharge);

var hbs = require('hbs');
hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});


appFunctions.bagggePreLoad(() => {
    console.log(colors.green('[booting] ✔ All prerequisites are done'))
  //  var users = global.MongoHandler.opened.baggge.collection('users')
  //  var where1 = {}
  //  users.find(where1, (err, cursor) => {
	//  if (err) {
	//  console.log(colors.red(`Mongo:error can't query users ==>${err}`))
  //  }	
  //  else {
	//  cursor.toArray((error, docs) => {
	//  if (error) {
	//    return cb(error)
	//        }
	 //       console.log("docs is the :::: ")
	  //      console.log(docs)
	  //   });
//		}
// 	})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
