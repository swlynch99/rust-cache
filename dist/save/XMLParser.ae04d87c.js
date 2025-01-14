require("./OptionsBuilder.e339966e.js");
require("./OrderedObjParser.99774d4a.js");
require("./node2json.71917429.js");
require("./validator.ed551596.js");


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
var $d3acf1f1525144c1$exports = {};
$d3acf1f1525144c1$exports = new URL("OptionsBuilder.e339966e.js", "file:" + __filename).toString();


var $66315f42b3a63cd8$require$buildOptions = $d3acf1f1525144c1$exports.buildOptions;
var $8844646a772857fa$exports = {};
$8844646a772857fa$exports = new URL("OrderedObjParser.99774d4a.js", "file:" + __filename).toString();


var $24747feea396e2a4$exports = {};
$24747feea396e2a4$exports = new URL("node2json.71917429.js", "file:" + __filename).toString();


var $66315f42b3a63cd8$require$prettify = $24747feea396e2a4$exports.prettify;

var $aRQcZ = parcelRequire("aRQcZ");
class $66315f42b3a63cd8$var$XMLParser {
    constructor(options){
        this.externalEntities = {};
        this.options = $66315f42b3a63cd8$require$buildOptions(options);
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
            const result = $aRQcZ.validate(xmlData, validationOption);
            if (result !== true) throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
        }
        const orderedObjParser = new $8844646a772857fa$exports(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return $66315f42b3a63cd8$require$prettify(orderedResult, this.options);
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
module.exports = $66315f42b3a63cd8$var$XMLParser;


