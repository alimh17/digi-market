
const Banner = require('../../model/banners/midBanner');


const getMidBanner = async (req, res, next) => {

    try {
        const banner = await Banner.find({})
        if (!banner) {
            return res.status(400).json({
                message: "failed",
                status: "400"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success",
            data: banner[0]
        })

    } catch (err) {
        console.log(err)
    }

}

module.exports = getMidBanner