const bcrypt = require("bcrypt");
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: DataTypes.INTEGER,
    pwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Package, {
      onDelete: "cascade",
    });
  };

  return User;
};
