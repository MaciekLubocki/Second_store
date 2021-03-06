const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');

var Router = express.Router();

// main routers
Router.use('/', indexRouter)
Router.use('/product', productRouter);
Router.use('/product-details', productRouter);
// end main routers

// mongoose
const mongoose = require('mongoose');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', Router)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(mongoose => {
  console.info(`MongoDB connection success`)
}, reason => {
  console.error(`MongoDB connection error:`, reason)
});

const db = mongoose.connection;

db.on('error',  console.error.bind(console, 'MongoDB error:'))
module.exports = app;
