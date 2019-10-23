const Event = require('../models/Event');

const EventController = {

  /**
   * Get all events
   * @param {object} request
   * @param {object} response
   */
  getAll(request, response) {
    Event.getAll((result) => {
      response.status(200);
      response.json(result);
    });
    
  },
};

module.exports = EventController;
