'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let contactSchema = new Schema({
    email:{type: String},
    name:{type:String},
    phone:{type:String},
    address:{type:String},
    country:{type:String},
    city:{type:String},
});

module.exports = mongo.model('Contact',contactSchema);