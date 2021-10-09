const chai = require('chai');
const {expect} = chai;

// https://sinonjs.org
// https://www.testim.io/blog/mocha-code-coverage-how-to-use-instanbul-to-get-going/
// https://titanwolf.org/Network/Articles/Article?AID=059dfc83-4c90-453c-a0f6-8fbed3a93513#gsc.tab=0

describe('Chai tests',()=>{
    it('true should be ok',()=>{
        expect(true).to.be.ok;
    })
})