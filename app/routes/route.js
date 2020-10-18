module.exports = (app) => {
  const user = require("../controllers/controller.js");
  const { auth } = require("../middleware/auth.js");
  var router = require("express").Router();

  router.post("/api/user/register", user.register);

  router.post("/api/user/login", user.login);

  router.get("/api/user/auth", auth, user.auth);

  router.get("/api/user/logout", auth, user.logout);

  app.use("/", router);
};
