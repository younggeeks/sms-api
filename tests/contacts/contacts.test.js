const request = require("supertest")
const express = require("express")
const app = require("../../src")
// const {spawn} = require("child-process-promise")
const {spawn,exec,execSync} =require("child_process")
const sinon = require("sinon")
const spawnOptions = { stdio: 'inherit' };
const ContactsController = require("../../src/controllers/ContactsController.js")
const {validateMessage,validateContact} = require("../../src/db/helpers/validation")
const db = require("../../src/db/models")
describe('Test Contacts Endpoints', () => {
  let req = { 
        body: { // for testing create vehicle
            manufacturer: "Toyota",
            name: "Camry",
            model: "2018",
        }
  }
  beforeEach(() => {
    res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() }) // to spy res.status(500).end()
            };
  });
    beforeAll(async ()=>{
            // await spawn('yarn', ['test:migrate'], spawnOptions);
       
             execSync('yarn test:migrate', function(err, stdout, stderr) {
                  // console.log("stdout");
              });
             execSync('yarn test:seed', function(err, stdout, stderr) {
                  // console.log("stdout");
              });


    
              
    })
    afterAll(async (done) => {
              execSync('yarn test:seed:undo', function(err, stdout, stderr) {
                  console.log(stdout);
                  
              });

            //   await db.Contact.destroy({
            //     where: {id:'2e77e154-3568-11e9-b210-d663bd873d91'},
            //     truncate: false
            //   })
              done()
            })
    it('should respond with json containing all contacts ',(done) => {
        return request(app).get("/contacts").then(response => {
            expect(response.statusCode).toBe(200)
            expect(Object.keys(response.body).length).toBe(5)
            done()
        },10000)
    });
    it('should respond with 404 when searching for contact not existing',(done) => {
        return request(app).get("/contacts/1fcc9a76-35b0-11e9-b210-d663bd873d93").then(response => {
            expect(response.statusCode).toBe(404)
            done()
        },10000)
    });
    });
    it('should respond with 404 when searching for contact not existing',(done) => {
        return request(app).get("/contacts/1fcc9a76-35b0-11e9-b210-d663bd873d93").then(response => {
            expect(response.statusCode).toBe(404)
            done()
        },10000)
    });
    it('should respond with 404 when searching for contact not existing',(done) => {
        return request(app).get("/contacts/1fcc9a76-35b0-11e9-b210-d663bd873d93").then(response => {
            expect(response.statusCode).toBe(404)
            done()
        },10000)
    });
    //  it('Create new Contact ', (function () {
    //         expectedResult = req.body
    //         controller = new ContactsController()
    //         sinon.stub(controller, 'insertContact').returns(res)
    //         controller.insertContact(req,res)

    //         sinon.assert.calledWith(controller.insertContact, req.body);
    //         // sinon.assert.calledWith(res.json, sinon.match({ model: req.body.model }));
    //         // sinon.assert.calledWith(res.json, sinon.match({ manufacturer: req.body.manufacturer }));
    //     }));
    // it('should respond with json containing error message and 404 error  ',(done) => {
    //    execSync('yarn test:migrate:undo', function(err, stdout, stderr) {
    //           });
    //     return request(app).get("/contacts").then(response => {
    //       console.log("the response is ", response.body)
    //         // expect(response.statusCode).toBe(404)
    //         done()
    //     },10000)
    // });
   
       let missingPhone = {
        "name": "dummy",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
    }
   
       let missingName = {
        "phone": "02938439854899845",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
    }
    const correctData = {
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
      name:"awesomeness",
      phone:"5900893540984598009"
    }
    const incorrectData = {
        id:"21e77e154-3568-11e9-b210-d663bd873d91",
      name:"awesomeness",
      phone:"5900893540984598009"
    }
    it('respond with 400 Bad request with proper error message when phone is missing', function (done) {
        request(app)
            .post('/contacts')
            .send(missingPhone)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(res=> res.body.message === "Phone field is required")
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });


    it('respond with 400 Bad request with proper error message when phone is missing', function (done) {
        request(app)
            .post('/contacts')
            .send(missingPhone)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect(res=> res.body.message === "Phone field is required")
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('respond with 201 When correct data is provided', function (done) {
        request(app)
            .post('/contacts')
            .send(correctData)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });







//SMS TESTS 
    describe('SMS TESTS', () => {
      const fakeMessage = {
        status:"849",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
      }
      const fakeStatus = {
        "message":"this is awessome",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
      }

      const missingSenderId = {
        status:"unread",
        message:"this is awe",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
      }
      const missingReceiverId = {
        status:"unread",
        message:"this is awe",
        senderId:"sklfja",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
      }
      const correctMessage = {
        status:"unread",
        message:"this is awe",
        senderId:"2e77e154-3568-11e9-b210-d663bd873d91",
        receiverId:"2e77e154-3568-11e9-b210-d663bd873d91",
        id:"2e77e154-3568-11e9-b210-d663bd873d91",
      }
      const correctWithoutStatus = {
        message:"this is awe",
        senderId:"2e77e154-3568-11e9-b210-d663bd873d91",
        receiverId:"2e77e154-3568-11e9-b210-d663bd873d91",
        id:"2e77e154-3568-11e9-b210-d663bd873d92",
      }
        it('respond with 400 Bad request with proper error message when message field is missing', function (done) {
        request(app)
            .post('/messages')
            .send(fakeMessage)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
        it('add status by default if it is not in the list ', function (done) {
        request(app)
            .post('/messages')
            .send(fakeStatus)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
        it('throw an error when sender id is missing ', function (done) {
        request(app)
            .post('/messages')
            .send(missingSenderId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
        it('throw an error when receiver id is missing ', function (done) {
        request(app)
            .post('/messages')
            .send(missingReceiverId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
        it('respond with 201 When correct data is provided', function (done) {
        request(app)
            .post('/messages')
            .send(correctMessage)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
        it('adds status as read if it is empty', function (done) {
        request(app)
            .post('/messages')
            .send(correctWithoutStatus)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

        it('should respond with 404 when bad id is provided single message ',(done) => {
        return request(app).get("/messages/826a9390-35b0-11e9-b210-d663bd873d93").then(response => {
            expect(response.body.message).toBe("Sms with ID 826a9390-35b0-11e9-b210-d663bd873d93 was not found")
            done()
        },10000)
    });

        it('should respond with 404 when bad id is provided single message ',(done) => {
        return request(app).get("/messages/sent/826a9390-35b0-11e9-b210-d663bd873d93").then(response => {
            expect(response.statusCode).toBe(404)
            expect(response.body.message).toBe("No sms from a sender with id 826a9390-35b0-11e9-b210-d663bd873d93")
            done()
        },10000)
    });
        it('should respond with 404 when bad id is provided single message ',(done) => {
        return request(app).get("/messages/received/826a9390-35b0-11e9-b210-d663bd873d93").then(response => {
            expect(response.statusCode).toBe(404)
            done()
        },10000)
    });
        it('should respond with 200 when correct id is provided ',(done) => {
        return request(app).get("/messages/received/2e77e154-3568-11e9-b210-d663bd873d91").then(response => {
            expect(response.statusCode).toBe(200)
            done()
        },10000)
    });









    });


