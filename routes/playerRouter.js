const express = require('express')
const playerRouter = express()
const PlayerController = require("../controllers/PlayerController")

playerRouter.post("/", PlayerController.addRole)
playerRouter.put("/rank", PlayerController.updateRank)
playerRouter.patch("/status", PlayerController.updateStatus)

module.exports = playerRouter