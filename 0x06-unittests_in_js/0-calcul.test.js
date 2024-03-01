const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', function() {
    it('4', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    })
    it('5', function() {
        assert.strictEqual(calculateNumber(1.5, 3), 5);
    })
    it('5', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    })
    it('6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    })
});

module.exports = calculateNumber;
