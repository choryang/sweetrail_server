module.exports = (sequelize, Sequelize) => {
    const Followers = sequelize.define(
      "followers",
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        followerId: {
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