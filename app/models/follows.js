module.exports = (sequelize, Sequelize) => {
    const Follows = sequelize.define(
      "follows",
      {
        userid: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        followingid: {
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