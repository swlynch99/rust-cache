require("./constants.40d31e64.js");
var $lJbAg$fs = require("fs");
var $lJbAg$util = require("util");


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



var $3UluS = parcelRequire("3UluS");
async function $8f801acdc48077c8$export$f207b56f03ffaaa2(stream, buffer, offset, end, encoding) {
    let pos = 0; // Position in stream
    const count = end - offset; // Total amount of data needed in stream
    return new Promise((resolve, reject)=>{
        const timeout = setTimeout(()=>reject(new Error(`The operation cannot be completed in timeout.`)), (0, $3UluS.REQUEST_TIMEOUT));
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
async function $8f801acdc48077c8$export$d16fe1df677cb460(stream, buffer, encoding) {
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
async function $8f801acdc48077c8$export$44bb15604bfbf01(readableStream, encoding) {
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
async function $8f801acdc48077c8$export$60ca162ee47afd8(rs, file) {
    return new Promise((resolve, reject)=>{
        const ws = $lJbAg$fs.createWriteStream(file);
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
const $8f801acdc48077c8$export$ce125cf7651e99b1 = $lJbAg$util.promisify($lJbAg$fs.stat);
const $8f801acdc48077c8$export$4277ca10550ffa98 = $lJbAg$fs.createReadStream;


