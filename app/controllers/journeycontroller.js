const db = require("../models");
const Journeys = db.journeys;

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
    .then(() => {
        return res.status(200).send({ uploadSuccess: true });
    })
    .catch((err) => {
        return res.status(400).send({
        message: err.message || "Some error occurred while creating the User.",
        });
    });
}

exports.publicJour = (req, res) => {
    Journeys.findAll({where: {sharedFlag: true}}).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.jourDetail = (req, res) => {
    Journeys.findByPk(req.params.id).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
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