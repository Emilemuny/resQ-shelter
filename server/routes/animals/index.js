'use strict';

var active = require('../../views/helpers/active');
var Animal = require('../../models/animal');
module.exports= {
  handler: function(request, reply) {




    Object.keys(request.query).forEach(function(prop) {
      if(!request.query[prop]) {
        delete request.query[prop];
      }
    });

    request.query.isAdopted = false;
    console.log('query', request.query);
    Animal.find(request.query, function(err, animals){
      reply.view('templates/animals/index',{path:'/animals', active:active, animals:animals});

    });
  }
};
