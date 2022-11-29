
const { mongoose } = require('mongoose');
const Banners = require('../../model/banners/banners');

const getBannerFile = async (req, res, next) => {

    try {
        if (!req.files || !req.body) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            let banner = req.files.banner
            const name = banner.name

            //! ------------------ save in directory ---------------------
            banner.mv('public/images/banners/' + name)

            //! ------------------- create new Object ------------------
            const find = await Banners.findOne({ name })
            if (!find) {
                const newBanner = await Banners.create({
                    _id: new mongoose.Types.ObjectId(),
                    name,
                    type: banner.mimetype,
                    size: banner.size,
                    path: `public/images/banners/${name}`
                })
                await newBanner.save().then(() => {
                    //! ----------------- send success response ----------------
                    res.status(201).json({
                        status: true,
                        message: 'File is uploaded',
                        data: {
                            _id: new mongoose.Types.ObjectId(),
                            name,
                            type: banner.mimetype,
                            size: banner.size,
                            path: `public/images/banners/${name}`
                        }
                    })
                }).catch(err => {
                    res.status(500).json({
                        status: false,
                        message: "expected name to be unique"
                    })
                })
            } else {
                res.status(500).json({
                    status: false,
                    message: "expected name to be unique"
                })
            }
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = getBannerFile