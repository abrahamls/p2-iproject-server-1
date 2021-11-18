const { User, PartiesUser, UsersRole } = require("../models");

class PlayerController {
  static async addRole(req, res, next) {
    try {
      const { RoleId } = req.body;
      const foundRole = await UsersRole.findOne({
        where: {
          UserId: req.currentUser.id,
          RoleId,
        },
      });
      if (foundRole) {
        throw { name: "duplicate", message: "you already added this role!" };
      }
      const newUserRole = await UsersRole.create({
        RoleId,
        UserId: req.currentUser.id,
      });
      res.status(201).json(newUserRole);
    } catch (error) {
      next(error);
    }
  }
  static async updateRank(req, res, next) {
    try {
      const { rank } = req.body;
      await User.update(
        { rank },
        {
          where: {
            id: req.currentUser.id,
          },
        }
      );
      res.status(200).json({ message: "Your Rank has been updated!" });
    } catch (error) {
      next(error);
    }
  }
  static async updateStatus(req, res, next) {
    try {
      const { UserId, PartyId } = req.query;
      await PartiesUser.update(
        {
          status: "approved",
        },
        {
          where: {
            UserId,
            PartyId,
          },
        }
      )
      res.status(200).json({ message: "status has been updated" })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PlayerController;
