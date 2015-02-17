'use strict';

var active = require('../../views/helpers/active');

module.exports= {
  handler: function(request, reply) {
    reply.view('templates/general/about',{path:'/about', active:active});
  }
};
