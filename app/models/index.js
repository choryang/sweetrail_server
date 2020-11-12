const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.js")(sequelize, Sequelize);
db.journeys = require("./journeys.js")(sequelize, Sequelize);
db.paths = require("./paths.js")(sequelize, Sequelize);
db.places = require("./places.js")(sequelize, Sequelize);
db.scraps = require("./scraps.js")(sequelize, Sequelize);
db.follows = require("./follows.js")(sequelize, Sequelize);
db.followers = require("./followers.js")(sequelize, Sequelize);

module.exports = db;
