/// <reference path="../../../typings/index.d.ts" />
import * as a from "../../../src/lib/Attribute"
import * as chai from "chai"

const expect = chai.expect

describe('Attribute', () => {

     const attributes = [
        {name: 'foo', value:1},
        {name: 'bar', value:2}
    ]

    describe('#hasAttribute', () => {
        it('should find an attribute', () => {
            expect(a.hasAttribute('foo', attributes)).to.equal(true)
            expect(a.hasAttribute('foobar', attributes)).to.equal(false)
        })
    })

    describe('#getAttribute', () => {
        it('should return an attribute', () => {
            expect(a.getAttribute('foo', attributes).value).to.equal(1)
        })
    })

})

