const express = require('express');
const router = express.Router();
const BodyShape = require('../models/bodyShape');
const User = require('../models/user');
const Suit = require('../models/suit');

const recomendLimit = 100;

router.get('/', function(req, res, next) {

    User.findOne({
        username: req.decoded.username
    }, function(err, user) {
        if (err) throw err;
        // this should not happen!
        if (!user || user === "undefined") {
            res.status(400);
            res.json({ success: false, msg: 'User not found.' });
        }
        // the user does not have bodyShapeId
        else if(!user.bodyShapeId || user.bodyShapeId === "undefined") {

            console.log("Recommend random styles");

            getRandom(function (err, suits) {
                suits.suitId = suits._id;
                res.json(suits);
            });


        }
        // the user has bodyShapeId
        else {
            console.log("Recommend styles based on body shape");
            // algorithm to recommend styles based on body shape
            getRecomands(function (err, suits) {
                suits.suitId = suits._id;
                res.json(suits);
            });
        }
    });

});

function getRandom(callback){
    Suit.find().limit(recomendLimit).exec(callback);

}

function getRecomands(callback){
    return Suit.find({}).limit(recomendLimit).exec(callback);
}

module.exports = router;