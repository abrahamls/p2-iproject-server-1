"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    static associate(models) {
      // define association here
      Party.belongsToMany(models.User, {
        through: models.PartiesUser,
        as: "members",
      });
      Party.belongsTo(models.User, {
        as: "partyLeader",
      });
    }
  }
  Party.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required!",
          },
          notEmpty: {
            msg: "Name is required!",
          },
        },
      },
      partyLeaderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Mode is required!",
          },
          notEmpty: {
            msg: "Mode is required!",
          },
        },
      },
      schedule: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Schedule is required",
          },
          notEmpty: {
            msg: "Schedule is required",
          },
          isDate: {
            msg: "Invalid date format!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Party",
    }
  );
  return Party;
};
