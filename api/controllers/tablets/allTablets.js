const Tablets = require("../../model/tablet/tablet")

const allTablets = async (req, res, next) => {
    try {
        let tablets = await Tablets.find()
        if (tablets) {
            tablets = tablets.map(item => {
                return item.tablets
            })
            return res.status(200).json({
                status: "success",
                data: tablets
            })
        } else {
            return res.status(500).json({
                status: "failed",
                message: "There is no tablet"
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

module.exports = allTablets