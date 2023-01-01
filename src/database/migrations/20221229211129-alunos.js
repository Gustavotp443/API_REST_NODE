'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.createTable('alunos', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull:false,
        },
        altura: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        peso: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        //Sequelize vai criar os campos abaixo automatico, não preciso enviar os dados
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }
    });

  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('alunos');
  }
};
