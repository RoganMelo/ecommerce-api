'use strict';
const product = require('./product');
const product = require('./product');
const product = require('./product');
const contact = require('./contact');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(contact);
  app.configure(product);
  app.configure(product);
  app.configure(product);
};
