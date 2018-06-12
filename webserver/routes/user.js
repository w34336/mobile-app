const express = require('express');
const router = express.Router();
const BodyShape = require('../models/bodyShape');
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send('Hello ' + req.decoded.username + "!");
});


/* PUT user profile. */
router.put('/', function(req, res, next) {

    let newBodyShape = new BodyShape({
        height: req.body.height,
        skinColor: req.body.skinColor,
        belly: req.body.belly,
        shoulderShape: req.body.shoulderShape,
        legShape: req.body.legShape,
        legTorsoRatio: req.body.legTorsoRatio,
        bodyShape: req.body.bodyShape,
        atLength: req.body.atLength,
        neckType: req.body.neckType
    });

    // check if the user has BodyShape
    User.findOne({
        username: req.decoded.username
    }, function(err, user) {
        if (err) throw err;
        // this should not happen!
        if (!user || user === "undefined") {
            res.status(400);
            res.json({ success: false, msg: 'User not found.' });
        }
        // the user does not have bodyShapeId, create a new one
        else if(!user.bodyShapeId || user.bodyShapeId === "undefined") {

            console.log("create new bodyShape profile:\n" + newBodyShape);
            newBodyShape.save(function(err) {
                if (err) {
                    res.status(400);
                    res.json({ success: false, msg: err });
                }
                // add bodyShapeId to that user
                user.bodyShapeId = newBodyShape._id;
                user.save(function (err) {
                    if (err) {
                        res.status(400);
                        res.json({ success: false, msg: err });
                        return;
                    }
                    res.json({ success: true, msg: "Update profile success."});
                });
            })
        }
        // the user has bodyShapeId, update it
        else {
            console.log("update bodyShape profile");
            newBodyShape._id = user.bodyShapeId;
            BodyShape.findByIdAndUpdate(user.bodyShapeId, newBodyShape, function (err) {
                if (err) {
                    res.status(400);
                    res.json({ success: false, msg: err });
                    return;
                }
                res.json({ success: true, msg: "Update profile success."});
            });
        }
    });

});






module.exports = router;
