require("./util.5f8a6c8c.js");


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

var $h2Gbw = parcelRequire("h2Gbw");
//TODO: handle comments
function $c6a1e6aeab933bd7$var$readDocType(xmlData, i) {
    const entities = {};
    if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
        i = i + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(; i < xmlData.length; i++){
            if (xmlData[i] === '<' && !comment) {
                if (hasBody && $c6a1e6aeab933bd7$var$isEntity(xmlData, i)) {
                    i += 7;
                    let entityName, val;
                    [entityName, val, i] = $c6a1e6aeab933bd7$var$readEntityExp(xmlData, i + 1);
                    if (val.indexOf("&") === -1) entities[$c6a1e6aeab933bd7$var$validateEntityName(entityName)] = {
                        regx: RegExp(`&${entityName};`, "g"),
                        val: val
                    };
                } else if (hasBody && $c6a1e6aeab933bd7$var$isElement(xmlData, i)) i += 8; //Not supported
                else if (hasBody && $c6a1e6aeab933bd7$var$isAttlist(xmlData, i)) i += 8; //Not supported
                else if (hasBody && $c6a1e6aeab933bd7$var$isNotation(xmlData, i)) i += 9; //Not supported
                else if ($c6a1e6aeab933bd7$var$isComment) comment = true;
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
function $c6a1e6aeab933bd7$var$readEntityExp(xmlData, i) {
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
function $c6a1e6aeab933bd7$var$isComment(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === '-' && xmlData[i + 3] === '-') return true;
    return false;
}
function $c6a1e6aeab933bd7$var$isEntity(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'E' && xmlData[i + 3] === 'N' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'I' && xmlData[i + 6] === 'T' && xmlData[i + 7] === 'Y') return true;
    return false;
}
function $c6a1e6aeab933bd7$var$isElement(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'E' && xmlData[i + 3] === 'L' && xmlData[i + 4] === 'E' && xmlData[i + 5] === 'M' && xmlData[i + 6] === 'E' && xmlData[i + 7] === 'N' && xmlData[i + 8] === 'T') return true;
    return false;
}
function $c6a1e6aeab933bd7$var$isAttlist(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'A' && xmlData[i + 3] === 'T' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'L' && xmlData[i + 6] === 'I' && xmlData[i + 7] === 'S' && xmlData[i + 8] === 'T') return true;
    return false;
}
function $c6a1e6aeab933bd7$var$isNotation(xmlData, i) {
    if (xmlData[i + 1] === '!' && xmlData[i + 2] === 'N' && xmlData[i + 3] === 'O' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'A' && xmlData[i + 6] === 'T' && xmlData[i + 7] === 'I' && xmlData[i + 8] === 'O' && xmlData[i + 9] === 'N') return true;
    return false;
}
function $c6a1e6aeab933bd7$var$validateEntityName(name) {
    if ($h2Gbw.isName(name)) return name;
    else throw new Error(`Invalid entity name ${name}`);
}
module.exports = $c6a1e6aeab933bd7$var$readDocType;


//# sourceMappingURL=DocTypeReader.0c55a009.js.map
