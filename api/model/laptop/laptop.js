const { mongoose, Schema } = require('mongoose');

const laptopSchema = new Schema({
    laptops: [
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
            rate: {
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
            cpu_series: {
                type: String,
                required: true
            },
            gpu_maker: {
                type: String,
                required: true
            },
            cpu_maker: {
                type: String,
                required: true
            },
            cpu_model: {
                type: String,
                required: true
            },
            ram: {
                type: String,
                required: true
            },
            ram_type: {
                type: String,
                required: true
            },
            detail: {
                type: String,
                required: true
            },
            offer: Number,
            off: String,
            category: String,
            date: Date
        }
    ]
})


module.exports = mongoose.model("laptop", laptopSchema)