const Laptops = require('../../model/laptop/laptop');

const allLaptops = async (req, res, next) => {
    try {
        let laptops = await Laptops.find()
        if (laptops) {
            laptops = laptops.map(item => {
                return item.laptops
            })
            return res.status(200).json({
                status: "success",
                data: laptops
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

module.exports = allLaptops