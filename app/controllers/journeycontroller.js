const db = require("../models");
const Journeys = db.journeys;
const Follows = db.follows;
const path = require("path");
const multer = require("multer");
const _storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "uploads/journey/");
  },
  filename: function(req, file, cb){
      cb(null, "JOURNEY-" + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage: _storage, limits:{fileSize: 1024 * 1024 * 5} }).single("image");

exports.journeyUpload = (req, res) => {
    const journey = {
        journeyName: req.body.journeyName,
        type: req.body.type,
        accompany: req.body.accompany,
        pinFrequency: req.body.pinFrequency,
        summary: req.body.summary,
        image: req.body.image,
        status: req.body.status,
        sharedFlag: req.body.sharedFlag,
        userId: req.body.userId,
        userName: req.body.userName,
    };
    
    Journeys.create(journey)
    .then((journey) => {
        return res.status(200).send({ uploadSuccess: true, journeyId: journey.id });
    })
    .catch((err) => {
        return res.status(400).send({
        message: err.message || "Some error occurred while creating the User.",
        });
    });
}

exports.publicJour = (req, res) => {
    Journeys.findAll({
        where: {sharedFlag: true},
        limit: 2,
        order: [["id", "DESC"]]
    }).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.jourDetail = (req, res) => {
    Journeys.findByPk(req.params.id).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send({
        message: err.message || "Some error occurred while searching journey detail.",
        });
    })
}

exports.myJourney = (req, res) => {
    Journeys.findAll({where: {userId: req.params.id}}).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.otherJourney = (req, res) => {
    Journeys.findAll({where: {userId: req.params.id, sharedFlag: true}}).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.followJourney = (req, res) => {
    var followList = [];
    Follows.findAll({where: {userId: req.params.id}})
    .then((followInfo) => {
        followInfo.map((follow) => {
            followList.push(follow.followingId);
        });
        Journeys.findAll({where: {userId: followList, sharedFlag: true}}).then((jourInfo) => {
            return res.status(200).send(jourInfo);
        })
        .catch((err) => {return res.status(400).send(err);})
    })
    .catch((err) => {return res.status(400).send(err);})
}