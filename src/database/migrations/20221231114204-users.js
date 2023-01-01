'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.createTable('users', {
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
        email: {
          type: Sequelize.STRING,
          allowNull:false,
          //Vai logar atráves do email, logo precisa ser unico no BD
          unique:true,
        },
        //HASH É SEMELHANTE A CRIPTOGRAFIA MAS NÃO É CRIPTOGRAFIA
         password_hash: {
          type:Sequelize.STRING,
          allowNull: false,
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
    return await queryInterface.dropTable('users');
  }
};
