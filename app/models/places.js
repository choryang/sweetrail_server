module.exports = (sequelize, Sequelize) => {
    const Places = sequelize.define(
      "places",
      {
        placeName: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        time: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        logitude: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        latitude: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING(200),
        },
        note: {
          type: Sequelize.STRING(255),
        },
        category: {
          type: Sequelize.STRING(50),
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        pathsId:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'paths',//table name 
            key: 'id',//table column
         }
        }
      },
      {
        timestamps: false,
      }
    );
    
    return Places;
  };