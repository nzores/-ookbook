'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TemporalRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TemporalRecipe.init({
    name: DataTypes.STRING,
    ingredientsCount: DataTypes.INTEGER,
    cookingTime: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TemporalRecipe',
  });
  return TemporalRecipe;
};