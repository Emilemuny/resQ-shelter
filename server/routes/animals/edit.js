'use strict';

var active = require('../../views/helpers/active');
var Animal = require('../../models/animal');

module.exports = {
  handler: function(request, reply) {
    Animal.findOne({_id:request.params.animalId}, function(err, animal) {
    var species =['Dog','Cat','Shark','Bird','Walrus'];
    reply.view('templates/animals/edit',{path:'/animals', active:active, animal:animal, species:species});
    });
  }
};
