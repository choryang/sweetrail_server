module.exports = (sequelize, Sequelize) => {
    const Paths = sequelize.define(
      "paths",
      {
        pathnumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
    
    return Paths;
  };