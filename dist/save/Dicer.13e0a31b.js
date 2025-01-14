require("./sbmh.375caa92.js");
require("./PartStream.38a8539c.js");
require("./HeaderParser.f01dcf7b.js");
var $gCLGW$nodestream = require("node:stream");
var $gCLGW$nodeutil = require("node:util");

'use strict';

var $1ce3d9827f34c232$require$WritableStream = $gCLGW$nodestream.Writable;

var $1ce3d9827f34c232$require$inherits = $gCLGW$nodeutil.inherits;
var $9d74258c967c91ac$exports = {};
$9d74258c967c91ac$exports = new URL("sbmh.375caa92.js", "file:" + __filename).toString();


var $0a8e9874a0102865$exports = {};
$0a8e9874a0102865$exports = new URL("PartStream.38a8539c.js", "file:" + __filename).toString();


var $9597c63e144817ac$exports = {};
$9597c63e144817ac$exports = new URL("HeaderParser.f01dcf7b.js", "file:" + __filename).toString();


const $1ce3d9827f34c232$var$DASH = 45;
const $1ce3d9827f34c232$var$B_ONEDASH = Buffer.from('-');
const $1ce3d9827f34c232$var$B_CRLF = Buffer.from('\r\n');
const $1ce3d9827f34c232$var$EMPTY_FN = function() {};
function $1ce3d9827f34c232$var$Dicer(cfg) {
    if (!(this instanceof $1ce3d9827f34c232$var$Dicer)) return new $1ce3d9827f34c232$var$Dicer(cfg);
    $1ce3d9827f34c232$require$WritableStream.call(this, cfg);
    if (!cfg || !cfg.headerFirst && typeof cfg.boundary !== 'string') throw new TypeError('Boundary required');
    if (typeof cfg.boundary === 'string') this.setBoundary(cfg.boundary);
    else this._bparser = undefined;
    this._headerFirst = cfg.headerFirst;
    this._dashes = 0;
    this._parts = 0;
    this._finished = false;
    this._realFinish = false;
    this._isPreamble = true;
    this._justMatched = false;
    this._firstWrite = true;
    this._inHeader = true;
    this._part = undefined;
    this._cb = undefined;
    this._ignoreData = false;
    this._partOpts = {
        highWaterMark: cfg.partHwm
    };
    this._pause = false;
    const self = this;
    this._hparser = new $9597c63e144817ac$exports(cfg);
    this._hparser.on('header', function(header) {
        self._inHeader = false;
        self._part.emit('header', header);
    });
}
$1ce3d9827f34c232$require$inherits($1ce3d9827f34c232$var$Dicer, $1ce3d9827f34c232$require$WritableStream);
$1ce3d9827f34c232$var$Dicer.prototype.emit = function(ev) {
    if (ev === 'finish' && !this._realFinish) {
        if (!this._finished) {
            const self = this;
            process.nextTick(function() {
                self.emit('error', new Error('Unexpected end of multipart data'));
                if (self._part && !self._ignoreData) {
                    const type = self._isPreamble ? 'Preamble' : 'Part';
                    self._part.emit('error', new Error(type + ' terminated early due to unexpected end of multipart data'));
                    self._part.push(null);
                    process.nextTick(function() {
                        self._realFinish = true;
                        self.emit('finish');
                        self._realFinish = false;
                    });
                    return;
                }
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            });
        }
    } else $1ce3d9827f34c232$require$WritableStream.prototype.emit.apply(this, arguments);
};
$1ce3d9827f34c232$var$Dicer.prototype._write = function(data, encoding, cb) {
    // ignore unexpected data (e.g. extra trailer data after finished)
    if (!this._hparser && !this._bparser) return cb();
    if (this._headerFirst && this._isPreamble) {
        if (!this._part) {
            this._part = new $0a8e9874a0102865$exports(this._partOpts);
            if (this.listenerCount('preamble') !== 0) this.emit('preamble', this._part);
            else this._ignore();
        }
        const r = this._hparser.push(data);
        if (!this._inHeader && r !== undefined && r < data.length) data = data.slice(r);
        else return cb();
    }
    // allows for "easier" testing
    if (this._firstWrite) {
        this._bparser.push($1ce3d9827f34c232$var$B_CRLF);
        this._firstWrite = false;
    }
    this._bparser.push(data);
    if (this._pause) this._cb = cb;
    else cb();
};
$1ce3d9827f34c232$var$Dicer.prototype.reset = function() {
    this._part = undefined;
    this._bparser = undefined;
    this._hparser = undefined;
};
$1ce3d9827f34c232$var$Dicer.prototype.setBoundary = function(boundary) {
    const self = this;
    this._bparser = new $9d74258c967c91ac$exports('\r\n--' + boundary);
    this._bparser.on('info', function(isMatch, data, start, end) {
        self._oninfo(isMatch, data, start, end);
    });
};
$1ce3d9827f34c232$var$Dicer.prototype._ignore = function() {
    if (this._part && !this._ignoreData) {
        this._ignoreData = true;
        this._part.on('error', $1ce3d9827f34c232$var$EMPTY_FN);
        // we must perform some kind of read on the stream even though we are
        // ignoring the data, otherwise node's Readable stream will not emit 'end'
        // after pushing null to the stream
        this._part.resume();
    }
};
$1ce3d9827f34c232$var$Dicer.prototype._oninfo = function(isMatch, data, start, end) {
    let buf;
    const self = this;
    let i = 0;
    let r;
    let shouldWriteMore = true;
    if (!this._part && this._justMatched && data) {
        while(this._dashes < 2 && start + i < end)if (data[start + i] === $1ce3d9827f34c232$var$DASH) {
            ++i;
            ++this._dashes;
        } else {
            if (this._dashes) buf = $1ce3d9827f34c232$var$B_ONEDASH;
            this._dashes = 0;
            break;
        }
        if (this._dashes === 2) {
            if (start + i < end && this.listenerCount('trailer') !== 0) this.emit('trailer', data.slice(start + i, end));
            this.reset();
            this._finished = true;
            // no more parts will be added
            if (self._parts === 0) {
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            }
        }
        if (this._dashes) return;
    }
    if (this._justMatched) this._justMatched = false;
    if (!this._part) {
        this._part = new $0a8e9874a0102865$exports(this._partOpts);
        this._part._read = function(n) {
            self._unpause();
        };
        if (this._isPreamble && this.listenerCount('preamble') !== 0) this.emit('preamble', this._part);
        else if (this._isPreamble !== true && this.listenerCount('part') !== 0) this.emit('part', this._part);
        else this._ignore();
        if (!this._isPreamble) this._inHeader = true;
    }
    if (data && start < end && !this._ignoreData) {
        if (this._isPreamble || !this._inHeader) {
            if (buf) shouldWriteMore = this._part.push(buf);
            shouldWriteMore = this._part.push(data.slice(start, end));
            if (!shouldWriteMore) this._pause = true;
        } else if (!this._isPreamble && this._inHeader) {
            if (buf) this._hparser.push(buf);
            r = this._hparser.push(data.slice(start, end));
            if (!this._inHeader && r !== undefined && r < end) this._oninfo(false, data, start + r, end);
        }
    }
    if (isMatch) {
        this._hparser.reset();
        if (this._isPreamble) this._isPreamble = false;
        else if (start !== end) {
            ++this._parts;
            this._part.on('end', function() {
                if (--self._parts === 0) {
                    if (self._finished) {
                        self._realFinish = true;
                        self.emit('finish');
                        self._realFinish = false;
                    } else self._unpause();
                }
            });
        }
        this._part.push(null);
        this._part = undefined;
        this._ignoreData = false;
        this._justMatched = true;
        this._dashes = 0;
    }
};
$1ce3d9827f34c232$var$Dicer.prototype._unpause = function() {
    if (!this._pause) return;
    this._pause = false;
    if (this._cb) {
        const cb = this._cb;
        this._cb = undefined;
        cb();
    }
};
module.exports = $1ce3d9827f34c232$var$Dicer;


//# sourceMappingURL=Dicer.13e0a31b.js.map
