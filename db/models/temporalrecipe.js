const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TemporalRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      TemporalRecipe.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  TemporalRecipe.init({
    name: DataTypes.STRING,
    ingridients: DataTypes.TEXT,
    timeToCook: DataTypes.INTEGER,
    instruction: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    recipeApiId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TemporalRecipe',
  });
  return TemporalRecipe;
};
