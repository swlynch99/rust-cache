require("./constants.425d5fc4.js");
var $5fM8I$fs = require("fs");
var $5fM8I$util = require("util");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.



var $daWVB = parcelRequire("daWVB");
async function $cbd0cc605ef7ca2f$export$f207b56f03ffaaa2(stream, buffer, offset, end, encoding) {
    let pos = 0; // Position in stream
    const count = end - offset; // Total amount of data needed in stream
    return new Promise((resolve, reject)=>{
        const timeout = setTimeout(()=>reject(new Error(`The operation cannot be completed in timeout.`)), (0, $daWVB.REQUEST_TIMEOUT));
        stream.on("readable", ()=>{
            if (pos >= count) {
                clearTimeout(timeout);
                resolve();
                return;
            }
            let chunk = stream.read();
            if (!chunk) return;
            if (typeof chunk === "string") chunk = Buffer.from(chunk, encoding);
            // How much data needed in this chunk
            const chunkLength = pos + chunk.length > count ? count - pos : chunk.length;
            buffer.fill(chunk.slice(0, chunkLength), offset + pos, offset + pos + chunkLength);
            pos += chunkLength;
        });
        stream.on("end", ()=>{
            clearTimeout(timeout);
            if (pos < count) reject(new Error(`Stream drains before getting enough data needed. Data read: ${pos}, data need: ${count}`));
            resolve();
        });
        stream.on("error", (msg)=>{
            clearTimeout(timeout);
            reject(msg);
        });
    });
}
async function $cbd0cc605ef7ca2f$export$d16fe1df677cb460(stream, buffer, encoding) {
    let pos = 0; // Position in stream
    const bufferSize = buffer.length;
    return new Promise((resolve, reject)=>{
        stream.on("readable", ()=>{
            let chunk = stream.read();
            if (!chunk) return;
            if (typeof chunk === "string") chunk = Buffer.from(chunk, encoding);
            if (pos + chunk.length > bufferSize) {
                reject(new Error(`Stream exceeds buffer size. Buffer size: ${bufferSize}`));
                return;
            }
            buffer.fill(chunk, pos, pos + chunk.length);
            pos += chunk.length;
        });
        stream.on("end", ()=>{
            resolve(pos);
        });
        stream.on("error", reject);
    });
}
async function $cbd0cc605ef7ca2f$export$44bb15604bfbf01(readableStream, encoding) {
    return new Promise((resolve, reject)=>{
        const chunks = [];
        readableStream.on("data", (data)=>{
            chunks.push(data instanceof Buffer ? data : Buffer.from(data, encoding));
        });
        readableStream.on("end", ()=>{
            resolve(Buffer.concat(chunks));
        });
        readableStream.on("error", reject);
    });
}
async function $cbd0cc605ef7ca2f$export$60ca162ee47afd8(rs, file) {
    return new Promise((resolve, reject)=>{
        const ws = $5fM8I$fs.createWriteStream(file);
        rs.on("error", (err)=>{
            reject(err);
        });
        ws.on("error", (err)=>{
            reject(err);
        });
        ws.on("close", resolve);
        rs.pipe(ws);
    });
}
const $cbd0cc605ef7ca2f$export$ce125cf7651e99b1 = $5fM8I$util.promisify($5fM8I$fs.stat);
const $cbd0cc605ef7ca2f$export$4277ca10550ffa98 = $5fM8I$fs.createReadStream;


//# sourceMappingURL=utils.node.ccc89428.js.map
