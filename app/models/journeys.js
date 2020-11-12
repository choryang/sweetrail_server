module.exports = (sequelize, Sequelize) => {
    const Journeys = sequelize.define(
      "journeys",
      {
        journeyname: {
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
        pinfrequency:{
          type: INTEGER,
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
        sharedflag: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
      },
      {
        timestamps: false,
      }
    );
    
    return Journeys;
  };