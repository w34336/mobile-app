'use strict';
const mongo = require('mongoose');
const Schema = mongo.Schema;


let cartSchema = new Schema({
    orderLineIds:[String]
});

module.exports = mongo.model('Cart',cartSchema);