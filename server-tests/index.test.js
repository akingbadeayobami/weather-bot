"use strict";
var request = require('supertest'),
    app = require('../app'),
    expect = require('chai').expect;

describe("Index Page", function() {

    it("should show 'Weather Bot'", function(done) {
        request(app).get('/api')
            .end(function(err, response) {
                expect(response.statusCode).to.equal(200);
                expect(/Weather Bot/, done);
                done();
            });
    });

});