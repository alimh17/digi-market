const Offers = require("../../model/offers/offer")
const { findOffersProduct, delOffersProduct } = require("../../utils/findOffers")

const setOffersProduct = async (req, res) => {
    try {
        let offers = new Offers()
        let findOffer = await Offers.find()
        const { allData, singleData } = req.body.data


        if (findOffer.length === 0) {
            allData.forEach(product => {
                offers.offers.push(product)
            })
            offers.save()
            await findOffersProduct(singleData)

            res.status(200).json({ message: "success" })
        } else {
            findOffer[0].offers = []
            allData.forEach(product => {
                findOffer[0].offers.push(product)
            })
            offers = findOffer[0]
            offers.save()

            await findOffersProduct(singleData)

            res.status(200).json({ message: "success" })
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "failed!! try again" })
    }

}

const getOffersProduct = async (req, res) => {
    try {
        const offers = await Offers.find()
        if (offers) {
            res.status(200).json({ message: "success", data: offers })
        } else {
            res.status(404).json({ message: "not found!" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "failed!! try again" })
    }
}


const delOfferProduct = async (req, res) => {
    try {

        let offers = new Offers()
        let findOffer = await Offers.find()

        const { allProduct, singleProduct } = req.body.data

        if (findOffer.length === 0) {
            allProduct.forEach(product => {
                offers.offers.push(product)
            })
            offers.save()
            await delOffersProduct(singleProduct)

            res.status(200).json({ message: "success" })
        } else {
            findOffer[0].offers = []
            allProduct.forEach(product => {
                findOffer[0].offers.push(product)
            })
            offers = findOffer[0]
            offers.save()
            await delOffersProduct(singleProduct)

            res.status(200).json({ message: "success" })
        }


    } catch (err) {
        console.log(err)
    }
}



module.exports = {
    setOffersProduct,
    getOffersProduct,
    delOfferProduct
}