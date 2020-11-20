module.exports = (app) => {
  const user = require("../controllers/usercontroller.js");
  const journey = require("../controllers/journeycontroller.js");
  const follow = require("../controllers/followcontroller.js");
  const { auth } = require("../middleware/auth.js");
  var router = require("express").Router();

  router.post("/api/user/register", user.register);

  router.post("/api/user/login", user.login);

  router.post("/api/user/profile-upload", user.profile);

  router.get("/api/user/user-info/:id", user.getUserInfo);

  router.get("/api/user/auth", auth, user.auth);

  router.get("/api/user/logout", auth, user.logout);

  router.get("/api/journey/main", journey.publicJour);

  router.get("/api/journey/mypage/:id", journey.myJourney);

  router.get("/api/journey/otherpage/:id", journey.otherJourney);

  router.get("/api/journey/detail/:id", journey.jourDetail);

  router.post("/api/follow/follow-check", follow.followCheck);

  router.post("/api/follow/set-follow", follow.setFollow);

  router.post("/api/follow/unfollow", follow.unfollow);

  router.get("/api/follow/get-following-list/:id", follow.getFollowingList);

  router.get("/api/follow/get-follower-list/:id", follow.getFollowerList);

  router.get("/api/follow/count-following/:id", follow.countFollowing);

  router.get("/api/follow/count-follower/:id", follow.countFollower);

  app.use("/", router);
};
