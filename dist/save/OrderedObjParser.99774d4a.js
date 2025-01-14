require("./util.950de7a8.js");
require("./xmlNode.3f9720d7.js");
require("./DocTypeReader.d4dc98de.js");
require("./strnum.2a119ea9.js");
require("./ignoreAttributes.457ec735.js");


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

var $5igtK = parcelRequire("5igtK");
var $8e78afae54e98dbf$exports = {};
$8e78afae54e98dbf$exports = new URL("xmlNode.3f9720d7.js", "file:" + __filename).toString();


var $51cf91beb7ae2046$exports = {};
$51cf91beb7ae2046$exports = new URL("DocTypeReader.d4dc98de.js", "file:" + __filename).toString();


var $0e9d7a9b888a5226$exports = {};
$0e9d7a9b888a5226$exports = new URL("strnum.2a119ea9.js", "file:" + __filename).toString();


var $c4fe6eb93927d145$exports = {};
$c4fe6eb93927d145$exports = new URL("ignoreAttributes.457ec735.js", "file:" + __filename).toString();


// const regx =
//   '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
//   .replace(/NAME/g, util.nameRegexp);
//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
class $04d6a13b3edeb2d0$var$OrderedObjParser {
    constructor(options){
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
            "apos": {
                regex: /&(apos|#39|#x27);/g,
                val: "'"
            },
            "gt": {
                regex: /&(gt|#62|#x3E);/g,
                val: ">"
            },
            "lt": {
                regex: /&(lt|#60|#x3C);/g,
                val: "<"
            },
            "quot": {
                regex: /&(quot|#34|#x22);/g,
                val: "\""
            }
        };
        this.ampEntity = {
            regex: /&(amp|#38|#x26);/g,
            val: "&"
        };
        this.htmlEntities = {
            "space": {
                regex: /&(nbsp|#160);/g,
                val: " "
            },
            // "lt" : { regex: /&(lt|#60);/g, val: "<" },
            // "gt" : { regex: /&(gt|#62);/g, val: ">" },
            // "amp" : { regex: /&(amp|#38);/g, val: "&" },
            // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
            // "apos" : { regex: /&(apos|#39);/g, val: "'" },
            "cent": {
                regex: /&(cent|#162);/g,
                val: "\xa2"
            },
            "pound": {
                regex: /&(pound|#163);/g,
                val: "\xa3"
            },
            "yen": {
                regex: /&(yen|#165);/g,
                val: "\xa5"
            },
            "euro": {
                regex: /&(euro|#8364);/g,
                val: "\u20AC"
            },
            "copyright": {
                regex: /&(copy|#169);/g,
                val: "\xa9"
            },
            "reg": {
                regex: /&(reg|#174);/g,
                val: "\xae"
            },
            "inr": {
                regex: /&(inr|#8377);/g,
                val: "\u20B9"
            },
            "num_dec": {
                regex: /&#([0-9]{1,7});/g,
                val: (_, str)=>String.fromCharCode(Number.parseInt(str, 10))
            },
            "num_hex": {
                regex: /&#x([0-9a-fA-F]{1,6});/g,
                val: (_, str)=>String.fromCharCode(Number.parseInt(str, 16))
            }
        };
        this.addExternalEntities = $04d6a13b3edeb2d0$var$addExternalEntities;
        this.parseXml = $04d6a13b3edeb2d0$var$parseXml;
        this.parseTextData = $04d6a13b3edeb2d0$var$parseTextData;
        this.resolveNameSpace = $04d6a13b3edeb2d0$var$resolveNameSpace;
        this.buildAttributesMap = $04d6a13b3edeb2d0$var$buildAttributesMap;
        this.isItStopNode = $04d6a13b3edeb2d0$var$isItStopNode;
        this.replaceEntitiesValue = $04d6a13b3edeb2d0$var$replaceEntitiesValue;
        this.readStopNodeData = $04d6a13b3edeb2d0$var$readStopNodeData;
        this.saveTextToParentTag = $04d6a13b3edeb2d0$var$saveTextToParentTag;
        this.addChild = $04d6a13b3edeb2d0$var$addChild;
        this.ignoreAttributesFn = $c4fe6eb93927d145$exports(this.options.ignoreAttributes);
    }
}
function $04d6a13b3edeb2d0$var$addExternalEntities(externalEntities) {
    const entKeys = Object.keys(externalEntities);
    for(let i = 0; i < entKeys.length; i++){
        const ent = entKeys[i];
        this.lastEntities[ent] = {
            regex: new RegExp("&" + ent + ";", "g"),
            val: externalEntities[ent]
        };
    }
}
/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */ function $04d6a13b3edeb2d0$var$parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
    if (val !== undefined) {
        if (this.options.trimValues && !dontTrim) val = val.trim();
        if (val.length > 0) {
            if (!escapeEntities) val = this.replaceEntitiesValue(val);
            const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
            if (newval === null || newval === undefined) //don't parse
            return val;
            else if (typeof newval !== typeof val || newval !== val) //overwrite
            return newval;
            else if (this.options.trimValues) return $04d6a13b3edeb2d0$var$parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
            else {
                const trimmedVal = val.trim();
                if (trimmedVal === val) return $04d6a13b3edeb2d0$var$parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
                else return val;
            }
        }
    }
}
function $04d6a13b3edeb2d0$var$resolveNameSpace(tagname) {
    if (this.options.removeNSPrefix) {
        const tags = tagname.split(':');
        const prefix = tagname.charAt(0) === '/' ? '/' : '';
        if (tags[0] === 'xmlns') return '';
        if (tags.length === 2) tagname = prefix + tags[1];
    }
    return tagname;
}
//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const $04d6a13b3edeb2d0$var$attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');
function $04d6a13b3edeb2d0$var$buildAttributesMap(attrStr, jPath, tagName) {
    if (this.options.ignoreAttributes !== true && typeof attrStr === 'string') {
        // attrStr = attrStr.replace(/\r?\n/g, ' ');
        //attrStr = attrStr || attrStr.trim();
        const matches = $5igtK.getAllMatches(attrStr, $04d6a13b3edeb2d0$var$attrsRegx);
        const len = matches.length; //don't make it inline
        const attrs = {};
        for(let i = 0; i < len; i++){
            const attrName = this.resolveNameSpace(matches[i][1]);
            if (this.ignoreAttributesFn(attrName, jPath)) continue;
            let oldVal = matches[i][4];
            let aName = this.options.attributeNamePrefix + attrName;
            if (attrName.length) {
                if (this.options.transformAttributeName) aName = this.options.transformAttributeName(aName);
                if (aName === "__proto__") aName = "#__proto__";
                if (oldVal !== undefined) {
                    if (this.options.trimValues) oldVal = oldVal.trim();
                    oldVal = this.replaceEntitiesValue(oldVal);
                    const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                    if (newVal === null || newVal === undefined) //don't parse
                    attrs[aName] = oldVal;
                    else if (typeof newVal !== typeof oldVal || newVal !== oldVal) //overwrite
                    attrs[aName] = newVal;
                    else //parse
                    attrs[aName] = $04d6a13b3edeb2d0$var$parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
                } else if (this.options.allowBooleanAttributes) attrs[aName] = true;
            }
        }
        if (!Object.keys(attrs).length) return;
        if (this.options.attributesGroupName) {
            const attrCollection = {};
            attrCollection[this.options.attributesGroupName] = attrs;
            return attrCollection;
        }
        return attrs;
    }
}
const $04d6a13b3edeb2d0$var$parseXml = function(xmlData) {
    xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
    const xmlObj = new $8e78afae54e98dbf$exports('!xml');
    let currentNode = xmlObj;
    let textData = "";
    let jPath = "";
    for(let i = 0; i < xmlData.length; i++){
        const ch = xmlData[i];
        if (ch === '<') {
            // const nextIndex = i+1;
            // const _2ndChar = xmlData[nextIndex];
            if (xmlData[i + 1] === '/') {
                const closeIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                let tagName = xmlData.substring(i + 2, closeIndex).trim();
                if (this.options.removeNSPrefix) {
                    const colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) tagName = tagName.substr(colonIndex + 1);
                }
                if (this.options.transformTagName) tagName = this.options.transformTagName(tagName);
                if (currentNode) textData = this.saveTextToParentTag(textData, currentNode, jPath);
                //check if last tag of nested tag was unpaired tag
                const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
                if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
                let propIndex = 0;
                if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                    propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.') - 1);
                    this.tagsNodeStack.pop();
                } else propIndex = jPath.lastIndexOf(".");
                jPath = jPath.substring(0, propIndex);
                currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
                textData = "";
                i = closeIndex;
            } else if (xmlData[i + 1] === '?') {
                let tagData = $04d6a13b3edeb2d0$var$readTagExp(xmlData, i, false, "?>");
                if (!tagData) throw new Error("Pi Tag is not closed.");
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) ;
                else {
                    const childNode = new $8e78afae54e98dbf$exports(tagData.tagName);
                    childNode.add(this.options.textNodeName, "");
                    if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                    this.addChild(currentNode, childNode, jPath);
                }
                i = tagData.closeIndex + 1;
            } else if (xmlData.substr(i + 1, 3) === '!--') {
                const endIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                if (this.options.commentPropName) {
                    const comment = xmlData.substring(i + 4, endIndex - 2);
                    textData = this.saveTextToParentTag(textData, currentNode, jPath);
                    currentNode.add(this.options.commentPropName, [
                        {
                            [this.options.textNodeName]: comment
                        }
                    ]);
                }
                i = endIndex;
            } else if (xmlData.substr(i + 1, 2) === '!D') {
                const result = $51cf91beb7ae2046$exports(xmlData, i);
                this.docTypeEntities = result.entities;
                i = result.i;
            } else if (xmlData.substr(i + 1, 2) === '![') {
                const closeIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                const tagExp = xmlData.substring(i + 9, closeIndex);
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
                if (val == undefined) val = "";
                //cdata should be set even if it is 0 length string
                if (this.options.cdataPropName) currentNode.add(this.options.cdataPropName, [
                    {
                        [this.options.textNodeName]: tagExp
                    }
                ]);
                else currentNode.add(this.options.textNodeName, val);
                i = closeIndex + 2;
            } else {
                let result = $04d6a13b3edeb2d0$var$readTagExp(xmlData, i, this.options.removeNSPrefix);
                let tagName = result.tagName;
                const rawTagName = result.rawTagName;
                let tagExp = result.tagExp;
                let attrExpPresent = result.attrExpPresent;
                let closeIndex = result.closeIndex;
                if (this.options.transformTagName) tagName = this.options.transformTagName(tagName);
                //save text as child node
                if (currentNode && textData) {
                    if (currentNode.tagname !== '!xml') //when nested tag is found
                    textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                }
                //check if last tag was unpaired tag
                const lastTag = currentNode;
                if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                    currentNode = this.tagsNodeStack.pop();
                    jPath = jPath.substring(0, jPath.lastIndexOf("."));
                }
                if (tagName !== xmlObj.tagname) jPath += jPath ? "." + tagName : tagName;
                if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                    let tagContent = "";
                    //self-closing tag
                    if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                        if (tagName[tagName.length - 1] === "/") {
                            tagName = tagName.substr(0, tagName.length - 1);
                            jPath = jPath.substr(0, jPath.length - 1);
                            tagExp = tagName;
                        } else tagExp = tagExp.substr(0, tagExp.length - 1);
                        i = result.closeIndex;
                    } else if (this.options.unpairedTags.indexOf(tagName) !== -1) i = result.closeIndex;
                    else {
                        //read until closing tag is found
                        const result = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                        if (!result) throw new Error(`Unexpected end of ${rawTagName}`);
                        i = result.i;
                        tagContent = result.tagContent;
                    }
                    const childNode = new $8e78afae54e98dbf$exports(tagName);
                    if (tagName !== tagExp && attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                    if (tagContent) tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                    jPath = jPath.substr(0, jPath.lastIndexOf("."));
                    childNode.add(this.options.textNodeName, tagContent);
                    this.addChild(currentNode, childNode, jPath);
                } else {
                    //selfClosing tag
                    if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                        if (tagName[tagName.length - 1] === "/") {
                            tagName = tagName.substr(0, tagName.length - 1);
                            jPath = jPath.substr(0, jPath.length - 1);
                            tagExp = tagName;
                        } else tagExp = tagExp.substr(0, tagExp.length - 1);
                        if (this.options.transformTagName) tagName = this.options.transformTagName(tagName);
                        const childNode = new $8e78afae54e98dbf$exports(tagName);
                        if (tagName !== tagExp && attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                        this.addChild(currentNode, childNode, jPath);
                        jPath = jPath.substr(0, jPath.lastIndexOf("."));
                    } else {
                        const childNode = new $8e78afae54e98dbf$exports(tagName);
                        this.tagsNodeStack.push(currentNode);
                        if (tagName !== tagExp && attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                        this.addChild(currentNode, childNode, jPath);
                        currentNode = childNode;
                    }
                    textData = "";
                    i = closeIndex;
                }
            }
        } else textData += xmlData[i];
    }
    return xmlObj.child;
};
function $04d6a13b3edeb2d0$var$addChild(currentNode, childNode, jPath) {
    const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
    if (result === false) ;
    else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
    } else currentNode.addChild(childNode);
}
const $04d6a13b3edeb2d0$var$replaceEntitiesValue = function(val) {
    if (this.options.processEntities) {
        for(let entityName in this.docTypeEntities){
            const entity = this.docTypeEntities[entityName];
            val = val.replace(entity.regx, entity.val);
        }
        for(let entityName in this.lastEntities){
            const entity = this.lastEntities[entityName];
            val = val.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) for(let entityName in this.htmlEntities){
            const entity = this.htmlEntities[entityName];
            val = val.replace(entity.regex, entity.val);
        }
        val = val.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return val;
};
function $04d6a13b3edeb2d0$var$saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
    if (textData) {
        if (isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
        if (textData !== undefined && textData !== "") currentNode.add(this.options.textNodeName, textData);
        textData = "";
    }
    return textData;
}
//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */ function $04d6a13b3edeb2d0$var$isItStopNode(stopNodes, jPath, currentTagName) {
    const allNodesExp = "*." + currentTagName;
    for(const stopNodePath in stopNodes){
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
    }
    return false;
}
/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */ function $04d6a13b3edeb2d0$var$tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
    let attrBoundary;
    let tagExp = "";
    for(let index = i; index < xmlData.length; index++){
        let ch = xmlData[index];
        if (attrBoundary) {
            if (ch === attrBoundary) attrBoundary = ""; //reset
        } else if (ch === '"' || ch === "'") attrBoundary = ch;
        else if (ch === closingChar[0]) {
            if (closingChar[1]) {
                if (xmlData[index + 1] === closingChar[1]) return {
                    data: tagExp,
                    index: index
                };
            } else return {
                data: tagExp,
                index: index
            };
        } else if (ch === '\t') ch = " ";
        tagExp += ch;
    }
}
function $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, str, i, errMsg) {
    const closingIndex = xmlData.indexOf(str, i);
    if (closingIndex === -1) throw new Error(errMsg);
    else return closingIndex + str.length - 1;
}
function $04d6a13b3edeb2d0$var$readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
    const result = $04d6a13b3edeb2d0$var$tagExpWithClosingIndex(xmlData, i + 1, closingChar);
    if (!result) return;
    let tagExp = result.data;
    const closeIndex = result.index;
    const separatorIndex = tagExp.search(/\s/);
    let tagName = tagExp;
    let attrExpPresent = true;
    if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
    }
    const rawTagName = tagName;
    if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
    }
    return {
        tagName: tagName,
        tagExp: tagExp,
        closeIndex: closeIndex,
        attrExpPresent: attrExpPresent,
        rawTagName: rawTagName
    };
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */ function $04d6a13b3edeb2d0$var$readStopNodeData(xmlData, tagName, i) {
    const startIndex = i;
    // Starting at 1 since we already have an open tag
    let openTagCount = 1;
    for(; i < xmlData.length; i++)if (xmlData[i] === "<") {
        if (xmlData[i + 1] === "/") {
            const closeIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
            if (closeTagName === tagName) {
                openTagCount--;
                if (openTagCount === 0) return {
                    tagContent: xmlData.substring(startIndex, i),
                    i: closeIndex
                };
            }
            i = closeIndex;
        } else if (xmlData[i + 1] === '?') {
            const closeIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
            i = closeIndex;
        } else if (xmlData.substr(i + 1, 3) === '!--') {
            const closeIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
            i = closeIndex;
        } else if (xmlData.substr(i + 1, 2) === '![') {
            const closeIndex = $04d6a13b3edeb2d0$var$findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
            i = closeIndex;
        } else {
            const tagData = $04d6a13b3edeb2d0$var$readTagExp(xmlData, i, '>');
            if (tagData) {
                const openTagName = tagData && tagData.tagName;
                if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") openTagCount++;
                i = tagData.closeIndex;
            }
        }
    }
     //end for loop
}
function $04d6a13b3edeb2d0$var$parseValue(val, shouldParse, options) {
    if (shouldParse && typeof val === 'string') {
        //console.log(options)
        const newval = val.trim();
        if (newval === 'true') return true;
        else if (newval === 'false') return false;
        else return $0e9d7a9b888a5226$exports(val, options);
    } else {
        if ($5igtK.isExist(val)) return val;
        else return '';
    }
}
module.exports = $04d6a13b3edeb2d0$var$OrderedObjParser;


