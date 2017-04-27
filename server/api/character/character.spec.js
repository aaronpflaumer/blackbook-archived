'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/characters', function() {

  var token = null;

  before(function (done) {
    request(app)
      .post('/api/authenticate/')
      .end(function(err, res) {
        if(err) {
          done(err);
        }
        token = res.headers['x-api-token'];
        done();
      });
	});

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/characters')
      .set('x-api-token', token)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
