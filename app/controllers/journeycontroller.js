const db = require("../models");
const Journeys = db.journeys;

exports.publicJour = (req, res) => {
    Journeys.findAll({where: {sharedFlag: true}}).then((jourInfo) => {
        res.send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.jourDetail = (req, res) => {
    Journeys.findByPk(req.params.id).then((jourInfo) => {
        res.send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.myJourney = (req, res) => {
    Journeys.findAll({where: {userId: req.params.id}}).then((jourInfo) => {
        res.send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.otherJourney = (req, res) => {
    Journeys.findAll({where: {userId: req.params.id, sharedFlag: true}}).then((jourInfo) => {
        res.send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
}