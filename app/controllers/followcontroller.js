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
      };

    Follows.create(follow)
    .then(() => {
      res.send({ isFollow: true });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
}