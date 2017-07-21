process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest');
const server = require('../index');
const mongoose = require('mongoose');
const data = require('../seed/data/users');
// const config = require('../config');
const saveTestData = require('../seed/users.seed');
// const db = config.DB[process.env.NODE_ENV] || process.env.DB;

describe('API Routes', function () {
  beforeEach(done => {
    mongoose.connection.dropDatabase()
      .then(() => saveTestData(data)
        .then(() => done())
        .catch(err => done(err))
      );
  });

  after(done => {
    mongoose.connection.close();
    done();
  });
});
describe('GET /api/', function () {
  it('responds with 200', function (done) {
    request(server)
      .get('/api/')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.body).to.equal('All good');
          done();
        }
      });
  });
});

describe('GET /api/users', function () {
  it('responds with 200', function (done) {
    request(server)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.statusCode).to.equal(200);
          expect(res.body.users).to.be.an('array');
          expect(res.body.users.length).to.equal(3);
          done();
        }
      });
  });
});

describe('GET /api/users/:username', function () {
  it('should return the requested user', function (done) {
    request(server)

      .get('/api/users/loneninja1')
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.statusCode).to.equal(200);
          expect(res.body.welcomeUser).to.be.an('array');
          expect(res.body.welcomeUser.length).to.equal(1);
          expect(res.body.welcomeUser[0].username).to.equal('loneninja1');
          done();
        }
      });
  });
});
describe('GET /api/questions/:level', function () {
  it('should return the requested questions', function (done) {
    request(server)

      .get('/api/questions/academy')
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.statusCode).to.equal(200);
          expect(res.body.generateQuestion).to.be.an('array');
          expect(res.body.generateQuestion.length).to.equal(5);
          expect(res.body.generateQuestion[0].title).to.equal('What\'s A String?');
          done();
        }
      });
  });
});
describe('PUT /api/users/:username', function () {
  it('should increase the users level', function (done) {
    request(server)
    .put('/api/users/loneninja2/level-up')
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).to.equal(202);
      expect(res.body.user.level).to.equal(2);
      done();
    });
  });
});
