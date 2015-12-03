/**
* Center.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

      name: {
          type: 'string',
          required: true
      },

      latitude: {
          type: 'float',
          required: true
      },

      longitude: {
          type: 'float',
          required: true
      },

      address: {
          type: 'string'
      },

      nbDoctors: {
          type: 'integer'
      },

      nbSurgeons: {
          type: 'integer'
      },

      nbNurses: {
          type: 'integer'
      },

      nbFiremen: {
          type: 'integer'
      },

      capacity: {
          type: 'integer'
      },

      nbPeople: {
          type: 'integer'
      }

  }
};
