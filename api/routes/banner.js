const express = require('express');

const bannerController = require('../controllers/banners/bannerController')

const router = express.Router();


router.post('/banner', bannerController.bannerFile)
router.post('/del_banners', bannerController.delBanners)
router.post('/mid_banner', bannerController.midBanner)
router.get('/mid_banner', bannerController.getMidBanner)
router.get("/all_banners", bannerController.sendBanners)


module.exports = router