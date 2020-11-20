module.exports = (sequelize, Sequelize) => {
    const Follows = sequelize.define(
      "follows",
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        followingId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        followingName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        followingImg: {
          type: Sequelize.STRING(200),
          defaultValue: "default"
        },
        friend: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
      },
      {
        timestamps: false,
      }
    );
    
    return Follows;
  };