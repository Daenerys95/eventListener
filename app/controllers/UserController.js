// Dependances
const bcrypt = require('bcrypt');
// const session = require('express-session');

// Models
const User = require('../models/User');

// Utils functions
const checkEmail = require('../utils/functions').checkEmail;

module.exports = {

  /**
   * Get all users
   * @param {object} request
   * @param {object} response
   */
  getAll(request, response) {
    User.getAll((result) => {
      response.type('application/json');
      response.status(200);
      response.json(result);
    });
  },

  /**
   * Create an account
   * @param {object} request
   * @param {object} response
   */
  add(request, response) {
    const data = request.body;

    // check if all fields are correct
    if ((data.pseudo && data.pseudo.trim().length > 2) &&
      (data.firstname && data.firstname.trim().length > 2) &&
      (data.lastname && data.lastname.trim().length > 2) &&
      (data.email && data.email.trim().length > 8) &&
      (checkEmail(data.email)) &&
      (data.password && data.password.trim().length > 6) &&
      (data.confirmPassword === data.password) &&
      (typeof data.notifNewEvent === 'boolean') &&
      (typeof data.notifNewUpdate === 'boolean')) {
      
      User.checkUserByEmail(data.email, (result) => {
        // Check if user exist
        if (result.rowMatch < 1) {
          // Hash the password (use dep bcrypt)
          data.password = bcrypt.hashSync(data.password, 10);

          User.create(data, (result) => {
            response.status(200);
            response.json({
              status: "Success",
              result,
            });
          });
        } else {
          response.status(200);
          response.json({
            status: "Email already exists"
          });
        }
      });

    } else {
      response.status(200);
      response.json({
        status: "Bad data received"
      });
    }
  },

  /**
   * Connection
   * @param {object} request
   * @param {object} response
   */
  connect(request, response) {
    const data = request.body;

    if ((data.email && data.email.trim().length > 8) &&
      checkEmail(data.email) &&
      data.password) {

      User.checkUserByEmail(
        data.email, 
        (result) => {

        if (result.rowMatch == 1) {
          const { password: hashedPassword } = result.data[0];
          const checkPassword = bcrypt.compareSync(data.password, hashedPassword);
  
          if (result.rowMatch === 1 && checkPassword) {
            app.use(session({
              secret: 's3Cur3',
              name: 'sessionId'
            }));
              response.json({
                status: "Connected",
                result,
              });
          } else {
            response.status(200);
            response.json({
              status: "Auth error"
            });
          }
        } else {
          response.status(200);
          response.json({
            status: "Auth error"
          });
        }

      });

    } else {
      response.status(200);
      response.json({
        status: "Bad data received"
      });
    }
  },

  /**
  * Find and get specific user
  * @param {object} request
  * @param {objet} response
  * */
  getUser(request, response) {
    const { userId } = request.params;

    if (isNaN(userId)) {

      response.status(200);
      response.json({
        status: "Error"
      });
      
    } else {
      
      User.find(
        userId,
        (result) => {
          response.json;
  
          if (result.status === "Error") {
            response.status(404);
          } else {
            response.status(200);
          }
  
          response.json(result);
        });
    }
  },

  /**
  * Delete specific user
  * @param {object} request
  * @param {objet} response
  * */
  deleteAccount(request, response) {
    const { userId } = request.params;

    if (isNaN(userId)) {

      response.status(200);
      response.json({
        status: "Error"
      });
      
    } else {
      
      User.delete(
        userId,
        (result) => {
          response.json;
  
          if (result.status === "Error") {
            response.status(404);
          } else {
            response.status(200);
          }
          console.log('compte supprimé');
          response.json(result);
        });
    }
  },

   /**
   * Disconnect
   * @param {object} request
   * @param {object} response
   */
   disconnect(request, response) {
    const session = true; // request.session

    if (session) {
      response.status(200);
      response.json('stop session')
    } else {
      response.status(404);
      response.json('error 404 / no session')
    }
  },

};
