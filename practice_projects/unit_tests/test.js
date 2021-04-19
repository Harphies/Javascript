const assert = require('assert');

describe("file to be tested", () => {
    context("function to be tested", () => {
        before(() => {
            console.log('========> before')
        })
        after(() => {
            console.log('======> After')
        })
        beforeEach(() => {
            console.log('=====> before each')
        })
        afterEach(() => {
            console.log('=====> After each')
        })
        it('should do something', () => {
            assert.strictEqual(2, 2)
        })
        it("should do something else", () => {
            assert.deepStrictEqual({name:"Ade"}, {name:"Ade"})
        })
        it("pending test")
    })
})