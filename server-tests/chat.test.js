"use strict";
const request = require('supertest'),
    app = require('../app'),
    expect = require('chai').expect,
    nock = require('nock');

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

    it("should get all sessions and their last message", function(done) {
        request(app).get('/api/chat/session/all')
            .end(function(err, response) {
                expect(response.statusCode).to.equal(200);

                const sessions = response.body;

                expect(sessions).to.be.an('array').that.have.lengthOf(2);
                expect(sessions[0].message).to.be.equal('The weather is sunny');
                expect(sessions[1].message).to.be.equal('The weather is cold');
                done();

            });
    });

    it("should get new session id greater by one than the last session id", function(done) {

        request(app).get('/api/chat/session/new')
            .end(function(err, response) {
                expect(response.statusCode).to.equal(200);

                const session = response.body;

                expect(session.session_id).to.be.equal(3);
                done();

            });
    });

    it("should get all messages of a chat session ", function(done) {
        request(app).get('/api/chat/session/2')
            .end(function(err, response) {

                expect(response.statusCode).to.equal(200);
                const messages = response.body;

                expect(messages).to.be.an('array').that.have.lengthOf(2);

                expect(messages[0].message).to.be.equal('What is the weather in Russia');
                expect(messages[1].message).to.be.equal('The weather is cold');
                done();

            });
    });

    it("should save messages and give response ", function(done) {

        //Mock My NLP Request
        nock('https://api.wit.ai')
            .get(function(uri) {
                return uri.indexOf('message') >= 0;
            })
            .reply(200, {
                entities: {
                    location: [{
                        value: "Lagos, NG"
                    }]
                }
            });

        //Mock My Weather Request
        nock('https://api.weatherbit.io')
            .get(function(uri) {
                return uri.indexOf('v2.0/current') >= 0;
            })
            .reply(200, {
                data: [{
                    weather: {
                        description: "Clear"
                    },
                    temp: '17'
                }]
            });

        request(app).post('/api/chat')
            .send({
                message: "What is the weather",
                session_id: 3
            })
            .end(function(err, response) {

                expect(response.statusCode).to.equal(200);
                const message = response.body;

                expect(message.status).to.be.true;
                expect(message.message).to.be.equal('The current weather in Lagos, NG is Clear with a temperature of 17C');

                done();

            });


    });

});