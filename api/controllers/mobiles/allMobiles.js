const Mobiles = require('../../model/mobile/mobile');

const allMobiles = async (req, res, next) => {
    try {
        let mobiles = await Mobiles.find()
        if (mobiles) {
            mobiles = mobiles.map(item => {
                return item.mobiles
            })
            return res.status(200).json({
                status: "success",
                data: mobiles
            })
        } else {
            return res.status(500).json({
                status: "failed",
                message: "There is no mobile"
            })
        }

    } catch (err) {
        next(err)
        res.status(500).json({
            status: "failed",
            message: "There is a problem"
        })
    }
}




module.exports = allMobiles