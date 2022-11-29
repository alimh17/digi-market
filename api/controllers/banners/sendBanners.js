const Banners = require('../../model/banners/banners');

//! ---------------- Get all banners of DB and send to client ------------

const sendBanners = async (req, res, next) => {
    try {

        const allBanners = await Banners.find()

        if (!allBanners) {
            return res.status(400).json({
                message: "failed",
            })
        }

        return res.status(200).json({
            message: "success",
            data: allBanners
        })
    } catch (err) {
        console.log(err)
    }
}



module.exports = sendBanners