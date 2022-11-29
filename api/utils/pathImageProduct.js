const _ = require('lodash')

const { mkMobileDir } = require("./mkDir")
const { saveMobilesImage, saveLaptopsImage } = require("./saveProductImages")

const pathImages = (image, root) => {
    if (image.length >= 2) {
        const path = image.map(item => {
            let dir = `${root + image[0].name.replace(" ", "_")}/`
            dir = _.replace(dir, "jpge", "")
            dir = _.replace(dir, "png", "")
            dir = _.replace(dir, "jpg", "")
            mkMobileDir(dir)
            const path = saveMobilesImage(item, dir, item.name)
            return path
        })
        return path
    } else {
        let dir = `${root + image.name}/`
        dir = _.replace(dir, "jpge", "")
        dir = _.replace(dir, "png", "")
        dir = _.replace(dir, "jpg", "")
        mkMobileDir(dir)
        const path = saveMobilesImage(image, dir, image.name)
        return path
    }
}

const mainMobilePath = (main, image) => {
    let name
    if (image.length >= 2) {
        name = image[0].name
    } else {
        name = image.name
    }
    name = _.replace(name, "jpg", "")
    name = _.replace(name, "png", "")
    name = _.replace(name, "jpeg", "")
    name = _.replace(name, " ", "_")
    const path = saveMobilesImage(main, `public/images/mobiles/${name}/`, main.name)
    return path
}


const mainLaptopPath = (main, image) => {
    let name
    if (image.length >= 2) {
        name = image[0].name
    } else {
        name = image.name
    }
    name = _.replace(name, "jpg", "")
    name = _.replace(name, "png", "")
    name = _.replace(name, "jpeg", "")
    name = _.replace(name, " ", "_")
    const path = saveLaptopsImage(main, `public/images/laptops/${name}/`, main.name)
    return path
}

module.exports = {
    pathImages,
    mainMobilePath,
    mainLaptopPath
}