const Mobiles = require('../../model/mobile/mobile');
const { rmDir } = require('../../utils/mkDir');

const delMobiles = async (req, res, next) => {
    try {
        let mobiles = await Mobiles.findOne()
        if (mobiles) {
            const filter = mobiles.mobiles.filter(f => f._id != req.body.id)
            const path = mobiles.mobiles.map((item) => {
                if (item._id == req.body.id) {
                    const split = item.images[0].split("/")
                    const path = split[split.length - 2]
                    return path
                }
            })
            rmDir(`public/images/mobiles/${path[0]}`)
            await Mobiles.updateOne({ $set: { mobiles: filter } })
            return res.status(200).json({
                status: "success",
                message: "موبایل با موفقیت حذف شد"
            })
        } else {
            return res.status(404).json({
                status: "failed",
                message: "موبایل پیدا نشد"
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

module.exports = delMobiles