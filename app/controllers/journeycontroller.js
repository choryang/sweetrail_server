const db = require("../models");
const Journeys = db.journeys;

exports.publicJour = (req, res) => {
    Journeys.findAll({where: {public: true}}).then((jourInfo) => {
        res.send(jourInfo);
    })
}

exports.jourDetail = (req, res) => {
    Journeys.findByPk(req.params.id).then((jourInfo) => {
        res.send(jourInfo);
    })
}