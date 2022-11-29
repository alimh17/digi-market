const express = require("express")
const laptopsControllers = require('../controllers/laptops/laptopsControllers');

const route = express.Router()

route.post('/laptops', laptopsControllers.receveLaptop)
route.get("/get_laptops", laptopsControllers.allLaptops)
route.post("/del_laptops", laptopsControllers.delLaptops)

module.exports = route