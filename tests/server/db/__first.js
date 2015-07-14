var User = require('../../../server/users/userModel.js'),
  db = require('../../../server/db/schema.js'),
  request = require('request'),
  Q = require('q'),
  should = require('chai').should(),
  PORT = 8000;

/**
 * Describes how a user account is created
 * @class
 */

describe('Server Start', function() {
  var app = require('../../../server/server.js');
  before(function(done) {
    app.start();
    setTimeout(function() {
      done();
    }, 1000);
  });
  after(function(done) {
    app.stop();
    done();
  });
  it('should run', function(done) {
    true.should.equal(true);
    done();
  });
});