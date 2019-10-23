// Dependances
const bcrypt = require('bcrypt');

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

      if (result.status === "Error") {
        response.status(404);
      } else {
        response.status(200);
      }

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
          bcrypt.hash(data.password, 10, (error, hash) => {
            if (error) throw error;
    
            data.password = hash;
            
            User.create(data, (result) => {
              response.status(200);
              response.json(result);
            });
          });
        } else {
          response.status(200);
          response.json(result);
        }
      });

    } else {
      response.status(200);
      response.json({
        status: "Error"
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

};
