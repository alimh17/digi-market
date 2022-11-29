const { mongoose, Schema } = require('mongoose');

const tabletSchema = new Schema({
    tablets: [
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
            internal_ram: {
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
            detail: String,
            body: String,
            date: Date
        }
    ]
})


module.exports = mongoose.model("tablet", tabletSchema)