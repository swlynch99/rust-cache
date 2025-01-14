require("./Dicer.6b7c6768.js");
require("./parseParams.3c908d5e.js");
require("./decodeText.ee4a57d9.js");
require("./basename.eca1c1aa.js");
require("./getLimit.982d87c3.js");
var $dDSjo$nodestream = require("node:stream");
var $dDSjo$nodeutil = require("node:util");


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

var $466fda3fb248e2bd$require$Readable = $dDSjo$nodestream.Readable;

var $466fda3fb248e2bd$require$inherits = $dDSjo$nodeutil.inherits;

var $iMdHx = parcelRequire("iMdHx");
var $d126c81051b7ef77$exports = {};
$d126c81051b7ef77$exports = new URL("parseParams.3c908d5e.js", "file:" + __filename).toString();



var $46Ood = parcelRequire("46Ood");
var $f9194ec5be76316a$exports = {};
$f9194ec5be76316a$exports = new URL("basename.eca1c1aa.js", "file:" + __filename).toString();



var $4JlSE = parcelRequire("4JlSE");
const $466fda3fb248e2bd$var$RE_BOUNDARY = /^boundary$/i;
const $466fda3fb248e2bd$var$RE_FIELD = /^form-data$/i;
const $466fda3fb248e2bd$var$RE_CHARSET = /^charset$/i;
const $466fda3fb248e2bd$var$RE_FILENAME = /^filename$/i;
const $466fda3fb248e2bd$var$RE_NAME = /^name$/i;
$466fda3fb248e2bd$var$Multipart.detect = /^multipart\/form-data/i;
function $466fda3fb248e2bd$var$Multipart(boy, cfg) {
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
    for(i = 0, len = parsedConType.length; i < len; ++i)if (Array.isArray(parsedConType[i]) && $466fda3fb248e2bd$var$RE_BOUNDARY.test(parsedConType[i][0])) {
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
    const fieldSizeLimit = $4JlSE(limits, 'fieldSize', 1048576);
    const fileSizeLimit = $4JlSE(limits, 'fileSize', Infinity);
    const filesLimit = $4JlSE(limits, 'files', Infinity);
    const fieldsLimit = $4JlSE(limits, 'fields', Infinity);
    const partsLimit = $4JlSE(limits, 'parts', Infinity);
    const headerPairsLimit = $4JlSE(limits, 'headerPairs', 2000);
    const headerSizeLimit = $4JlSE(limits, 'headerSize', 81920);
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
    this.parser = new $iMdHx(parserCfg);
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
            self.parser.on('part', $466fda3fb248e2bd$var$skipPart);
            boy.hitPartsLimit = true;
            boy.emit('partsLimit');
            return $466fda3fb248e2bd$var$skipPart(part);
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
                parsed = $d126c81051b7ef77$exports(header['content-type'][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i)if ($466fda3fb248e2bd$var$RE_CHARSET.test(parsed[i][0])) {
                        charset = parsed[i][1].toLowerCase();
                        break;
                    }
                }
            }
            if (contype === undefined) contype = 'text/plain';
            if (charset === undefined) charset = defCharset;
            if (header['content-disposition']) {
                parsed = $d126c81051b7ef77$exports(header['content-disposition'][0]);
                if (!$466fda3fb248e2bd$var$RE_FIELD.test(parsed[0])) return $466fda3fb248e2bd$var$skipPart(part);
                for(i = 0, len = parsed.length; i < len; ++i){
                    if ($466fda3fb248e2bd$var$RE_NAME.test(parsed[i][0])) fieldname = parsed[i][1];
                    else if ($466fda3fb248e2bd$var$RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) filename = $f9194ec5be76316a$exports(filename);
                    }
                }
            } else return $466fda3fb248e2bd$var$skipPart(part);
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
                    return $466fda3fb248e2bd$var$skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount('file') === 0) {
                    self.parser._ignore();
                    return;
                }
                ++nends;
                const file = new $466fda3fb248e2bd$var$FileStream(fileOpts);
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
                    return $466fda3fb248e2bd$var$skipPart(part);
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
                    if (buffer.length) buffer = $46Ood(buffer, 'binary', charset);
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
$466fda3fb248e2bd$var$Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) cb();
    else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
$466fda3fb248e2bd$var$Multipart.prototype.end = function() {
    const self = this;
    if (self.parser.writable) self.parser.end();
    else if (!self._boy._done) process.nextTick(function() {
        self._boy._done = true;
        self._boy.emit('finish');
    });
};
function $466fda3fb248e2bd$var$skipPart(part) {
    part.resume();
}
function $466fda3fb248e2bd$var$FileStream(opts) {
    $466fda3fb248e2bd$require$Readable.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
$466fda3fb248e2bd$require$inherits($466fda3fb248e2bd$var$FileStream, $466fda3fb248e2bd$require$Readable);
$466fda3fb248e2bd$var$FileStream.prototype._read = function(n) {};
module.exports = $466fda3fb248e2bd$var$Multipart;


