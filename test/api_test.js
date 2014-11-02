var chai = require('chai');
var chaihttp = require('chai-http');
var server = require('../server.js');

chai.use(chaihttp);

var webapp = 'http://localhost:8080'

describe('Simple JSON API', function() {
    
  it('should send the local time');
    
    
  it('should greet someone', function () {
    // Used chai docs to make req and deal with res - https://www.npmjs.org/package/chai-http
    chai.request(webapp)
      .get('/myname/test', function() {
        expect(res).to.have.status(200);
        expect(res).to.have.param('name', 'test');
        expect(res).to.be.json;
      });
  });
});
