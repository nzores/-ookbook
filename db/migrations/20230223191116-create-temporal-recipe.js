/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TemporalRecipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ingredientsCount: {
        type: Sequelize.INTEGER,
      },
      cookingTime: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.TEXT,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TemporalRecipes');
  },
};
