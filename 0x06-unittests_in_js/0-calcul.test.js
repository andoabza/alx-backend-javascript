const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', function() {
    it('...', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    })
    it('...', function() {
        assert.strictEqual(calculateNumber(1.5, 3), 5);
    })
    it('...', function() {
        assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    })
    it('...', function() {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    })
});
