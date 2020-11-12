module.exports = (sequelize, Sequelize) => {
    //import Places from "./places";
    const Paths = sequelize.define(
      "paths",
      {
        pathNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        journeyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'journeys',//table name 
            key: 'id',//table column
         }
        }
      },
      {
        timestamps: false,
      }
    );

    // Paths.hasMany(Places);
    
    return Paths;
  };