module.exports = (sequelize, Sequelize) => {
    const Followers = sequelize.define(
      "followers",
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        followerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        followerName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        followerImg: {
          type: Sequelize.STRING(200),
          defaultValue: "default"
        }
      },
      {
        timestamps: false,
      }
    );
    
    return Followers;
  };