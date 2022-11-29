const _ = require('lodash')
const { mongoose } = require('mongoose');


const Tablets = require("../../model/tablet/tablet")
const { tabletValidation } = require("../../utils/Validate")
const { mainMobilePath, pathImages } = require('../../utils/pathImageProduct');

const receveTablets = async (req, res, next) => {

    try {
        if (req.body) {
            const { error, value } = tabletValidation.validate(req.body, { abortEarly: false })

            if (error) {
                const message = error.details.map(item => item.message)
                return res.status(500).json({
                    status: "failed",
                    message
                })
            } else {
                const { name, price, brand, network, ram, internal_ram, weight, simcart, color, body, detail } = value
                const image = req.files.image
                const mainImage = req.files.mainImage
                const tablets = await Tablets.findOne()
                let colors = color.split(",")
                colors = _.uniq(colors)
                const rate = Math.random() * (5 - 3) + 3
                const view = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const sell = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const date = new Date()

                //! ------------------ save main image ----------------
                const path = pathImages(image, `public/images/tablets/`, mainImage)
                const mainPath = mainMobilePath(mainImage, image)

                if (tablets) {
                    const sampleTablets = [...tablets.tablets]
                    sampleTablets.push({
                        name, price, brand, network, ram, internal_ram, rate: rate.toString().slice(0, 3), weight, simcart, color: colors, body, detail, view: view.toString(), sell: sell.toString(), date,
                        images: path, mainImage: mainPath
                    })
                    const uniq = _.uniqBy(sampleTablets, 'name')
                    await Tablets.findByIdAndUpdate(tablets._id, {
                        "$set": { tablets: uniq }
                    })
                    return res.status(201).json({
                        status: "success",
                        message: "تبلت با موفقیت اضافه شد"
                    })
                } else {
                    const tablet = await Tablets.create({
                        tablets: [
                            {
                                _id: new mongoose.Types.ObjectId(),
                                name,
                                price,
                                brand,
                                network,
                                ram,
                                internal_ram,
                                rate: rate.toString().slice(0, 3),
                                weight,
                                simcart,
                                view,
                                sell,
                                color,
                                body,
                                detail,
                                date,
                                images: path,
                                mainImage: mainPath
                            }
                        ]
                    })
                    await tablet.save(err => {
                        if (err) throw err
                        return res.status(201).json({
                            status: "success",
                            message: "تبلت  با موفقیت اضافه شد"
                        })
                    })
                }
            }
        }
    } catch (err) {
        next(err)
    }
}



module.exports = receveTablets