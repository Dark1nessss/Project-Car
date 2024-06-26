'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Marcas', [
      {
        nome: 'Mercedes',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'BMW',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Mitsubishi',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Citroen',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Fiat',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Renault',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Peugeot',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Toyota',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Honda',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Ford',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Chevrolet',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Volkswagen',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Audi',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Porsche',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Lamborghini',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Ferrari',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Jaguar',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Land Rover',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Nissan',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Mazda',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Subaru',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Hyundai',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Kia',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Volvo',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Saab',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Suzuki',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Skoda',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Seat',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Tesla',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Maserati',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Bentley',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Rolls-Royce',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Aston Martin',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Alfa Romeo',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Bugatti',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Chrysler',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Dodge',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Jeep',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Ram',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Buick',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Cadillac',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'GMC',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Genesis',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Infiniti',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Lexus',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Mini',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Acura',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Lincoln',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'McLaren',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Pagani',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Rivian',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Lucid',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Polestar',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
