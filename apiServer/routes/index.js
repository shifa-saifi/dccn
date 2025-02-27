const express = require('express');
const router = express.Router();
const certnetController = require('../controllers/certnetController');

router.post('/student', certnetController.createStudent);
router.get('/student/:studentId', certnetController.getStudent);
router.post('/certificate', certnetController.issueCertificate);
router.post('/certificate/verify', certnetController.verifyCertificate);

module.exports = router;
