'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Carros', [
      // Mercedes-Benz
      {
        marca_id: 1,
        modelo_id: 1,
        ano: 2020,
        preco: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 1,
        modelo_id: 2,
        ano: 2021,
        preco: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // BMW
      {
        marca_id: 2,
        modelo_id: 3,
        ano: 2020,
        preco: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 2,
        modelo_id: 4,
        ano: 2022,
        preco: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mitsubishi
      {
        marca_id: 3,
        modelo_id: 5,
        ano: 2021,
        preco: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 3,
        modelo_id: 6,
        ano: 2023,
        preco: 28000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Citroen
      {
        marca_id: 4,
        modelo_id: 7,
        ano: 2019,
        preco: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 4,
        modelo_id: 8,
        ano: 2021,
        preco: 22000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Fiat
      {
        marca_id: 5,
        modelo_id: 9,
        ano: 2020,
        preco: 18000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 5,
        modelo_id: 10,
        ano: 2022,
        preco: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Renault
      {
        marca_id: 6,
        modelo_id: 11,
        ano: 2021,
        preco: 22000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 6,
        modelo_id: 12,
        ano: 2023,
        preco: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Peugeot
      {
        marca_id: 7,
        modelo_id: 13,
        ano: 2019,
        preco: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 7,
        modelo_id: 14,
        ano: 2021,
        preco: 22000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Toyota
      {
        marca_id: 8,
        modelo_id: 15,
        ano: 2020,
        preco: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 8,
        modelo_id: 16,
        ano: 2022,
        preco: 28000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Honda
      {
        marca_id: 9,
        modelo_id: 17,
        ano: 2021,
        preco: 23000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 9,
        modelo_id: 18,
        ano: 2023,
        preco: 26000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ford
      {
        marca_id: 10,
        modelo_id: 19,
        ano: 2020,
        preco: 27000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 10,
        modelo_id: 20,
        ano: 2022,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Chevrolet
      {
        marca_id: 11,
        modelo_id: 21,
        ano: 2021,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 11,
        modelo_id: 22,
        ano: 2023,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Volkswagen
      {
        marca_id: 12,
        modelo_id: 23,
        ano: 2019,
        preco: 28000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 12,
        modelo_id: 24,
        ano: 2021,
        preco: 32000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Audi
      {
        marca_id: 13,
        modelo_id: 25,
        ano: 2020,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 13,
        modelo_id: 26,
        ano: 2022,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Porsche
      {
        marca_id: 14,
        modelo_id: 27,
        ano: 2019,
        preco: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 14,
        modelo_id: 28,
        ano: 2021,
        preco: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lamborghini
      {
        marca_id: 15,
        modelo_id: 29,
        ano: 2020,
        preco: 250000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 15,
        modelo_id: 30,
        ano: 2022,
        preco: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ferrari
      {
        marca_id: 16,
        modelo_id: 31,
        ano: 2021,
        preco: 350000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 16,
        modelo_id: 32,
        ano: 2023,
        preco: 400000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Jaguar
      {
        marca_id: 17,
        modelo_id: 33,
        ano: 2019,
        preco: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 17,
        modelo_id: 34,
        ano: 2021,
        preco: 65000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Land Rover
      {
        marca_id: 18,
        modelo_id: 35,
        ano: 2020,
        preco: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 18,
        modelo_id: 36,
        ano: 2022,
        preco: 75000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Nissan
      {
        marca_id: 19,
        modelo_id: 37,
        ano: 2019,
        preco: 22000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 19,
        modelo_id: 38,
        ano: 2021,
        preco: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mazda
      {
        marca_id: 20,
        modelo_id: 39,
        ano: 2020,
        preco: 23000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 20,
        modelo_id: 40,
        ano: 2022,
        preco: 26000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Subaru
      {
        marca_id: 21,
        modelo_id: 41,
        ano: 2021,
        preco: 27000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 21,
        modelo_id: 42,
        ano: 2023,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Hyundai
      {
        marca_id: 22,
        modelo_id: 43,
        ano: 2019,
        preco: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 22,
        modelo_id: 44,
        ano: 2021,
        preco: 22000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Kia
      {
        marca_id: 23,
        modelo_id: 45,
        ano: 2020,
        preco: 24000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 23,
        modelo_id: 46,
        ano: 2022,
        preco: 27000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Volvo
      {
        marca_id: 24,
        modelo_id: 47,
        ano: 2019,
        preco: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 24,
        modelo_id: 48,
        ano: 2021,
        preco: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Saab
      {
        marca_id: 25,
        modelo_id: 49,
        ano: 2020,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 25,
        modelo_id: 50,
        ano: 2022,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Suzuki
      {
        marca_id: 26,
        modelo_id: 51,
        ano: 2021,
        preco: 18000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 26,
        modelo_id: 52,
        ano: 2023,
        preco: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Skoda
      {
        marca_id: 27,
        modelo_id: 53,
        ano: 2019,
        preco: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 27,
        modelo_id: 54,
        ano: 2021,
        preco: 22000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Seat
      {
        marca_id: 28,
        modelo_id: 55,
        ano: 2020,
        preco: 23000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 28,
        modelo_id: 56,
        ano: 2022,
        preco: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Tesla
      {
        marca_id: 29,
        modelo_id: 57,
        ano: 2021,
        preco: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 29,
        modelo_id: 58,
        ano: 2023,
        preco: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Maserati
      {
        marca_id: 30,
        modelo_id: 59,
        ano: 2020,
        preco: 120000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 30,
        modelo_id: 60,
        ano: 2022,
        preco: 150000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bentley
      {
        marca_id: 31,
        modelo_id: 61,
        ano: 2019,
        preco: 180000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 31,
        modelo_id: 62,
        ano: 2021,
        preco: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Rolls-Royce
      {
        marca_id: 32,
        modelo_id: 63,
        ano: 2020,
        preco: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 32,
        modelo_id: 64,
        ano: 2022,
        preco: 350000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Aston Martin
      {
        marca_id: 33,
        modelo_id: 65,
        ano: 2019,
        preco: 250000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 33,
        modelo_id: 66,
        ano: 2021,
        preco: 280000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Alfa Romeo
      {
        marca_id: 34,
        modelo_id: 67,
        ano: 2020,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 34,
        modelo_id: 68,
        ano: 2022,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bugatti
      {
        marca_id: 35,
        modelo_id: 69,
        ano: 2019,
        preco: 1500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 35,
        modelo_id: 70,
        ano: 2021,
        preco: 2000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Chrysler
      {
        marca_id: 36,
        modelo_id: 71,
        ano: 2020,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 36,
        modelo_id: 72,
        ano: 2022,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Dodge
      {
        marca_id: 37,
        modelo_id: 73,
        ano: 2021,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 37,
        modelo_id: 74,
        ano: 2023,
        preco: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Jeep
      {
        marca_id: 38,
        modelo_id: 75,
        ano: 2020,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 38,
        modelo_id: 76,
        ano: 2022,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // RAM
      {
        marca_id: 39,
        modelo_id: 77,
        ano: 2019,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 39,
        modelo_id: 78,
        ano: 2021,
        preco: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Buick
      {
        marca_id: 40,
        modelo_id: 79,
        ano: 2020,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 40,
        modelo_id: 80,
        ano: 2022,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Cadillac
      {
        marca_id: 41,
        modelo_id: 81,
        ano: 2019,
        preco: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 41,
        modelo_id: 82,
        ano: 2021,
        preco: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // GMC
      {
        marca_id: 42,
        modelo_id: 83,
        ano: 2020,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 42,
        modelo_id: 84,
        ano: 2022,
        preco: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Genesis
      {
        marca_id: 43,
        modelo_id: 85,
        ano: 2021,
        preco: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 43,
        modelo_id: 86,
        ano: 2023,
        preco: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Infiniti
      {
        marca_id: 44,
        modelo_id: 87,
        ano: 2020,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 44,
        modelo_id: 88,
        ano: 2022,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lexus
      {
        marca_id: 45,
        modelo_id: 89,
        ano: 2019,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 45,
        modelo_id: 90,
        ano: 2021,
        preco: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // MINI
      {
        marca_id: 46,
        modelo_id: 91,
        ano: 2020,
        preco: 30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 46,
        modelo_id: 92,
        ano: 2022,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Acura
      {
        marca_id: 47,
        modelo_id: 93,
        ano: 2021,
        preco: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 47,
        modelo_id: 94,
        ano: 2023,
        preco: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lincoln
      {
        marca_id: 48,
        modelo_id: 95,
        ano: 2020,
        preco: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 48,
        modelo_id: 96,
        ano: 2022,
        preco: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // McLaren
      {
        marca_id: 49,
        modelo_id: 97,
        ano: 2019,
        preco: 250000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 49,
        modelo_id: 98,
        ano: 2021,
        preco: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Pagani
      {
        marca_id: 50,
        modelo_id: 99,
        ano: 2020,
        preco: 1500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 50,
        modelo_id: 100,
        ano: 2022,
        preco: 2000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Rivian
      {
        marca_id: 51,
        modelo_id: 101,
        ano: 2021,
        preco: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 51,
        modelo_id: 102,
        ano: 2023,
        preco: 80000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lucid
      {
        marca_id: 52,
        modelo_id: 103,
        ano: 2020,
        preco: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 52,
        modelo_id: 104,
        ano: 2022,
        preco: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Polestar
      {
        marca_id: 53,
        modelo_id: 105,
        ano: 2019,
        preco: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 53,
        modelo_id: 106,
        ano: 2021,
        preco: 55000,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
