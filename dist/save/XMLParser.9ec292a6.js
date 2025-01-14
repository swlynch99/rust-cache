require("./OptionsBuilder.cd3dd10d.js");
require("./OrderedObjParser.16bcb56d.js");
require("./node2json.b87a8f03.js");
require("./validator.42174068.js");


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
var $30b216625592c1ce$exports = {};
$30b216625592c1ce$exports = new URL("OptionsBuilder.cd3dd10d.js", "file:" + __filename).toString();


var $bb8c2d89e2edc310$require$buildOptions = $30b216625592c1ce$exports.buildOptions;
var $4afd0dc7c7fcee46$exports = {};
$4afd0dc7c7fcee46$exports = new URL("OrderedObjParser.16bcb56d.js", "file:" + __filename).toString();


var $fd7c7a45d281e917$exports = {};
$fd7c7a45d281e917$exports = new URL("node2json.b87a8f03.js", "file:" + __filename).toString();


var $bb8c2d89e2edc310$require$prettify = $fd7c7a45d281e917$exports.prettify;

var $k3aVr = parcelRequire("k3aVr");
class $bb8c2d89e2edc310$var$XMLParser {
    constructor(options){
        this.externalEntities = {};
        this.options = $bb8c2d89e2edc310$require$buildOptions(options);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */ parse(xmlData, validationOption) {
        if (typeof xmlData === "string") ;
        else if (xmlData.toString) xmlData = xmlData.toString();
        else throw new Error("XML data is accepted in String or Bytes[] form.");
        if (validationOption) {
            if (validationOption === true) validationOption = {}; //validate with default options
            const result = $k3aVr.validate(xmlData, validationOption);
            if (result !== true) throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
        }
        const orderedObjParser = new $4afd0dc7c7fcee46$exports(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return $bb8c2d89e2edc310$require$prettify(orderedResult, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */ addEntity(key, value) {
        if (value.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
        else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        else if (value === "&") throw new Error("An entity with value '&' is not permitted");
        else this.externalEntities[key] = value;
    }
}
module.exports = $bb8c2d89e2edc310$var$XMLParser;


//# sourceMappingURL=XMLParser.9ec292a6.js.map
