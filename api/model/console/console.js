const { mongoose, Schema } = require('mongoose');

const consoleSchema = new Schema({
    consoles: [
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
            connection: {
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
            joyStick: {
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
            ram_space: {
                type: String,
                required: true
            },
            view: {
                type: String,
                required: true
            },
            dimensions: {
                type: String,
                required: true
            },
            sell: {
                type: String,
                required: true
            },
            offer: Number,
            off: String,
            category: String,
            detail: String,
            date: Date
        }
    ]
})


module.exports = mongoose.model("console", consoleSchema)