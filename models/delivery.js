module.exports = function (sequelize, DataTypes) {
  const Package = sequelize.define("Package", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Package.associate = function (models) {
    Package.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Package;
};
