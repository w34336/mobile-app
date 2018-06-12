'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let orderlineSchema = new Schema({
    itemId:{type:String},
    count:{type:Number}
});

module.exports = mongo.model('OrderLine',orderlineSchema);