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
    await queryInterface.bulkInsert('Modelos', [
      // Mercedes
      {
        marca_id: 1,
        nome: 'C-Class',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 1,
        nome: 'E-Class',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // BMW
      {
        marca_id: 2,
        nome: '3 Series',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 2,
        nome: '5 Series',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mitsubishi
      {
        marca_id: 3,
        nome: 'Lancer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 3,
        nome: 'Mirage',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Citroen
      {
        marca_id: 4,
        nome: 'C3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 4,
        nome: 'C4',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Fiat
      {
        marca_id: 5,
        nome: '500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 5,
        nome: 'Punto',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Renault
      {
        marca_id: 6,
        nome: 'Clio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 6,
        nome: 'Megane',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Peugeot
      {
        marca_id: 7,
        nome: '208',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 7,
        nome: '3008',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Toyota
      {
        marca_id: 8,
        nome: 'Corolla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 8,
        nome: 'Rav4',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Honda
      {
        marca_id: 9,
        nome: 'Civic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 9,
        nome: 'CR-V',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ford
      {
        marca_id: 10,
        nome: 'Focus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 10,
        nome: 'F-150',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Chevrolet
      {
        marca_id: 11,
        nome: 'Camaro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 11,
        nome: 'Silverado',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Volkswagen
      {
        marca_id: 12,
        nome: 'Golf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 12,
        nome: 'Passat',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Audi
      {
        marca_id: 13,
        nome: 'A4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 13,
        nome: 'Q5',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Porsche
      {
        marca_id: 14,
        nome: '911',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 14,
        nome: 'Cayenne',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lamborghini
      {
        marca_id: 15,
        nome: 'Huracan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 15,
        nome: 'Aventador',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ferrari
      {
        marca_id: 16,
        nome: '488 GTB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 16,
        nome: 'F8 Tributo',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Jaguar
      {
        marca_id: 17,
        nome: 'F-Type',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 17,
        nome: 'XE',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Land Rover
      {
        marca_id: 18,
        nome: 'Range Rover',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 18,
        nome: 'Discovery',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Nissan
      {
        marca_id: 19,
        nome: 'Altima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 19,
        nome: 'Murano',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mazda
      {
        marca_id: 20,
        nome: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 20,
        nome: 'CX-5',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Subaru
      {
        marca_id: 21,
        nome: 'Impreza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 21,
        nome: 'Forester',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Hyundai
      {
        marca_id: 22,
        nome: 'Elantra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 22,
        nome: 'Tucson',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Kia
      {
        marca_id: 23,
        nome: 'Optima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 23,
        nome: 'Sportage',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Volvo
      {
        marca_id: 24,
        nome: 'S60',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 24,
        nome: 'XC90',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Saab
      {
        marca_id: 25,
        nome: '9-3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 25,
        nome: '9-5',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Suzuki
      {
        marca_id: 26,
        nome: 'Swift',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 26,
        nome: 'Vitara',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Skoda
      {
        marca_id: 27,
        nome: 'Octavia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 27,
        nome: 'Superb',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Seat
      {
        marca_id: 28,
        nome: 'Leon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 28,
        nome: 'Ibiza',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Tesla
      {
        marca_id: 29,
        nome: 'Model 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 29,
        nome: 'Model X',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Maserati
      {
        marca_id: 30,
        nome: 'Ghibli',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 30,
        nome: 'Quattroporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bentley
      {
        marca_id: 31,
        nome: 'Continental GT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 31,
        nome: 'Bentayga',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Rolls-Royce
      {
        marca_id: 32,
        nome: 'Phantom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 32,
        nome: 'Cullinan',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Aston Martin
      {
        marca_id: 33,
        nome: 'DB11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 33,
        nome: 'Vantage',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Alfa Romeo
      {
        marca_id: 34,
        nome: 'Giulia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 34,
        nome: 'Stelvio',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Bugatti
      {
        marca_id: 35,
        nome: 'Chiron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 35,
        nome: 'Veyron',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Chrysler
      {
        marca_id: 36,
        nome: '300',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 36,
        nome: 'Pacifica',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Dodge
      {
        marca_id: 37,
        nome: 'Charger',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 37,
        nome: 'Durango',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Jeep
      {
        marca_id: 38,
        nome: 'Wrangler',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 38,
        nome: 'Grand Cherokee',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Ram
      {
        marca_id: 39,
        nome: '1500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 39,
        nome: '2500',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Buick
      {
        marca_id: 40,
        nome: 'Enclave',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 40,
        nome: 'Regal',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Cadillac
      {
        marca_id: 41,
        nome: 'Escalade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 41,
        nome: 'CTS',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // GMC
      {
        marca_id: 42,
        nome: 'Sierra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 42,
        nome: 'Yukon',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Genesis
      {
        marca_id: 43,
        nome: 'G80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 43,
        nome: 'GV80',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Infiniti
      {
        marca_id: 44,
        nome: 'Q50',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 44,
        nome: 'QX60',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lexus
      {
        marca_id: 45,
        nome: 'RX',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 45,
        nome: 'ES',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Mini
      {
        marca_id: 46,
        nome: 'Cooper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 46,
        nome: 'Countryman',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Acura
      {
        marca_id: 47,
        nome: 'TLX',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 47,
        nome: 'RDX',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lincoln
      {
        marca_id: 48,
        nome: 'Navigator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 48,
        nome: 'Aviator',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // McLaren
      {
        marca_id: 49,
        nome: '720S',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 49,
        nome: '570S',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Pagani
      {
        marca_id: 50,
        nome: 'Huayra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 50,
        nome: 'Zonda',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Rivian
      {
        marca_id: 51,
        nome: 'R1T',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 51,
        nome: 'R1S',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Lucid
      {
        marca_id: 52,
        nome: 'Air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 52,
        nome: 'Gravity',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Polestar
      {
        marca_id: 53,
        nome: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca_id: 53,
        nome: 'Polestar 1',
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
