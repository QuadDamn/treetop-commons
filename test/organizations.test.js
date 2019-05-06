process.env.NODE_ENV = 'test';

const app = require('../server');
const chai = require('chai');
const mocha = require('mocha');
const supertest = require('supertest');
const should = chai.should();
const expect = chai.expect;

describe('Organization API Tests', () => {
  describe('# 200 - Get organizations', () => {
    it('should get all organizations', (done) => {
      supertest(app)
        .get('/api/v1/organizations')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.be.a('object');

          res.body.should.have.include.key('status');
          res.body.should.have.property('status', 'success');

          res.body.should.have.include.key('data');
          expect(res.body).to.have.nested.property('data.organizations');

          done();
        });
    });

    it('should get filtered list of organizations', (done) => {
      supertest(app)
        .get('/api/v1/organizations?category=Greek&city=Washington')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.be.a('object');

          res.body.should.have.include.key('status');
          res.body.should.have.property('status', 'success');

          res.body.should.have.include.key('data');
          expect(res.body).to.have.nested.property('data.organizations');

          done();
        });
    });

    it('should get ordered list of organizations', (done) => {
      supertest(app)
        .get('/api/v1/organizations?orderBy=name&direction=desc')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.be.a('object');

          res.body.should.have.include.key('status');
          res.body.should.have.property('status', 'success');

          res.body.should.have.include.key('data');
          expect(res.body).to.have.nested.property('data.organizations');

          done();
        });
    });
  });
});