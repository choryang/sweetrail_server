module.exports = (app) => {
  const user = require("../controllers/usercontroller.js");
  const journey = require("../controllers/journeycontroller");
  const { auth } = require("../middleware/auth.js");
  var router = require("express").Router();

  router.post("/api/user/register", user.register);

  router.post("/api/user/login", user.login);

  router.get("/api/user/auth", auth, user.auth);

  router.get("/api/user/logout", auth, user.logout);

  router.get("/api/journey/main", journey.publicJour);

  router.get("/api/journey/detail/:id", journey.jourDetail);

  app.use("/", router);
};
