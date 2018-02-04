const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const colors = require('colors')
const session = require('express-session');

// const router = express.Router();

global.express = express
global.session = session
// global.router = router

const index = require('./routes/index');
const users = require('./routes/users');
const recharge = require('./routes/recharge');
const coupons = require('./routes/coupons');
const vendor = require('./routes/vendor');
const dashboard = require('./routes/dashboard');
const electricityRecharge = require('./routes/electricityRecharge');
const dthRecharge = require('./routes/dthRecharge');
const appFunctions = require('./lib/appFunction');

const app = express();

app.use(session({ secret: 'Shh, its a secret!' }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/recharge', recharge);
app.use('/coupons', coupons);
app.use('/vendor', vendor);
app.use('/dashboard', dashboard);
app.use('/dthRecharge', dthRecharge);
app.use('/electricityRecharge', electricityRecharge);

app.get('/logout', (req, res) => {
  req.session.destroy();
  console.log('logout called successfully')
  res.redirect('/')
})

const hbs = require('hbs');

// hbs.registerHelper('equal', (arg1, arg2, options) => (
//   (arg1 === arg2) ? options.fn(this) : options.inverse(this)));

hbs.registerHelper('ifEquals', function equals (a, b, options) {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this)
});


appFunctions.bagggePreLoad(() => {
  console.log(colors.green('[booting] ✔ All prerequisites are done'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
