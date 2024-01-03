const Company = require('../models/companyModel');

exports.getReviews = (req, res, next) => {

    const companyName = req.params.companyName;

    Company.findAll({where : {companyName: companyName}})
        .then(reviews => {
            console.log(reviews);
            res.json(reviews);
        })
        .catch(err => console.log(err));
};

exports.postReview = (req, res, next) => {
    const companyName = req.body.companyName;
    const pros = req.body.pros;
    const cons = req.body.cons;
    const rate = req.body.rate;

    Company
        .create({
            companyName: companyName,
            cons: cons,
            pros: pros,
            rate: rate
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
};
