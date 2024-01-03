const express = require('express');

const companyController = require('../controllers/company');

const router = express.Router();

router.get('/getReview/:companyName', companyController.getReviews);

router.post('/addReview', companyController.postReview);

module.exports = router;