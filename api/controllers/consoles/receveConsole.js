const _ = require('lodash');
const { mongoose } = require('mongoose');

const { consoleValidation } = require('../../utils/Validate');
const Consoles = require('../../model/console/console');
const { mainMobilePath, pathImages } = require('../../utils/pathImageProduct');

const reseveConsole = async (req, res, next) => {
    try {
        if (req.body) {
            const { error, value } = consoleValidation.validate(req.body, { abortEarly: false })

            if (error) {
                const message = error.details.map(item => item.message)
                console.log(message)
                return res.status(500).json({
                    status: "failed",
                    message
                })
            } else {
                const { name, price, connection, joyStick, ram, dimensions, ram_space, detail } = value
                const image = req.files.image
                const mainImage = req.files.mainImage
                const consoles = await Consoles.findOne()
                const rate = Math.random() * (5 - 3) + 3
                const view = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const sell = Math.floor(Math.random() * (1500 - 1000) + 1000)
                const date = new Date()

                //! ------------------ save main image ----------------
                const path = pathImages(image, `public/images/consoles/`, mainImage)
                const mainPath = mainMobilePath(mainImage, image)

                if (consoles) {
                    const sampleConsoles = [...consoles.consoles]
                    sampleConsoles.push({
                        name, price, connection, joyStick, detail, ram, ram_space, rate: rate.toString().slice(0, 3), dimensions, view: view.toString(), sell: sell.toString(), date,
                        images: path, mainImage: mainPath
                    })
                    const uniq = _.uniqBy(sampleConsoles, 'name')
                    await Consoles.findByIdAndUpdate(consoles._id, {
                        "$set": { consoles: uniq }
                    })
                    return res.status(201).json({
                        status: "success",
                        message: "کنسول با موفقیت اضافه شد"
                    })
                } else {
                    const console = await Consoles.create({
                        consoles: [
                            {
                                _id: new mongoose.Types.ObjectId(),
                                name,
                                price,
                                connection,
                                detail,
                                ram,
                                ram_space,
                                joyStick,
                                rate,
                                dimensions,
                                view,
                                sell,
                                date,
                                images: path,
                                mainImage: mainPath
                            }
                        ]
                    })
                    await console.save(err => {
                        if (err) throw err
                        return res.status(201).json({
                            status: "success",
                            message: "کنسول با موفقیت اضافه شد"
                        })
                    })
                }
            }
        }

    } catch (err) {
        next(err)
    }
}


module.exports = reseveConsole