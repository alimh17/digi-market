const fs = require('fs')

const delBanners = (folder) => {

    fs.readdir(folder, (err, files) => {
        if (err) throw err
        for (let file of files) {
            fs.unlinkSync(folder + file)
        }

    })

}


module.exports = delBanners