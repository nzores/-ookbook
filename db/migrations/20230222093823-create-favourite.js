/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favourites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      ingridients: {
        type: Sequelize.TEXT,
      },
      timeToCook: {
        type: Sequelize.INTEGER,
      },
      instruction: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      recipeApiId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Favourites');
  },
};
