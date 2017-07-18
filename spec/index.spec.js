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
    it('returns', function (done) {
      request(server)
        .get('/api/')
        .end((err, res) => {
          if (err) done(err);
          else {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal('All good');
            done();
          }
        });
    });
  });
