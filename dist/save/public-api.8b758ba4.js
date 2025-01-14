require("./URL.9b4790e1.js");
require("./url-state-machine.73b4c672.js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
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
parcelRegister("ivISe", function(module, exports) {
module.exports = new URL("URL.9b4790e1.js", "file:" + __filename).toString();

});


$parcel$export(module.exports, "URL", () => $0767505afd940f91$export$61abde59b50deb8e, (v) => $0767505afd940f91$export$61abde59b50deb8e = v);
$parcel$export(module.exports, "serializeURL", () => $0767505afd940f91$export$22c26650625a03dd, (v) => $0767505afd940f91$export$22c26650625a03dd = v);
$parcel$export(module.exports, "serializeURLOrigin", () => $0767505afd940f91$export$2e7f7e38cf280175, (v) => $0767505afd940f91$export$2e7f7e38cf280175 = v);
$parcel$export(module.exports, "basicURLParse", () => $0767505afd940f91$export$49426ae341001e98, (v) => $0767505afd940f91$export$49426ae341001e98 = v);
$parcel$export(module.exports, "setTheUsername", () => $0767505afd940f91$export$9f0084801ea6f73, (v) => $0767505afd940f91$export$9f0084801ea6f73 = v);
$parcel$export(module.exports, "setThePassword", () => $0767505afd940f91$export$179ff9102702017e, (v) => $0767505afd940f91$export$179ff9102702017e = v);
$parcel$export(module.exports, "serializeHost", () => $0767505afd940f91$export$5a72d4202df05eaf, (v) => $0767505afd940f91$export$5a72d4202df05eaf = v);
$parcel$export(module.exports, "serializeInteger", () => $0767505afd940f91$export$694507dc48e0aff6, (v) => $0767505afd940f91$export$694507dc48e0aff6 = v);
$parcel$export(module.exports, "parseURL", () => $0767505afd940f91$export$4b3d9a5bae55976, (v) => $0767505afd940f91$export$4b3d9a5bae55976 = v);
var $0767505afd940f91$export$61abde59b50deb8e;
var $0767505afd940f91$export$22c26650625a03dd;
var $0767505afd940f91$export$2e7f7e38cf280175;
var $0767505afd940f91$export$49426ae341001e98;
var $0767505afd940f91$export$9f0084801ea6f73;
var $0767505afd940f91$export$179ff9102702017e;
var $0767505afd940f91$export$5a72d4202df05eaf;
var $0767505afd940f91$export$694507dc48e0aff6;
var $0767505afd940f91$export$4b3d9a5bae55976;
"use strict";

$0767505afd940f91$export$61abde59b50deb8e = (parcelRequire("ivISe")).interface;

$0767505afd940f91$export$22c26650625a03dd = (parcelRequire("bhBcz")).serializeURL;

$0767505afd940f91$export$2e7f7e38cf280175 = (parcelRequire("bhBcz")).serializeURLOrigin;

$0767505afd940f91$export$49426ae341001e98 = (parcelRequire("bhBcz")).basicURLParse;

$0767505afd940f91$export$9f0084801ea6f73 = (parcelRequire("bhBcz")).setTheUsername;

$0767505afd940f91$export$179ff9102702017e = (parcelRequire("bhBcz")).setThePassword;

$0767505afd940f91$export$5a72d4202df05eaf = (parcelRequire("bhBcz")).serializeHost;

$0767505afd940f91$export$694507dc48e0aff6 = (parcelRequire("bhBcz")).serializeInteger;

$0767505afd940f91$export$4b3d9a5bae55976 = (parcelRequire("bhBcz")).parseURL;


