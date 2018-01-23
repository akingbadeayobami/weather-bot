"use strict";
const request = require('supertest'),
    app = require('../app'),
    expect = require('chai').expect;

const chatData = require('../server/data/chat.json');
const Chat = require('../server/models').Chat;
const Promise = require('bluebird');

describe("Chat Route", function() {

    before(function(done) {

        Chat.remove({}).exec().then(() => {

            let promises = [];

            chatData.forEach(message => {

                promises.push(Chat.create(message));

            });

            Promise.all(promises).then(() => {

                done();

            })

        });

    });

    after(function(done) {

        Chat.remove({}).exec().then(() => {
            done();
        });

    });

    it("should get all sessions", function(done) {
        request(app).get('/api/chat/session/all')
            .end(function(err, response) {
                expect(response.statusCode).to.equal(200);

                const sessions = response.body;

                expect(sessions).to.be.an('array').that.have.lengthOf(2);

                done();

            });
    });

    // it("should create new session id", function(done) {

    // });

    // it("should get last chat session messages", function(done) {

    // });

    // it("should get all messages of a chat session ", function(done) {

    // });

    // it("should save messages and give response ", function(done) {

    // });

});