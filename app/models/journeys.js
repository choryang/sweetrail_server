module.exports = (sequelize, Sequelize) => {
    // import Paths from "./paths";
    // import Scraps from "./scraps";

    const Journeys = sequelize.define(
      "journeys",
      {
        journeyName: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        type: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        accompany: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        pinFrequency:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        summary: {
          type: Sequelize.STRING(200),
        },
        image: {
          type: Sequelize.STRING(200),
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        sharedFlag: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',//table name 
            key: 'id',//table column
         }
        }
      },
      {
        timestamps: false,
      }
    );
    
    // Journeys.hasMany(Paths);
    // Journeys.hasMany(Scraps);

    return Journeys;
  };