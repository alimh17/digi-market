const Tablets = require("../../model/tablet/tablet")
const { rmDir } = require('../../utils/mkDir');


const delTablets = async (req, res, next) => {
    try {
        let tablets = await Tablets.findOne()
        if (tablets) {
            const filter = tablets.tablets.filter(f => f._id != req.body.id)
            const path = tablets.tablets.map((item) => {
                if (item._id == req.body.id) {
                    const split = item.images[0].split("/")
                    const path = split[split.length - 2]
                    return path
                }
            })
            console.log(path)
            rmDir(`public/images/tablets/${path[0]}`)
            await Tablets.updateOne({ $set: { tablets: filter } })
            return res.status(200).json({
                status: "success",
                message: "تبلت با موفقیت حذف شد"
            })
        } else {
            return res.status(404).json({
                status: "failed",
                message: "تبلت پیدا نشد"
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


module.exports = delTablets