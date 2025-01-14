require("./util.950de7a8.js");


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

var $5igtK = parcelRequire("5igtK");
//TODO: handle comments
function $cc58d3e5436866a3$var$readDocType(xmlData, i) {
    const entities = {};
    if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(; i < xmlData.length; i++){
            if (xmlData[i] === '<' && !comment) {
                if (hasBody && $cc58d3e5436866a3$var$isEntity(xmlData, i)) {
                    i += 7;
                    let entityName, val;
                    [entityName, val, i] = $cc58d3e5436866a3$var$readEntityExp(xmlData, i + 1);
                    if (val.indexOf("&") === -1) entities[$cc58d3e5436866a3$var$validateEntityName(entityName)] = {
                        regx: RegExp(`&${entityName};`, "g"),
                        val: val
                    };
                } else if (hasBody && $cc58d3e5436866a3$var$isElement(xmlData, i)) i += 8; //Not supported
                else if (hasBody && $cc58d3e5436866a3$var$isAttlist(xmlData, i)) i += 8; //Not supported
                else if (hasBody && $cc58d3e5436866a3$var$isNotation(xmlData, i)) i += 9; //Not supported
                else if ($cc58d3e5436866a3$var$isComment) comment = true;
                else throw new Error("Invalid DOCTYPE");
                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') {
                if (comment) {
                    if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                        comment = false;
                        angleBracketsCount--;
                    }
                } else angleBracketsCount--;
                if (angleBracketsCount === 0) break;
            } else if (xmlData[i] === '[') hasBody = true;
            else exp += xmlData[i];
        }
        if (angleBracketsCount !== 0) throw new Error(`Unclosed DOCTYPE`);
    } else throw new Error(`Invalid Tag instead of DOCTYPE`);
    return {
        entities: entities,
        i: i
    };
}
function $cc58d3e5436866a3$var$readEntityExp(xmlData, i) {
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >
    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">
    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    //read EntityName
    let entityName = "";
    for(; i < xmlData.length && xmlData[i] !== "'" && xmlData[i] !== '"'; i++)// if(xmlData[i] === " ") continue;
    // else 
    entityName += xmlData[i];
    entityName = entityName.trim();
    if (entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    //read Entity Value
    const startChar = xmlData[i++];
    let val = "";
    for(; i < xmlData.length && xmlData[i] !== startChar; i++)val += xmlData[i];
    return [
        entityName,
        val,
        i
    ];
}
function $cc58d3e5436866a3$var$isComment(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === '-' && xmlData[i + 3] === '-') return true;
    return false;
}
function $cc58d3e5436866a3$var$isEntity(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'E' && xmlData[i + 3] === 'N' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'I' && xmlData[i + 6] === 'T' && xmlData[i + 7] === 'Y') return true;
    return false;
}
function $cc58d3e5436866a3$var$isElement(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'E' && xmlData[i + 3] === 'L' && xmlData[i + 4] === 'E' && xmlData[i + 5] === 'M' && xmlData[i + 6] === 'E' && xmlData[i + 7] === 'N' && xmlData[i + 8] === 'T') return true;
    return false;
}
function $cc58d3e5436866a3$var$isAttlist(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'A' && xmlData[i + 3] === 'T' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'L' && xmlData[i + 6] === 'I' && xmlData[i + 7] === 'S' && xmlData[i + 8] === 'T') return true;
    return false;
}
function $cc58d3e5436866a3$var$isNotation(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'N' && xmlData[i + 3] === 'O' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'A' && xmlData[i + 6] === 'T' && xmlData[i + 7] === 'I' && xmlData[i + 8] === 'O' && xmlData[i + 9] === 'N') return true;
    return false;
}
function $cc58d3e5436866a3$var$validateEntityName(name) {
    if ($5igtK.isName(name)) return name;
    else throw new Error(`Invalid entity name ${name}`);
}
module.exports = $cc58d3e5436866a3$var$readDocType;


