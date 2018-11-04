var assert = require("assert");   
// test name
describe("test de text", ()=>{
  // test syntax
  it('Should do something', ()=>{
    // callback function
    var a = 3;
    assert.equal(a * 2, 6, 'La multiplication n\'as pas fonctionner');
  })

})
