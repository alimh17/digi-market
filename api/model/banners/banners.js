const { model, Schema } = require('mongoose');
const uniqeValidator = require('mongoose-unique-validator');



const bannersSchema = new Schema({
    _id: String,
    name: String,
    type: String,
    size: Number,
    path: String,
})

bannersSchema.plugin(uniqeValidator)


module.exports = model("bannersSchema", bannersSchema)