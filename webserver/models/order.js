'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let orderSchema = new Schema({

    orderLineIds:[String],
    userId:{type:String},
    contactId:{type:String},
    status:{type:String},
    date:{type:String},

});

module.exports = mongo.model('Order',orderSchema);