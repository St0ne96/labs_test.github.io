'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ID: {
        type: DataTypes.INTEGER
      },
      pwd: {
        type: DataTypes.INTEGER
      },
      userName: {
        type: DataTypes.INTEGER,
      },
      userEmail: {
        type: DataTypes.INTEGER,
      },
      userPhone: {
        type: DataTypes.INTEGER,
      },
      userAddress: {
        type: DataTypes.INTEGER,
      },
      userPoint: {
        type: DataTypes.INTEGER,
      },
      userGrade:{
        type: DataTypes.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
      }
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'User',
    }
  );
  return User;
};