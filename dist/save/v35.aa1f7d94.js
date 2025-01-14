require("./stringify.124d8bf0.js");
require("./parse.9d6fa5c2.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;

var $b6s7s = parcelRequire("b6s7s");
var $b89ea1d9250b50a6$exports = {};
$b89ea1d9250b50a6$exports = new URL("parse.9d6fa5c2.js", "file:" + __filename).toString();


function $db3adb5aa6b63c0b$var$stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const $db3adb5aa6b63c0b$export$783c5002e029c76b = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const $db3adb5aa6b63c0b$export$61abde59b50deb8e = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function $db3adb5aa6b63c0b$export$2e2bcd8739ae039(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') value = $db3adb5aa6b63c0b$var$stringToBytes(value);
        if (typeof namespace === 'string') namespace = (0, (/*@__PURE__*/$parcel$interopDefault($b89ea1d9250b50a6$exports)))(namespace);
        if (namespace.length !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, $b6s7s.default)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = $db3adb5aa6b63c0b$export$783c5002e029c76b;
    generateUUID.URL = $db3adb5aa6b63c0b$export$61abde59b50deb8e;
    return generateUUID;
}


//# sourceMappingURL=v35.aa1f7d94.js.map
