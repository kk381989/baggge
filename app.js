const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const colors = require('colors')

const index = require('./routes/index');
const users = require('./routes/users');
const recharge = require('./routes/recharge');
const electricityRecharge = require('./routes/electricityRecharge');
const dthRecharge = require('./routes/dthRecharge');
const appFunctions = require('./lib/appFunction');

const app = express();

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
app.use('/dthRecharge', dthRecharge);
app.use('/electricityRecharge', electricityRecharge);

const hbs = require('hbs');

hbs.registerHelper('ifEquals', (arg1, arg2, options) => ((arg1 === arg2) ? options.fn(this) : options.inverse(this)));


appFunctions.bagggePreLoad(() => {
  console.log(colors.green('[booting] ✔ All prerequisites are done'))
  const user = global.MongoHandler.opened.baggge.collection('users')
  const where1 = {}
  user.find(where1, (err, cursor) => {
    if (err) {
      console.log(colors.red(`Mongo:error can't query users ==>${err}`))
    } else {
      cursor.toArray((error, docs) => {
        if (error) {
          console.log(error)
        }
        console.log('docs is the :::: ')
        console.log(docs)
      });
    }
  })
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
