module.exports = (sequelize, Sequelize) => {
    const UserJourneys = sequelize.define(
      "userjourney",
      {
        userid: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        journeyid: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
    
    return UserJourneys;
  };