var Percentage = require('../lib/Percentage');
var assert = require('assert');
describe('percentage', ()=>{
    describe('#evolution',()=>{
        it('Should be an evolution',()=>{
            assert.equal(Percentage.evolution(100,200),100,'evolution should be 100');
        })
        it('Should be handle Zero',()=>{
            assert.equal(Percentage.evolution(0,100),Infinity);
        })
        it('Should round values',()=>{
            assert.equal(Percentage.evolution(30,100),233.33)
        })
    })
    describe("wait",()=>{
        it("Should wait a moment",(done)=>{
        
            Percentage.wait(50, (test)=>{
                assert.equal(test,18);
                done();
            })
        })
            
    })
})