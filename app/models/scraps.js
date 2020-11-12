module.exports = (sequelize, Sequelize) => {
    const Scraps = sequelize.define(
      "scraps",
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',//table name 
            key: 'id',//table column
         }
        },
        journeyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'journeys',//table name 
            key: 'id',//table column
         }
        },
      }
    );
    
    return Scraps;
  };