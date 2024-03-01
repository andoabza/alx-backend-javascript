const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', function() {
    it('4', function() {
        assert.equal(calculateNumber(1, 3), 4);
    })
    it('5', function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    })
    it('5', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    })
    it('6', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    })
});

module.exports = calculateNumber;
