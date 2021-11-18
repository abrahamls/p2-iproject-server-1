const { Party, User, PartiesUser, Role } = require("../models");

class PartyController {
  static async fetchParties(req, res, next) {
    try {
      const foundParties = await Party.findAll({
        where: {
          "$members.PartiesUser.status$": "approved",
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: User,
          as: "members",
          attributes: ["id", "name", "rank"],
          include: {
            model: Role,
            as: "roles",
            attributes: ["title"],
          },
        },
      });
      res.status(200).json(foundParties);
    } catch (error) {
      next(error);
    }
  }
  static async createParty(req, res, next) {
    try {
      const { name, mode, schedule } = req.body;
      const newParty = await Party.create({
        name,
        mode,
        partyLeaderId: req.currentUser.id,
        schedule,
      });
      await PartiesUser.create({
        UserId: req.currentUser.id,
        PartyId: newParty.id,
        status: "approved",
      });
      res.status(201).json(newParty);
    } catch (error) {
      next(error);
    }
  }
  static async createPartiesUser(req, res, next) {
    try {
      const PartyId = +req.params.id;
      const UserId = req.currentUser.id;
      const oldRequest = await PartiesUser.findOne({
        where: {
          PartyId,
          UserId,
        },
      });
      if (oldRequest) {
        if (oldRequest.status === "approved") {
          throw {
            name: "duplicate",
            message: "You are already a member of this party!",
          };
        }
        if (oldRequest.status === "pending") {
          throw {
            name: "duplicate",
            message:
              "You already requested to join this party! Please wait for the Party Leader to proccess your request",
          };
        }
      }
      const newPartyMember = await PartiesUser.create({
        PartyId,
        UserId,
      });
      res.status(201).json(newPartyMember);
    } catch (error) {
      next(error);
    }
  }
  static async fetchMyParties(req, res, next) {
    try {
      const foundParties = await User.findByPk(req.currentUser.id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Party,
          as: "parties",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      });
      res.status(200).json(foundParties);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async fetchLeadParties(req, res, next) {
    try {
      const foundLeadParty = await Party.findAll({
        where: {
          partyLeaderId: req.currentUser.id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(foundLeadParty);
    } catch (error) {
      next(error);
    }
  }
  static async fetchMemberParties(req, res, next) {
    try {
      const foundMemberParties = await PartiesUser.findAll({
        where: {
          UserId: req.currentUser.id,
          status: "approved",
        },
        include: {
          model: Party,
          as: "MemberParties",
        },
      });
      res.status(200).json(foundMemberParties);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async fetchPendingParties(req, res, next) {
    try {
      const pendingParties = await PartiesUser.findAll({
        where: {
          UserId: req.currentUser.id,
          status: "pending",
        },
      });
      res.status(200).json(pendingParties);
    } catch (error) {
      next(error);
    }
  }
  static async fetchPendingMembers(req, res, next) {
    try {
      const PartyId = +req.params.partyId;
      const foundMember = await PartiesUser.findAll({
        where: {
          PartyId,
          status: "pending",
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: User,
          as: "Users",
          attributes: ["name"],
        },
      });
      res.status(200).json(foundMember);
    } catch (error) {
      next(error);
    }
  }
  static async fetchPartyParties(req, res, next) {
    try {
      const PartyId = req.params.partyId
      const foundMembers = await PartiesUser.findAll({
        where: {
          status: "approved",
          PartyId
        },
        include: {
          model: User,
          as: "Users",
          attributes: ["id", "name", "rank"]
        }
      })
      const resp = foundMembers.map(el => el.Users)
      res.status(200).json(resp)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PartyController;
