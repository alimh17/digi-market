const express = require("express")
const { setOffersProduct, getOffersProduct, delOfferProduct } = require("../controllers/offers/offersController")

const router = express.Router()


router.post("/offers", setOffersProduct)
router.get("/get_offers", getOffersProduct)
router.post("/del_offers", delOfferProduct)



module.exports = router