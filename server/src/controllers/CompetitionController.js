const { Competition } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const competitions = await Competition.findAll({
        limit: 10,
      });
      res.send(competitions);
    } catch (err) {
      res.status(400).send({
        error: 'A error has occured fetching competitions.',
      });
    }
  },
  async post(req, res) {
    try {
      const competition = await Competition.create(req.body);
      res.send(competition);
    } catch (err) {
      res.status(500).send({
        error: 'A error has occured adding the competition.',
      });
    }
  },
};
