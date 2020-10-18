module.exports = (sequelize, Sequelize) => {
    const Journeys = sequelize.define(
      "journeys",
      {
        name: {
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
        },
        summary: {
          type: Sequelize.STRING(200),
        },
        photo: {
          type: Sequelize.STRING(200),
        },
        public: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
      },
      {
        timestamps: false,
      }
    );
    
    return Journeys;
  };