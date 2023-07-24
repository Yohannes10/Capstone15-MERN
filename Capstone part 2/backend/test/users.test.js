let expect = require("chai").expect;
let request = require("request");
describe("Status and content", function () {
  describe("Users page", function () {
    it("status", function (done) {
      request("http://localhost:3000/login", function (error, response, body) {
        expect(response).to.equal(response);
        done();
      });
    });
    it("content", function (done) {
      request("http://localhost:3000/login", function (error, response, body) {
        expect(body).to.equal(undefined);
        done();
      });
    });
  });
});
