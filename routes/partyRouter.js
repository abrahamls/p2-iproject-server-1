const express = require('express')
const PartyController = require('../controllers/PartyController')
const partyRouter = express()

partyRouter.get('/', PartyController.fetchParties)
partyRouter.post('/', PartyController.createParty)
partyRouter.get('/myparties', PartyController.fetchMyParties)
partyRouter.post('/:id', PartyController.createPartiesUser)

module.exports = partyRouter