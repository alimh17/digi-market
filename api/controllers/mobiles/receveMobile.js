const _ = require('lodash');
const { mongoose } = require('mongoose');

const { mobileValidate } = require('../../utils/Validate');
const Mobiles = require('../../model/mobile/mobile');
const { mainMobilePath, pathImages } = require('../../utils/pathImageProduct');


const receveMobile = async (req, res, next) => {
    try {
        if (req.body) {
            const { error, value } = mobileValidate.validate(req.body, { abortEarly: false })

            if (error) {
                const message = error.details.map(item => item.message)
                return res.status(500).json({
                    status: "failed",
                    message
                })
            } else {
                const { name, price, screen, brand, network, ram, dimensions, weight, simcart, color, body, features, category } = value
                console.log(category);
                const image = req.files.image
                const mainImage = req.files.mainImage
                const mobiles = await Mobiles.findOne()
                let colors = color.split(",")
                colors = _.uniq(colors)
                const rate = Math.random() * (5 - 3) + 3
                const view = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const sell = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const date = new Date()

                //! ------------------ save main image ----------------
                const path = pathImages(image, `public/images/mobiles/`, mainImage)
                const mainPath = mainMobilePath(mainImage, image)

                if (mobiles) {
                    const sampleMobiles = [...mobiles.mobiles]
                    sampleMobiles.push({
                        name, price, screen, brand, network, ram, rate: rate.toString().slice(0, 3), dimensions, weight, simcart, color: colors, body, view: view.toString(), sell: sell.toString(), date, category,
                        features, images: path, mainImage: mainPath
                    })
                    const uniq = _.uniqBy(sampleMobiles, 'name')
                    await Mobiles.findByIdAndUpdate(mobiles._id, {
                        "$set": { mobiles: uniq }
                    })
                    return res.status(201).json({
                        status: "success",
                        message: "موبایل با موفقیت اضافه شد"
                    })
                } else {
                    const mobile = await Mobiles.create({
                        mobiles: [
                            {
                                _id: new mongoose.Types.ObjectId(),
                                name,
                                price,
                                screen,
                                brand,
                                network,
                                ram,
                                rate,
                                dimensions,
                                weight,
                                simcart,
                                view,
                                sell,
                                color,
                                body,
                                features,
                                date,
                                category,
                                images: path,
                                mainImage: mainPath
                            }
                        ]
                    })
                    await mobile.save(err => {
                        if (err) throw err
                        return res.status(201).json({
                            status: "success",
                            message: "موبایل با موفقیت اضافه شد"
                        })
                    })
                }
            }
        }

    } catch (err) {
        next(err)
    }

}




module.exports = receveMobile