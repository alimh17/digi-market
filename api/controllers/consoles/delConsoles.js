const Consoles = require('../../model/console/console');
const { rmDir } = require('../../utils/mkDir');

const delConsoles = async (req, res, next) => {

    try {
        let consoles = await Consoles.findOne()
        if (consoles) {
            const filter = consoles.consoles.filter(f => f._id != req.body.id)
            const path = consoles.consoles.map((item) => {
                if (item._id == req.body.id) {
                    const split = item.images[0].split("/")
                    const path = split[split.length - 2]
                    return path
                }
            })
            rmDir(`public/images/consoles/${path[0]}`)
            await Consoles.updateOne({ $set: { consoles: filter } })
            return res.status(200).json({
                status: "success",
                message: "کنسول بازی با موفقیت حذف شد"
            })
        } else {
            return res.status(404).json({
                status: "failed",
                message: "کنسول بازی پیدا نشد"
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

module.exports = delConsoles