const db = require("../models");
const Scraps = db.scraps;
const Journeys = db.journeys;

exports.scrapCheck = (req, res) => {
    Scraps.findOne({where: {userId: req.body.id, journeyId: req.body.journeyId}})
    .then((user) => {
        if(!user) {return res.send({isScrap: false});}
        else {return res.send({isScrap: true});}
    })
    .catch((err) => {return res.status(400).send(err);})
}

exports.setScrap = (req, res) => {
    const scrap = {
        userId: req.body.id, 
        journeyId: req.body.journeyId
      };
      
    Scraps.create(scrap)
    .then(() => {
        res.send({ isScrap: true });
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
  }


exports.unScrap = (req, res) => {
    const scrap = {
        userId: req.body.id, 
        journeyId: req.body.journeyId
    };

  Scraps.destroy({where: scrap, force: true})
  .then(() => {
      res.send({ isFollow: false });
  })
  .catch((err) => {
    res.status(400).send({
      message: err.message || "Some error occurred while creating the User.",
    });
  });
}

exports.getScrapList = (req, res) => {
  var scrapList = [];

  Scraps.findAll({where: {userId: req.params.id}}).then((ScrapInfo) => {
    ScrapInfo.map((scrap) => {
        scrapList.push(scrap.journeyId);
    });
    Journeys.findAll({where: {id: scrapList}}).then((jourInfo) => {
        return res.status(200).send(jourInfo);
    })
    .catch((err) => {return res.status(400).send(err);})
  })
  .catch((err) => {return res.status(400).send(err);})
}