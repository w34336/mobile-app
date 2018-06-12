'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let itemSchema = new Schema({

    name: {type:String},
    bodyShapeRangeId:{type:String},
    price:{type:Number},
    img: {type:String},
    url:{type:String},
    type:[String], // this is tags
    season:[String],
    brand:{type:String},
    allSizes:[String],
    colors:[String]
});

module.exports = mongo.model('Item',itemSchema);