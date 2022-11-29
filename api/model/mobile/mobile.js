const { mongoose, Schema } = require('mongoose');

const mobilesSchema = new Schema({
    mobiles: [
        {
            name: {
                type: String,
                required: true,
                unique: true,
            },
            price: {
                type: String,
                required: true
            },
            screen: {
                type: String,
                required: true
            },
            brand: {
                type: String,
                required: true
            },
            mainImage: {
                type: String,
            },
            images: [
                {
                    type: String,
                    required: true
                }
            ],
            network: {
                type: String,
                required: true
            },
            rate: {
                type: String,
                required: true
            },
            ram: {
                type: String,
                required: true
            },
            view: {
                type: String,
                required: true
            },
            sell: {
                type: String,
                required: true
            },
            dimensions: {
                type: String,
                required: true
            },
            weight: {
                type: String,
                required: true
            },
            simcart: {
                type: String,
                required: true
            },
            color: {
                type: Array,
                required: true
            },
            offer: Number,
            off: String,
            category: String,
            body: String,
            features: String,
            date: Date
        }
    ]
})


module.exports = mongoose.model("mobiles", mobilesSchema)