const _ = require('lodash');
const { mongoose } = require('mongoose');

const { smartWatchValidation } = require('../../utils/Validate');
const SmartWatch = require('../../model/smartWatch/smartWatch');
const { mainMobilePath, pathImages } = require('../../utils/pathImageProduct');


const receveSmartWatch = async (req, res, next) => {
    try {
        if (req.body) {
            const { error, value } = smartWatchValidation.validate(req.body, { abortEarly: false })

            if (error) {
                const message = error.details.map(item => item.message)
                return res.status(500).json({
                    status: "failed",
                    message
                })
            } else {
                const { name, price, brand, screenForm,
                    FrameComposition,
                    Application,
                    strapMaterial,
                    Appropriate, weight, color, detail, category } = value

                const image = req.files.image
                const mainImage = req.files.mainImage
                const smartwatchs = await SmartWatch.findOne()
                let colors = color.split(",")
                colors = _.uniq(colors)
                const rate = Math.random() * (5 - 3) + 3
                const view = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const sell = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const date = new Date()


                //! ------------------ save main image ----------------
                const path = pathImages(image, `public/images/smart_watch/`, mainImage)
                const mainPath = mainMobilePath(mainImage, image)

                if (smartwatchs) {
                    const sampleSmartWatch = [...smartwatchs.smartwatchs]
                    sampleSmartWatch.push({
                        name, price, brand, screenForm, FrameComposition, rate: rate.toString().slice(0, 3), Application, weight, Appropriate, color: colors, view: view.toString(), sell: sell.toString(), date, category, strapMaterial,
                        detail, images: path, mainImage: mainPath
                    })
                    const uniq = _.uniqBy(sampleSmartWatch, '_id')
                    await SmartWatch.findOneAndUpdate(smartwatchs._id, {
                        $set: { smartwatchs: uniq }
                    })
                    return res.status(201).json({
                        status: "success",
                        message: "ساعت هوشمند با موفقیت اضافه شد"
                    })
                } else {
                    const smartwatch = await SmartWatch.create({
                        smartwatchs: [
                            {
                                _id: new mongoose.Types.ObjectId(),
                                name,
                                price,
                                brand,
                                rate,
                                weight,
                                view,
                                sell,
                                color,
                                date,
                                screenForm,
                                FrameComposition,
                                Application,
                                strapMaterial,
                                Appropriate,
                                detail,
                                category,
                                images: path,
                                mainImage: mainPath
                            }
                        ]
                    })
                    await smartwatch.save(err => {
                        if (err) throw err
                        return res.status(201).json({
                            status: "success",
                            message: "ساعت هوشمند با موفقیت اضافه شد"
                        })
                    })
                }
            }
        }

    } catch (err) {
        next(err)
    }

}


module.exports = receveSmartWatch