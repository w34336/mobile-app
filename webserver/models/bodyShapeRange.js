'use strict';
const mongo = require('mongoose');
const Schema = mongo.Schema;


let bodyShapeRangeSchema = new Schema({
    height:[Number],
    skinColor:[Number],
    belly:[Number],
    shoulderShape:[Number],
    legShape:[Number],
    legTorsoRatio:[Number],
    bodyShape:[Number],
    atLength:[Number],
    neckType:[Number],
    gender:[Number]
});

module.exports = mongo.model('BodyShapeRange',bodyShapeRangeSchema);