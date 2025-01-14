require("./getLimit.06654e9a.js");
require("./sbmh.375caa92.js");
var $EgJY6$nodeevents = require("node:events");
var $EgJY6$nodeutil = require("node:util");


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

var $b0b43b974090d3d7$require$EventEmitter = $EgJY6$nodeevents.EventEmitter;

var $b0b43b974090d3d7$require$inherits = $EgJY6$nodeutil.inherits;
var $c5680ac1539205db$exports = {};
$c5680ac1539205db$exports = new URL("getLimit.06654e9a.js", "file:" + __filename).toString();



var $20tDg = parcelRequire("20tDg");
const $b0b43b974090d3d7$var$B_DCRLF = Buffer.from('\r\n\r\n');
const $b0b43b974090d3d7$var$RE_CRLF = /\r\n/g;
const $b0b43b974090d3d7$var$RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/ // eslint-disable-line no-control-regex
;
function $b0b43b974090d3d7$var$HeaderParser(cfg) {
    $b0b43b974090d3d7$require$EventEmitter.call(this);
    cfg = cfg || {};
    const self = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = $c5680ac1539205db$exports(cfg, 'maxHeaderPairs', 2000);
    this.maxHeaderSize = $c5680ac1539205db$exports(cfg, 'maxHeaderSize', 81920);
    this.buffer = '';
    this.header = {};
    this.finished = false;
    this.ss = new $20tDg($b0b43b974090d3d7$var$B_DCRLF);
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
$b0b43b974090d3d7$require$inherits($b0b43b974090d3d7$var$HeaderParser, $b0b43b974090d3d7$require$EventEmitter);
$b0b43b974090d3d7$var$HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) return r;
};
$b0b43b974090d3d7$var$HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = '';
    this.header = {};
    this.ss.reset();
};
$b0b43b974090d3d7$var$HeaderParser.prototype._finish = function() {
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
$b0b43b974090d3d7$var$HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) return;
    const lines = this.buffer.split($b0b43b974090d3d7$var$RE_CRLF);
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
        m = $b0b43b974090d3d7$var$RE_HDR.exec(lines[i]);
        h = m[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m[2] || '');
        if (++this.npairs === this.maxHeaderPairs) break;
    }
};
module.exports = $b0b43b974090d3d7$var$HeaderParser;


//# sourceMappingURL=HeaderParser.f01dcf7b.js.map
