const { Party } = require("../models");

async function partyLeaderAuthorization(req, res, next) {
  try {
    const { PartyId } = req.query;
    const foundParty = await Party.findByPk(PartyId);
    if (!foundParty) {
      throw { name: "notFound", message: "Party Not Found" };
    }
    if (foundParty.partyLeaderId !== req.currentUser.id) {
      throw { name: "forbidden", message: "You are not authorized!" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  partyLeaderAuthorization,
};
