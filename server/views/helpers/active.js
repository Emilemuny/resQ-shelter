'use strict';

// input => /, /faq, /about
// output => active or blank

module.exports = function active(currentPath, expectedPath) {
  if(currentPath === expectedPath) {
    return 'active';
  }
};
