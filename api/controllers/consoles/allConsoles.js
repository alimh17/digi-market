const Consoles = require('../../model/console/console');


const allConsoles = async (req, res, next) => {
    try {
        let consoles = await Consoles.find()
        if (consoles) {
            consoles = consoles.map(item => {
                return item.consoles
            })
            return res.status(200).json({
                status: "success",
                data: consoles
            })
        } else {
            return res.status(500).json({
                status: "failed",
                message: "There is no consoles"
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


module.exports = allConsoles