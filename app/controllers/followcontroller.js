const db = require("../models");
const Follows = db.follows;
const Followers = db.followers;

exports.followCheck = (req, res) => {
    Follows.findOne({where: {userId: req.body.id, followingId: req.body.otherId}})
    .then((user) => {
        if(!user) {return res.send({isFollow: false});}
        else {return res.send({isFollow: true});}
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.setFollow = (req, res) => {
    const follow = {
        userId: req.body.id,
        followingId: req.body.otherId,
        followingName: req.body.otherName,
        followingImg: req.body.otherImg
      };
    const follower = {
      userId: req.body.otherId,
      followerId: req.body.id,
      followerName: req.body.name,
      followerImg: req.body.img
    };

    Follows.create(follow)
    .then(() => {
      Followers.create(follower).then(() => {
        res.send({ isFollow: true });
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
  }


exports.unfollow = (req, res) => {
  const follow = {
    userId: req.body.id,
    followingId: req.body.otherId,
  };
  const follower = {
    userId: req.body.otherId,
    followerId: req.body.id,
  };
  Follows.destroy({where: follow, force: true})
  .then(() => {
    Followers.destroy({where: follower, force: true}).then(() => {
      res.send({ isFollow: false });
    })
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  });
}

exports.getFollowingList = (req, res) => {
  Follows.findAll({where: {userId: req.params.id}}).then((followInfo) => {
    res.send(followInfo);
  })
  .catch((err) => {return res.status(400).send(err);})
}

exports.getFollowerList = (req, res) => {
  Followers.findAll({where: {userId: req.params.id}}).then((followInfo) => {
    res.send(followInfo);
  })
  .catch((err) => {return res.status(400).send(err);})
}

exports.countFollowing = (req, res) => {
  Follows.findAndCountAll ({
    where:{userId: req.params.id}
  })
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {return res.status(400).send(err);})
}

exports.countFollower = (req, res) => {

  Followers.findAndCountAll ({
    where:{userId: req.params.id}
  })
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {return res.status(400).send(err);})
}