const express = require("express")
const tabletControllers = require('../controllers/tablets/tabletControllers');

const route = express.Router()

route.post('/tablets', tabletControllers.receveTablets)
route.get("/get_tablets", tabletControllers.allTablets)
route.post("/del_tablets", tabletControllers.delTablets)

module.exports = route