
const _ = require('lodash');
const Laptops = require('../../model/laptop/laptop')
const { mongoose } = require('mongoose');

const { laptopValdidate } = require('../../utils/Validate');
const { pathImages, mainLaptopPath } = require('../../utils/pathImageProduct');


const receveLaptop = async (req, res, next) => {
    try {

        const { error, value } = laptopValdidate.validate(req.body, { abortEarly: false })
        if (error) {
            const message = error.details.map(item => item.message)
            return res.status(500).json({
                status: "failed",
                message
            })
        } else {
            const { name, price, screen, brand, cpu_model, ram, dimensions, weight, cpu_series, color, gpu_maker, ram_type, cpu_maker, detail } = value


            const image = req.files.image
            const mainImage = req.files.mainImage
            const laptops = await Laptops.findOne()
            let colors = color.split(",")
            colors = _.uniq(colors)
            let rate = Math.random() * (5 - 3) + 3
            rate = rate.toString().slice(0, 3)
            const view = Math.floor(Math.random() * (1500 - 1000) + 1000)
            const sell = Math.floor(Math.random() * (1500 - 1000) + 1000)
            const date = new Date()

            const path = pathImages(image, `public/images/laptops/`, mainImage)
            const mainPath = mainLaptopPath(mainImage, image)

            if (laptops) {
                const sampleLaptops = [...laptops.laptops]
                sampleLaptops.push({
                    name, price, screen, brand, cpu_model, ram, dimensions, weight, cpu_series, gpu_maker, ram_type, cpu_maker, detail, rate,
                    weight, color: colors, view: view.toString(), sell: sell.toString(), date,
                    images: path, mainImage: mainPath
                })
                const uniq = _.uniqBy(sampleLaptops, 'name')
                await Laptops.findByIdAndUpdate(laptops._id, {
                    "$set": { laptops: uniq }
                })
                return res.status(201).json({
                    status: "success",
                    message: "لپ تاپ با موفقیت اضافه شد"
                })
            } else {
                const laptop = await Laptops.create({
                    laptops: [
                        {
                            _id: new mongoose.Types.ObjectId(),
                            name,
                            price,
                            screen,
                            brand,
                            ram,
                            rate,
                            dimensions,
                            weight,
                            view,
                            sell,
                            color,
                            cpu_model,
                            cpu_series,
                            gpu_maker,
                            ram_type,
                            cpu_maker,
                            detail,
                            images: path,
                            mainImage: mainPath,
                            date
                        }
                    ]
                })
                await laptop.save(err => {
                    if (err) throw err
                    return res.status(201).json({
                        status: "success",
                        message: "لپ تاپ با موفقیت اضافه شد"
                    })
                })
            }
        }
    } catch (err) {
        next(err)
    }
}



module.exports = receveLaptop