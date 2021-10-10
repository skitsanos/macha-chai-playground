const chai = require('chai');
const sinon = require('sinon');

const {expect} = chai;

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));

const demo = require('./chai-demo');

// https://sinonjs.org
// https://www.testim.io/blog/mocha-code-coverage-how-to-use-instanbul-to-get-going/
// https://titanwolf.org/Network/Articles/Article?AID=059dfc83-4c90-453c-a0f6-8fbed3a93513#gsc.tab=0

describe('Chai tests', () =>
{
    it('true should be ok', () =>
    {
        expect(true).to.be.ok;
    });

    it('true should be an object', () =>
    {
        expect({}).to.be.a('object');
    });


    it('true should be ok', (done) =>
    {
        expect(true).to.be.ok;

        done();
    });

    it('should test promise', async () =>
    {
        await expect(Promise.resolve(42)).to.eventually.equal(42);
    });


    //using sinon lib
    it('should spy on log', () =>
    {
        const spy = sinon.spy(console, 'log');

        demo.foo();

        expect(spy.calledOnce).to.be.true;

        //the must:
        spy.restore();
    });

    it('should stub console.warn', () =>
    {
        const stub = sinon.stub(console, 'warn').callsFake(() =>
        {
            console.log('comes from stub');
        });

        demo.foo();

        expect(stub).to.have.been.calledOnce;

        //the must:
        stub.restore();
    });

    it('should test rejection', async () =>
    {
        return await expect(Promise.reject('Failed to execute')).to.eventually.be.rejectedWith('Failed to execute');
    });

});