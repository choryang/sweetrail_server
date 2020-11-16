module.exports = (app) => {
  const user = require("../controllers/usercontroller.js");
  const journey = require("../controllers/journeycontroller");
  const { auth } = require("../middleware/auth.js");
  const path = require("path");
  const multer = require("multer");
  const _storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "uploads/profile/");
   },
    filename: function(req, file, cb){
       cb(null, "PROFILE-" + Date.now() + path.extname(file.originalname));
    }
 });

  var upload = multer({ storage: _storage, limits:{fileSize: 1024 * 1024 * 5} });
  var router = require("express").Router();

  router.post("/api/user/register", user.register);

  router.post("/api/user/login", user.login);

  router.post("/api/user/profile-upload", upload.single("userImg"), user.profile);

  router.get("/api/user/user-info/:id", user.getUserInfo);

  router.get("/api/user/auth", auth, user.auth);

  router.get("/api/user/logout", auth, user.logout);

  router.get("/api/journey/main", journey.publicJour);

  router.get("/api/journey/detail/:id", journey.jourDetail);

  app.use("/", router);
};
