const express = require("express");
const PartyController = require("../controllers/PartyController");
const partyRouter = express();

partyRouter.get("/", PartyController.fetchParties);
partyRouter.post("/", PartyController.createParty);
partyRouter.get("/leadparties", PartyController.fetchLeadParties);
partyRouter.get("/memberparties", PartyController.fetchMemberParties);
partyRouter.get("/pendingparties", PartyController.fetchPendingParties);
partyRouter.get("/partymembers/:partyId", PartyController.fetchPartyParties);
partyRouter.get("/pendingmembers/:partyId", PartyController.fetchPendingMembers);
partyRouter.post("/:id", PartyController.createPartiesUser);

module.exports = partyRouter;
