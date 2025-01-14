var $jXMpP$crypto = require("crypto");

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

module.exports = function nodeRNG() {
    return $jXMpP$crypto.randomBytes(16);
};


//# sourceMappingURL=rng.82f5f284.js.map
