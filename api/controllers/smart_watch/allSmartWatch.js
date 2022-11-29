const SmartWatch = require('../../model/smartWatch/smartWatch');

const allSmartWatch = async (req, res, next) => {
    try {
        let smartwatchs = await SmartWatch.find()
        if (smartwatchs) {
            smartwatchs = smartwatchs.map(item => {
                return item.smartwatchs
            })
            return res.status(200).json({
                status: "success",
                data: smartwatchs
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




module.exports = allSmartWatch