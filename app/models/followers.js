module.exports = (sequelize, Sequelize) => {
    const Followers = sequelize.define(
      "followers",
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
      },
      {
        timestamps: false,
      }
    );
    
    return Followers;
  };