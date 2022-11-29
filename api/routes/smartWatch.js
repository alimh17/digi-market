const express = require("express")
const { allSmartWatch, delSmartWatch, receveSmartWatch } = require('../controllers/smart_watch/smartWatchController');

const route = express.Router()

route.post('/smart_watch', receveSmartWatch)
route.get("/get_smart_wath", allSmartWatch)
route.post("/del_smart_watch", delSmartWatch)

module.exports = route