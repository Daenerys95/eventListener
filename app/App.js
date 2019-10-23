const EventController = require('./controllers/EventController');
const UserController = require('./controllers/UserController');

module.exports = (server, router) => {

  // * //

  /**
   * Home page
   */
  router.get('/', (request, response) => {
    response.type('text/html');
    response.send('Home page');
  });


  // Event //

  /**
   * Get all events
   */
  router.get('/events', (request, response) => {
    response.json;
    EventController.getAll(request, response);
  });

    /**
   * Get specific event
   */
  router.get('/events/:eventId', (request, response) => {
    response.json;
    EventController.getEvent(request, response);
  });


  // User //

  /**
   * Create an account
   */
  router.post('/users/add', (request, response) => {
    response.json;
    UserController.add(request, response);
  });

   /**
   * Get specific user
   */
   router.get('/users/:userId', (request, response) => {
    response.json;
    UserController.getUser(request, response);
  });

  /**
   * Delete an account
   */
   router.post('/users/:userId/delete', (request, response) => {
    response.json;
    UserController.deleteAccount(request, response);
  });

};
