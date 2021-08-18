const { Song } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      });

      res.send(song);
    } catch (e) {
      res.status(500).send({
        error: 'An error occurred while fetching the songs'
      });
    }
  },

  async post(req, res) {
    try {
      const song = await Song.create(req.body);

      res.send(song);
    } catch (e) {
      console.error(e);
      res.status(500).send({
        error: 'An error occurred while trying to create the song'
      });
    }
  }
};
