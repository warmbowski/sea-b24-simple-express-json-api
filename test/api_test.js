var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
var server = require('../server.js');

chai.use(chaihttp);

var webapp = 'http://localhost:8080';

describe('Simple JSON API', function() {
    
  it('should send the local time', function () {
    // Used chai docs to make req and deal with res - https://www.npmjs.org/package/chai-http
    // Also peeked at jacshfr's pull request to properly form the .get method into a callback (was using .end to no avail)
    chai.request(webapp)
      .get('/localtime')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.a('string');
        var d = new Date();
        expect(res).to.be.eql(d.toLocaleFormat() + ' blah!!');
      });
      
  });
    
    
  it('should greet someone', function () {

    chai.request(webapp)
      .get('/myname/test', function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.have.param('name1', 'test');
        expect(res).to.be.json;
      });
      
  });
  
});
