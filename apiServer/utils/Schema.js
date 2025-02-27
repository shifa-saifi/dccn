// schema.js
'use strict';

const Joi = require('joi');

/**
 * Schema for creating a new Student
 */
const createStudentSchema = Joi.object({
  studentId: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required()
});

/**
 * Schema for issuing a new Certificate
 */
const issueCertificateSchema = Joi.object({
  studentId: Joi.string().required(),
  courseId: Joi.string().required(),
  gradeReceived: Joi.string().required(),
  originalHash: Joi.string().required()
});

/**
 * Schema for verifying a Certificate
 */
const verifyCertificateSchema = Joi.object({
  studentId: Joi.string().required(),
  courseId: Joi.string().required(),
  currentHash: Joi.string().required()
});

/**
 * Schema for (optional) retrieving a student by ID via query param,
 * if you do query-based input. (Example only)
 */
// const getStudentSchema = Joi.object({
//   studentId: Joi.string().required()
// });

module.exports = {
  createStudentSchema,
  issueCertificateSchema,
  verifyCertificateSchema
  // getStudentSchema
};
