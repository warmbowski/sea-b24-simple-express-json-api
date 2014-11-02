var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
var server = require('../server.js');

chai.use(chaihttp);

var port = process.env.PORT ? process.env.PORT : 3000;

describe('Simple JSON API', function() {
    
  it('should send the local time', function (done) {
    // Used chai docs to make req and deal with res - https://www.npmjs.org/package/chai-http
    // Help from github:makakoa getting tests to work by passing done param
    chai.request('http://localhost:' + port)
      .get('/localtime')
      .end(function(err, res) {
        var d = new Date();
        
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.be.a('string');
        expect(res.text).to.be.eql(d.toLocaleString());
        
        done();
      });
      
  });
    
    
  it('should greet someone', function (done) {
    
    chai.request('http://localhost:' + port)
      .get('/myname/test')
      .end(function(err, res) {
        
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.msg).to.eql('Hello test!');
        
        done();
      });
      
  });
  
});
