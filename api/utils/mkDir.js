
const fs = require('fs')

const mkMobileDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

const rmDir = (dir) => {
    try {
        if (dir) {
            fs.rmSync(dir, { recursive: true })
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    mkMobileDir,
    rmDir
}

