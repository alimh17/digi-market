const { mongoose, Schema } = require('mongoose');

const smartWatchSchema = new Schema({
    smartwatchs: [
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
            screenForm: {
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
            FrameComposition: {
                type: String,
                required: true
            },
            rate: {
                type: String,
                required: true
            },
            Application: {
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
            Appropriate: {
                type: String,
                required: true
            },
            weight: {
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


module.exports = mongoose.model("smartwatch", smartWatchSchema)