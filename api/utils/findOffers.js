const Mobile = require('../model/mobile/mobile');
const Laptop = require('../model/laptop/laptop');
const Tablet = require('../model/tablet/tablet');
const Console = require('../model/console/console');
const SmartWatch = require('../model/smartWatch/smartWatch');

const handleSwitchProduct = async (item) => {
    switch (item) {
        case "mobile": return await Mobile.findOne()
        case "laptop": return await Laptop.findOne()
        case "tablet": return await Tablet.findOne()
        case "console": return await Console.findOne()
        case "smartwatch": return await SmartWatch.findOne()
        default: return {}
    }
}

const handleSaveData = async (item, product, id) => {
    switch (item) {
        case "mobile": {
            let mobile = await Mobile.findOne()

            let mobiles = mobile.mobiles.map(m => {
                if (m._id == id) {
                    m = product
                    return m
                }
                return m
            })
            mobile.mobiles = mobiles
            await mobile.save()
        }
        case "laptop": {
            let laptop = await Laptop.findOne()
            let laptops = laptop.laptops.map(l => {
                if (l._id == id) {
                    l = product
                    return l
                }
                return l
            })
            laptop.laptops = laptops
            await laptop.save()
        }
        case "tablet": {
            let tablet = await Tablet.findOne()
            let tablets = tablet.tablets.map(t => {
                if (t._id == id) {
                    t = product
                    return t
                }
                return t
            })
            tablet.tablets = tablets
            await tablet.save()
        }
        case "console": {
            let console = await Console.findOne()
            let consoles = console.consoles.map(c => {
                if (c._id == id) {
                    c = product
                    return c
                }
                return c
            })
            console.consoles = consoles
            await console.save()
        }
        case "smartwatch": {
            let smartwatch = await SmartWatch.findOne()
            let smartwatchs = smartwatch.smartwatchs.map(c => {
                if (c._id == id) {
                    c = product
                    return c
                }
                return c
            })
            smartwatch.smartwatchs = smartwatchs
            await smartwatch.save()
        }
    }
}

const findOffersProduct = async (data) => {
    let product = await handleSwitchProduct(data.category)
    product = product[`${data.category}s`]
    product.forEach(item => {
        if (item._id == data._id) {
            item = data
            handleSaveData(data.category, item, item._id)
        }
    })
}

const delOffersProduct = async (data) => {
    let product = await handleSwitchProduct(data.category)
    product = product[`${data.category}s`]
    product.forEach(item => {
        if (item._id == data._id) {
            item.off = " "
            item.offer = undefined
            handleSaveData(data.category, item, data._id)
        }
    })

}


module.exports = { findOffersProduct, delOffersProduct }