let express = require('express');
let router = express.Router();
let Item = require('../models/item'); // get our mongoose model


router.post('/', function(req, res, next) {

    console.log(req.body);

    // check existence
    Item.findOne({
        username: req.body.name
    }, function(err, item) {
        if (item) {
            res.status(400);
            res.json({ success: false, msg: "Item exists" });
        }
        else{
            // create a sample item
            let newItem = new Item({
                name: req.body.name,
                price: req.body.price,
                img: req.body.img,
                url: req.body.url,
                type: req.body.type,
                season: req.body.season,
                brand: req.body.brand,
                allSizes: req.body.allSizes,
                colors: req.body.colors,
                // TODO bodyShapeRangeId
            });

            newItem.save(function(err) {
                if (err) {
                    res.status(400);
                    res.json({ success: false, msg: err });
                    return;
                }
                res.json({ success: true, msg: "add item success"});
            });

        }
    });
});

router.get('/', function(req, res, next) {

    // check existence
    Item.findOne({
        _id: req.query.id
    }, function(err, item) {
        if (item) {
            item.success = true;
            res.json(item);
        }
        else {
            res.status(400);
            res.json({success: false, msg: "Item id does not exist."});
        }
    });
});

module.exports = router;
