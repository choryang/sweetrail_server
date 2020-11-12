module.exports = (sequelize, Sequelize) => {
    const Scraps = sequelize.define(
      "scraps",
      {
        userid: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        followerid: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      }
    );
    
    return Scraps;
  };