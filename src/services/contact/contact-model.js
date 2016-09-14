'use strict';

// contact-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name:        { type: String, required: true },
  email:       { type: String, required: true },
  description: { type: String, required: true },

  createdAt:   { type: Date, 'default': Date.now },
  updatedAt:   { type: Date, 'default': Date.now }
});

const contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel;
