const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Post = sequelize.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Post;
