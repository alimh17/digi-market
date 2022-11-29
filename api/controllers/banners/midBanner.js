const fs = require('fs')

const mongoose = require('mongoose');
const Banner = require('../../model/banners/midBanner');
// const delBanners = require('../../utils/delBanners');

const midBanner = async (req, res, next) => {

    try {
        if (!req.files) {
            return res.status(400).json({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            const banner = req.files.banner
            const name = banner.name
            const folder = `public/images/banners/mid_banner/`

            banner.mv(folder + name)

            await Banner.deleteMany({})
            //! ------------------- create new Object ------------------
            const newBanner = await Banner.create({
                _id: new mongoose.Types.ObjectId(),
                name,
                type: banner.mimetype,
                size: banner.size,
                path: `${folder + name}`
            })
            await newBanner.save().then(() => {
                //! ----------------- send success response ----------------

                return res.status(201).json({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        _id: new mongoose.Types.ObjectId(),
                        name,
                        type: banner.mimetype,
                        size: banner.size,
                        path: `${folder + name}`
                    }
                })
            }).catch(err => {
                return res.status(500).json({
                    status: false,
                    message: "expected name to be unique"
                })
            })
        }
    } catch (err) {
        console.log(err)
    }


}



module.exports = midBanner
