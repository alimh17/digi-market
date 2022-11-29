const express = require("express")
const consolesControllers = require('../controllers/consoles/consolesControllers');

const route = express.Router()

route.post('/consoles', consolesControllers.receveConsole)
route.get("/get_consoles", consolesControllers.allConsoles)
route.post("/del_consoles", consolesControllers.delConsoles)

module.exports = route