'use strict';
const mongo = require('mongoose');
const Schema = mongo.Schema;


let bodyShapeSchema = new Schema({
    height:{type: Number},
    skinColor:{type: Number},
    belly:{type: Number},
    shoulderShape:{type: Number},
    legShape:{type: Number},
    legTorsoRatio:{type: Number},
    bodyShape:{type: Number},
    atLength:{type: Number},
    neckType:{type: Number}
});

module.exports = mongo.model('BodyShape',bodyShapeSchema);