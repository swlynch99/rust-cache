require("./Dicer.13e0a31b.js");
require("./parseParams.cb1867b9.js");
require("./decodeText.502945c9.js");
require("./basename.050ca8b8.js");
require("./getLimit.06654e9a.js");
var $lqaHu$nodestream = require("node:stream");
var $lqaHu$nodeutil = require("node:util");


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

var $88ed174376e99651$require$Readable = $lqaHu$nodestream.Readable;

var $88ed174376e99651$require$inherits = $lqaHu$nodeutil.inherits;

var $2tMq8 = parcelRequire("2tMq8");
var $fb92598fbf32d7a7$exports = {};
$fb92598fbf32d7a7$exports = new URL("parseParams.cb1867b9.js", "file:" + __filename).toString();



var $evdpu = parcelRequire("evdpu");
var $e0a5a092485de241$exports = {};
$e0a5a092485de241$exports = new URL("basename.050ca8b8.js", "file:" + __filename).toString();



var $aTQkq = parcelRequire("aTQkq");
const $88ed174376e99651$var$RE_BOUNDARY = /^boundary$/i;
const $88ed174376e99651$var$RE_FIELD = /^form-data$/i;
const $88ed174376e99651$var$RE_CHARSET = /^charset$/i;
const $88ed174376e99651$var$RE_FILENAME = /^filename$/i;
const $88ed174376e99651$var$RE_NAME = /^name$/i;
$88ed174376e99651$var$Multipart.detect = /^multipart\/form-data/i;
function $88ed174376e99651$var$Multipart(boy, cfg) {
    let i;
    let len;
    const self = this;
    let boundary;
    const limits = cfg.limits;
    const isPartAFile = cfg.isPartAFile || ((fieldName, contentType, fileName)=>contentType === 'application/octet-stream' || fileName !== undefined);
    const parsedConType = cfg.parsedConType || [];
    const defCharset = cfg.defCharset || 'utf8';
    const preservePath = cfg.preservePath;
    const fileOpts = {
        highWaterMark: cfg.fileHwm
    };
    for(i = 0, len = parsedConType.length; i < len; ++i)if (Array.isArray(parsedConType[i]) && $88ed174376e99651$var$RE_BOUNDARY.test(parsedConType[i][0])) {
        boundary = parsedConType[i][1];
        break;
    }
    function checkFinished() {
        if (nends === 0 && finished && !boy._done) {
            finished = false;
            self.end();
        }
    }
    if (typeof boundary !== 'string') throw new Error('Multipart: Boundary not found');
    const fieldSizeLimit = $aTQkq(limits, 'fieldSize', 1048576);
    const fileSizeLimit = $aTQkq(limits, 'fileSize', Infinity);
    const filesLimit = $aTQkq(limits, 'files', Infinity);
    const fieldsLimit = $aTQkq(limits, 'fields', Infinity);
    const partsLimit = $aTQkq(limits, 'parts', Infinity);
    const headerPairsLimit = $aTQkq(limits, 'headerPairs', 2000);
    const headerSizeLimit = $aTQkq(limits, 'headerSize', 81920);
    let nfiles = 0;
    let nfields = 0;
    let nends = 0;
    let curFile;
    let curField;
    let finished = false;
    this._needDrain = false;
    this._pause = false;
    this._cb = undefined;
    this._nparts = 0;
    this._boy = boy;
    const parserCfg = {
        boundary: boundary,
        maxHeaderPairs: headerPairsLimit,
        maxHeaderSize: headerSizeLimit,
        partHwm: fileOpts.highWaterMark,
        highWaterMark: cfg.highWaterMark
    };
    this.parser = new $2tMq8(parserCfg);
    this.parser.on('drain', function() {
        self._needDrain = false;
        if (self._cb && !self._pause) {
            const cb = self._cb;
            self._cb = undefined;
            cb();
        }
    }).on('part', function onPart(part) {
        if (++self._nparts > partsLimit) {
            self.parser.removeListener('part', onPart);
            self.parser.on('part', $88ed174376e99651$var$skipPart);
            boy.hitPartsLimit = true;
            boy.emit('partsLimit');
            return $88ed174376e99651$var$skipPart(part);
        }
        // hack because streams2 _always_ doesn't emit 'end' until nextTick, so let
        // us emit 'end' early since we know the part has ended if we are already
        // seeing the next part
        if (curField) {
            const field = curField;
            field.emit('end');
            field.removeAllListeners('end');
        }
        part.on('header', function(header) {
            let contype;
            let fieldname;
            let parsed;
            let charset;
            let encoding;
            let filename;
            let nsize = 0;
            if (header['content-type']) {
                parsed = $fb92598fbf32d7a7$exports(header['content-type'][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i)if ($88ed174376e99651$var$RE_CHARSET.test(parsed[i][0])) {
                        charset = parsed[i][1].toLowerCase();
                        break;
                    }
                }
            }
            if (contype === undefined) contype = 'text/plain';
            if (charset === undefined) charset = defCharset;
            if (header['content-disposition']) {
                parsed = $fb92598fbf32d7a7$exports(header['content-disposition'][0]);
                if (!$88ed174376e99651$var$RE_FIELD.test(parsed[0])) return $88ed174376e99651$var$skipPart(part);
                for(i = 0, len = parsed.length; i < len; ++i){
                    if ($88ed174376e99651$var$RE_NAME.test(parsed[i][0])) fieldname = parsed[i][1];
                    else if ($88ed174376e99651$var$RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) filename = $e0a5a092485de241$exports(filename);
                    }
                }
            } else return $88ed174376e99651$var$skipPart(part);
            if (header['content-transfer-encoding']) encoding = header['content-transfer-encoding'][0].toLowerCase();
            else encoding = '7bit';
            let onData, onEnd;
            if (isPartAFile(fieldname, contype, filename)) {
                // file/binary field
                if (nfiles === filesLimit) {
                    if (!boy.hitFilesLimit) {
                        boy.hitFilesLimit = true;
                        boy.emit('filesLimit');
                    }
                    return $88ed174376e99651$var$skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount('file') === 0) {
                    self.parser._ignore();
                    return;
                }
                ++nends;
                const file = new $88ed174376e99651$var$FileStream(fileOpts);
                curFile = file;
                file.on('end', function() {
                    --nends;
                    self._pause = false;
                    checkFinished();
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                });
                file._read = function(n) {
                    if (!self._pause) return;
                    self._pause = false;
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                };
                boy.emit('file', fieldname, file, filename, encoding, contype);
                onData = function(data) {
                    if ((nsize += data.length) > fileSizeLimit) {
                        const extralen = fileSizeLimit - nsize + data.length;
                        if (extralen > 0) file.push(data.slice(0, extralen));
                        file.truncated = true;
                        file.bytesRead = fileSizeLimit;
                        part.removeAllListeners('data');
                        file.emit('limit');
                        return;
                    } else if (!file.push(data)) self._pause = true;
                    file.bytesRead = nsize;
                };
                onEnd = function() {
                    curFile = undefined;
                    file.push(null);
                };
            } else {
                // non-file field
                if (nfields === fieldsLimit) {
                    if (!boy.hitFieldsLimit) {
                        boy.hitFieldsLimit = true;
                        boy.emit('fieldsLimit');
                    }
                    return $88ed174376e99651$var$skipPart(part);
                }
                ++nfields;
                ++nends;
                let buffer = '';
                let truncated = false;
                curField = part;
                onData = function(data) {
                    if ((nsize += data.length) > fieldSizeLimit) {
                        const extralen = fieldSizeLimit - (nsize - data.length);
                        buffer += data.toString('binary', 0, extralen);
                        truncated = true;
                        part.removeAllListeners('data');
                    } else buffer += data.toString('binary');
                };
                onEnd = function() {
                    curField = undefined;
                    if (buffer.length) buffer = $evdpu(buffer, 'binary', charset);
                    boy.emit('field', fieldname, buffer, false, truncated, encoding, contype);
                    --nends;
                    checkFinished();
                };
            }
            /* As of node@2efe4ab761666 (v0.10.29+/v0.11.14+), busboy had become
         broken. Streams2/streams3 is a huge black box of confusion, but
         somehow overriding the sync state seems to fix things again (and still
         seems to work for previous node versions).
      */ part._readableState.sync = false;
            part.on('data', onData);
            part.on('end', onEnd);
        }).on('error', function(err) {
            if (curFile) curFile.emit('error', err);
        });
    }).on('error', function(err) {
        boy.emit('error', err);
    }).on('finish', function() {
        finished = true;
        checkFinished();
    });
}
$88ed174376e99651$var$Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) cb();
    else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
$88ed174376e99651$var$Multipart.prototype.end = function() {
    const self = this;
    if (self.parser.writable) self.parser.end();
    else if (!self._boy._done) process.nextTick(function() {
        self._boy._done = true;
        self._boy.emit('finish');
    });
};
function $88ed174376e99651$var$skipPart(part) {
    part.resume();
}
function $88ed174376e99651$var$FileStream(opts) {
    $88ed174376e99651$require$Readable.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
$88ed174376e99651$require$inherits($88ed174376e99651$var$FileStream, $88ed174376e99651$require$Readable);
$88ed174376e99651$var$FileStream.prototype._read = function(n) {};
module.exports = $88ed174376e99651$var$Multipart;


//# sourceMappingURL=multipart.408b0b2c.js.map
