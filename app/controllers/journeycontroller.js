const db = require("../models");
const Journeys = db.journeys;

exports.publicJour = (req, res) => {
    Journeys.findAll({where: {sharedFlag: true}}).then((jourInfo) => {
        res.send(jourInfo);
    })
}

exports.jourDetail = (req, res) => {
    Journeys.findByPk(req.params.id).then((jourInfo) => {
        res.send(jourInfo);
    })
}

exports.myJourney = (req, res) => {
    Journeys.findAll({where: {userId: req.params.id}}).then((jourInfo) => {
        res.send(jourInfo);
    })
}

exports.otherJourney = (req, res) => {
    Journeys.findAll({where: {userId: req.params.id, sharedFlag: true}}).then((jourInfo) => {
        res.send(jourInfo);
    })
}