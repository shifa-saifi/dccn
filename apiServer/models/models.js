'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Student Schema
 */
const studentSchema = new Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // The "school" field as stored in chaincode might be `ctx.clientIdentity.getID()`.
  // You can store it here if you’d like to replicate that info off-chain:
  school: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Certificate Schema
 */
const certificateSchema = new Schema({
  certId: {
    type: String,
    required: true,
    unique: true
  },
  studentId: {
    type: String,
    required: true
  },
  courseId: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    default: ''
  },
  originalHash: {
    type: String,
    default: ''
  },
  grade: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});



const Student = mongoose.model('Student', studentSchema);
const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = {
  Student,
  Certificate
};
