const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const {expect} = chai;

chai.use(chaiAsPromised);

const demo =require('./chai-demo');

// https://sinonjs.org
// https://www.testim.io/blog/mocha-code-coverage-how-to-use-instanbul-to-get-going/
// https://titanwolf.org/Network/Articles/Article?AID=059dfc83-4c90-453c-a0f6-8fbed3a93513#gsc.tab=0

describe('Chai tests',()=>{
    it('true should be ok',()=>{
        expect(true).to.be.ok;
    });


    it('true should be ok',(done)=>{
        expect(true).to.be.ok;

        done();
    });

    it('should test promise', async ()=>{
        await expect(Promise.resolve(42)).to.eventually.equal(42)
    })


    //using sinon lib
    it('should spy on log',()=>{
        let spy = sinon.spy(console, 'log');

        demo.foo();

        expect(spy.calledOnce).to.be.true;

        //the must:
        spy.restore();
    })

})