const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const positionsModel = mongoose.models("position", positionsSchema);

module.exports = positionsModel;