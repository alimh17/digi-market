const { Schema, model } = require("mongoose")


const offerSchema = new Schema({
    offers: []
})




module.exports = model("offers", offerSchema)