var $5j8os$crypto = require("crypto");

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

module.exports = function nodeRNG() {
    return $5j8os$crypto.randomBytes(16);
};


