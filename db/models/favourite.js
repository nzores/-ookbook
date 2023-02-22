const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Favourite.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Favourite.init(
    {
      name: DataTypes.STRING,
      ingridients: DataTypes.TEXT,
      timeToCook: DataTypes.INTEGER,
      instruction: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      recipeApiId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favourite',
    }
  );
  return Favourite;
};
