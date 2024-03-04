const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', function() {
    it('...', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    })
    it('...', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
    it('...', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('...', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
});
