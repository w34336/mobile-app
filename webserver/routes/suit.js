let express = require('express');
let router = express.Router();
let Suit = require('../models/suit'); // get our mongoose model


router.post('/', function(req, res, next) {

    console.log(req.body);

    // check existence
    Suit.findOne({
        username: req.body.name
    }, function(err, item) {
        if (item) {
            res.status(400);
            res.json({ success: false, msg: "Suit exists" });
        }
        else{
            // create a sample item
            let newSuit = new Suit({
                name: req.body.name,
                img: req.body.img,
                items: req.body.items,
                // TODO bodyShapeRangeId
            });

            newSuit.save(function(err) {
                if (err) {
                    res.status(400);
                    res.json({ success: false, msg: err });
                    return;
                }
                res.json({ success: true, msg: "add suit success"});
            });

        }
    });
});


router.get('/', function(req, res, next) {

    // check existence
    Suit.findOne({
        _id: req.query.id
    }, function(err, suit) {
        if (suit) {
            suit.success = true;
            res.json(suit);
        }
        else{
            res.status(400);
            res.json({ success: false, msg: "Suit id does not exist." });

        }
    });
});



module.exports = router;
