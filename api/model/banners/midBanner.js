const { Schema, model } = require('mongoose');


const midBanner = new Schema({
    _id: String,
    name: {
        type: String,
        unique: true,
    },
    type: String,
    size: Number,
    path: String,
})


module.exports = model("midBanner", midBanner)