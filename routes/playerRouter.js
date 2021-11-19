const express = require('express')
const playerRouter = express()
const PlayerController = require("../controllers/PlayerController")
const { partyLeaderAuthorization } = require('../middlewares/authorization')

playerRouter.post("/role", PlayerController.addRole)
playerRouter.patch("/rank", PlayerController.updateRank)
playerRouter.patch("/status", partyLeaderAuthorization, PlayerController.updateStatus)

module.exports = playerRouter