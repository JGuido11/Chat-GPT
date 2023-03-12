const express = require("express")
const promptController = require("../Controllers/prompt-controller")
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)

module.exports = routes