module.exports = (sequelize, Sequelize) => {
    const Follows = sequelize.define(
      "follows",
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        followingId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        friend: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
    
    return Follows;
  };