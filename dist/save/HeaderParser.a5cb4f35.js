require("./getLimit.982d87c3.js");
require("./sbmh.c67c5bee.js");
var $f4BUh$nodeevents = require("node:events");
var $f4BUh$nodeutil = require("node:util");


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

var $260eb92e6efee07a$require$EventEmitter = $f4BUh$nodeevents.EventEmitter;

var $260eb92e6efee07a$require$inherits = $f4BUh$nodeutil.inherits;
var $552895cf90027f4c$exports = {};
$552895cf90027f4c$exports = new URL("getLimit.982d87c3.js", "file:" + __filename).toString();



var $b2lH1 = parcelRequire("b2lH1");
const $260eb92e6efee07a$var$B_DCRLF = Buffer.from('\r\n\r\n');
const $260eb92e6efee07a$var$RE_CRLF = /\r\n/g;
const $260eb92e6efee07a$var$RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/ // eslint-disable-line no-control-regex
;
function $260eb92e6efee07a$var$HeaderParser(cfg) {
    $260eb92e6efee07a$require$EventEmitter.call(this);
    cfg = cfg || {};
    const self = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = $552895cf90027f4c$exports(cfg, 'maxHeaderPairs', 2000);
    this.maxHeaderSize = $552895cf90027f4c$exports(cfg, 'maxHeaderSize', 81920);
    this.buffer = '';
    this.header = {};
    this.finished = false;
    this.ss = new $b2lH1($260eb92e6efee07a$var$B_DCRLF);
    this.ss.on('info', function(isMatch, data, start, end) {
        if (data && !self.maxed) {
            if (self.nread + end - start >= self.maxHeaderSize) {
                end = self.maxHeaderSize - self.nread + start;
                self.nread = self.maxHeaderSize;
                self.maxed = true;
            } else self.nread += end - start;
            self.buffer += data.toString('binary', start, end);
        }
        if (isMatch) self._finish();
    });
}
$260eb92e6efee07a$require$inherits($260eb92e6efee07a$var$HeaderParser, $260eb92e6efee07a$require$EventEmitter);
$260eb92e6efee07a$var$HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) return r;
};
$260eb92e6efee07a$var$HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = '';
    this.header = {};
    this.ss.reset();
};
$260eb92e6efee07a$var$HeaderParser.prototype._finish = function() {
    if (this.buffer) this._parseHeader();
    this.ss.matches = this.ss.maxMatches;
    const header = this.header;
    this.header = {};
    this.buffer = '';
    this.finished = true;
    this.nread = this.npairs = 0;
    this.maxed = false;
    this.emit('header', header);
};
$260eb92e6efee07a$var$HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const lines = this.buffer.split($260eb92e6efee07a$var$RE_CRLF);
    const len = lines.length;
    let m, h;
    for(var i = 0; i < len; ++i){
        if (lines[i].length === 0) continue;
        if (lines[i][0] === '\t' || lines[i][0] === ' ') // folded header content
        // RFC2822 says to just remove the CRLF and not the whitespace following
        // it, so we follow the RFC and include the leading whitespace ...
        {
            if (h) {
                this.header[h][this.header[h].length - 1] += lines[i];
                continue;
            }
        }
        const posColon = lines[i].indexOf(':');
        if (posColon === -1 || posColon === 0) return;
        m = $260eb92e6efee07a$var$RE_HDR.exec(lines[i]);
        h = m[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m[2] || '');
        if (++this.npairs === this.maxHeaderPairs) break;
    }
};
module.exports = $260eb92e6efee07a$var$HeaderParser;


