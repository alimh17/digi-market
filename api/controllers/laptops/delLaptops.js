const Laptops = require('../../model/laptop/laptop');
const { rmDir } = require('../../utils/mkDir');

const receveLaptop = async (req, res, next) => {
    try {
        let laptops = await Laptops.findOne()
        if (laptops) {
            const filter = laptops.laptops.filter(f => f._id != req.body.id)
            laptops.laptops.forEach((item) => {
                if (item._id == req.body.id) {
                    const split = item.images[0].split("/")
                    const path = split[split.length - 2]
                    rmDir(`public/images/laptops/${path}`)
                    return res.status(200).json({
                        status: "success",
                        message: "لپ تاپ با موفقیت حذف شد"
                    })
                } else {
                    return res.status(404).json({
                        status: "failed",
                        message: "لپ تاپ پیدا نشد"
                    })
                }
            })
            await Laptops.updateOne({ $set: { laptops: filter } })
        } else {
            return res.status(404).json({
                status: "failed",
                message: "لپ تاپ پیدا نشد"
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



module.exports = receveLaptop