const SmartWatch = require('../../model/smartWatch/smartWatch');
const { rmDir } = require('../../utils/mkDir');

const delSmartWatch = async (req, res, next) => {
    try {
        let smartwatchs = await SmartWatch.findOne()
        if (smartwatchs) {
            const filter = smartwatchs.smartwatchs.filter(f => f._id != req.body.id)
            console.log(filter);
            const path = smartwatchs.smartwatchs.map((item) => {
                if (item._id == req.body.id) {
                    const split = item.images[0].split("/")
                    const path = split[split.length - 2]
                    return path
                }
            })
            rmDir(`public/images/smart_watch/${path[0]}`)
            await SmartWatch.updateOne({ $set: { smartwatchs: filter } })
            return res.status(200).json({
                status: "success",
                message: "ساعت هوشمند با موفقیت حذف شد"
            })
        } else {
            return res.status(404).json({
                status: "failed",
                message: "ساعت هوشمند پیدا نشد"
            })
        }
    } catch (err) {
        next(err)
        return res.status(500).json({
            status: "failed",
            message: "مشکلی پیش آمده است"
        })
    }
}

module.exports = delSmartWatch