require("./Decoder.151c3e28.js");
require("./decodeText.502945c9.js");
require("./getLimit.06654e9a.js");


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
'use strict';
var $6e85e93ba1c99e91$exports = {};
$6e85e93ba1c99e91$exports = new URL("Decoder.151c3e28.js", "file:" + __filename).toString();



var $evdpu = parcelRequire("evdpu");

var $aTQkq = parcelRequire("aTQkq");
const $aab4f0b0f1fae028$var$RE_CHARSET = /^charset$/i;
$aab4f0b0f1fae028$var$UrlEncoded.detect = /^application\/x-www-form-urlencoded/i;
function $aab4f0b0f1fae028$var$UrlEncoded(boy, cfg) {
    const limits = cfg.limits;
    const parsedConType = cfg.parsedConType;
    this.boy = boy;
    this.fieldSizeLimit = $aTQkq(limits, 'fieldSize', 1048576);
    this.fieldNameSizeLimit = $aTQkq(limits, 'fieldNameSize', 100);
    this.fieldsLimit = $aTQkq(limits, 'fields', Infinity);
    let charset;
    for(var i = 0, len = parsedConType.length; i < len; ++i)if (Array.isArray(parsedConType[i]) && $aab4f0b0f1fae028$var$RE_CHARSET.test(parsedConType[i][0])) {
        charset = parsedConType[i][1].toLowerCase();
        break;
    }
    if (charset === undefined) charset = cfg.defCharset || 'utf8';
    this.decoder = new $6e85e93ba1c99e91$exports();
    this.charset = charset;
    this._fields = 0;
    this._state = 'key';
    this._checkingBytes = true;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._key = '';
    this._val = '';
    this._keyTrunc = false;
    this._valTrunc = false;
    this._hitLimit = false;
}
$aab4f0b0f1fae028$var$UrlEncoded.prototype.write = function(data, cb) {
    if (this._fields === this.fieldsLimit) {
        if (!this.boy.hitFieldsLimit) {
            this.boy.hitFieldsLimit = true;
            this.boy.emit('fieldsLimit');
        }
        return cb();
    }
    let idxeq;
    let idxamp;
    let i;
    let p = 0;
    const len = data.length;
    while(p < len)if (this._state === 'key') {
        idxeq = idxamp = undefined;
        for(i = p; i < len; ++i){
            if (!this._checkingBytes) ++p;
            if (data[i] === 0x3D /* = */ ) {
                idxeq = i;
                break;
            } else if (data[i] === 0x26 /* & */ ) {
                idxamp = i;
                break;
            }
            if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                this._hitLimit = true;
                break;
            } else if (this._checkingBytes) ++this._bytesKey;
        }
        if (idxeq !== undefined) {
            // key with assignment
            if (idxeq > p) this._key += this.decoder.write(data.toString('binary', p, idxeq));
            this._state = 'val';
            this._hitLimit = false;
            this._checkingBytes = true;
            this._val = '';
            this._bytesVal = 0;
            this._valTrunc = false;
            this.decoder.reset();
            p = idxeq + 1;
        } else if (idxamp !== undefined) {
            // key with no assignment
            ++this._fields;
            let key;
            const keyTrunc = this._keyTrunc;
            if (idxamp > p) key = this._key += this.decoder.write(data.toString('binary', p, idxamp));
            else key = this._key;
            this._hitLimit = false;
            this._checkingBytes = true;
            this._key = '';
            this._bytesKey = 0;
            this._keyTrunc = false;
            this.decoder.reset();
            if (key.length) this.boy.emit('field', $evdpu(key, 'binary', this.charset), '', keyTrunc, false);
            p = idxamp + 1;
            if (this._fields === this.fieldsLimit) return cb();
        } else if (this._hitLimit) {
            // we may not have hit the actual limit if there are encoded bytes...
            if (i > p) this._key += this.decoder.write(data.toString('binary', p, i));
            p = i;
            if ((this._bytesKey = this._key.length) === this.fieldNameSizeLimit) {
                // yep, we actually did hit the limit
                this._checkingBytes = false;
                this._keyTrunc = true;
            }
        } else {
            if (p < len) this._key += this.decoder.write(data.toString('binary', p));
            p = len;
        }
    } else {
        idxamp = undefined;
        for(i = p; i < len; ++i){
            if (!this._checkingBytes) ++p;
            if (data[i] === 0x26 /* & */ ) {
                idxamp = i;
                break;
            }
            if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                this._hitLimit = true;
                break;
            } else if (this._checkingBytes) ++this._bytesVal;
        }
        if (idxamp !== undefined) {
            ++this._fields;
            if (idxamp > p) this._val += this.decoder.write(data.toString('binary', p, idxamp));
            this.boy.emit('field', $evdpu(this._key, 'binary', this.charset), $evdpu(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
            this._state = 'key';
            this._hitLimit = false;
            this._checkingBytes = true;
            this._key = '';
            this._bytesKey = 0;
            this._keyTrunc = false;
            this.decoder.reset();
            p = idxamp + 1;
            if (this._fields === this.fieldsLimit) return cb();
        } else if (this._hitLimit) {
            // we may not have hit the actual limit if there are encoded bytes...
            if (i > p) this._val += this.decoder.write(data.toString('binary', p, i));
            p = i;
            if (this._val === '' && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) {
                // yep, we actually did hit the limit
                this._checkingBytes = false;
                this._valTrunc = true;
            }
        } else {
            if (p < len) this._val += this.decoder.write(data.toString('binary', p));
            p = len;
        }
    }
    cb();
};
$aab4f0b0f1fae028$var$UrlEncoded.prototype.end = function() {
    if (this.boy._done) return;
    if (this._state === 'key' && this._key.length > 0) this.boy.emit('field', $evdpu(this._key, 'binary', this.charset), '', this._keyTrunc, false);
    else if (this._state === 'val') this.boy.emit('field', $evdpu(this._key, 'binary', this.charset), $evdpu(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
    this.boy._done = true;
    this.boy.emit('finish');
};
module.exports = $aab4f0b0f1fae028$var$UrlEncoded;


//# sourceMappingURL=urlencoded.79d2a4b1.js.map
