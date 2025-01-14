require("./util.5f8a6c8c.js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "validate", () => $e98c900b2140646b$export$a22775fa5e2eebd9, (v) => $e98c900b2140646b$export$a22775fa5e2eebd9 = v);
//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
var $e98c900b2140646b$export$a22775fa5e2eebd9;
'use strict';
var $d6928b2c57ac5fd1$exports = {};
$d6928b2c57ac5fd1$exports = new URL("util.5f8a6c8c.js", "file:" + __filename).toString();


const $e98c900b2140646b$var$defaultOptions = {
    allowBooleanAttributes: false,
    unpairedTags: []
};
$e98c900b2140646b$export$a22775fa5e2eebd9 = function(xmlData, options) {
    options = Object.assign({}, $e98c900b2140646b$var$defaultOptions, options);
    //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
    //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
    //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
    const tags = [];
    let tagFound = false;
    //indicates that the root tag has been closed (aka. depth 0 has been reached)
    let reachedRoot = false;
    if (xmlData[0] === '\ufeff') // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
    for(let i = 0; i < xmlData.length; i++){
        if (xmlData[i] === '<' && xmlData[i + 1] === '?') {
            i += 2;
            i = $e98c900b2140646b$var$readPI(xmlData, i);
            if (i.err) return i;
        } else if (xmlData[i] === '<') {
            //starting of tag
            //read until you reach to '>' avoiding any '>' in attribute value
            let tagStartPos = i;
            i++;
            if (xmlData[i] === '!') {
                i = $e98c900b2140646b$var$readCommentAndCDATA(xmlData, i);
                continue;
            } else {
                let closingTag = false;
                if (xmlData[i] === '/') {
                    //closing tag
                    closingTag = true;
                    i++;
                }
                //read tagname
                let tagName = '';
                for(; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++)tagName += xmlData[i];
                tagName = tagName.trim();
                //console.log(tagName);
                if (tagName[tagName.length - 1] === '/') {
                    //self closing tag without attributes
                    tagName = tagName.substring(0, tagName.length - 1);
                    //continue;
                    i--;
                }
                if (!$e98c900b2140646b$var$validateTagName(tagName)) {
                    let msg;
                    if (tagName.trim().length === 0) msg = "Invalid space after '<'.";
                    else msg = "Tag '" + tagName + "' is an invalid name.";
                    return $e98c900b2140646b$var$getErrorObject('InvalidTag', msg, $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
                }
                const result = $e98c900b2140646b$var$readAttributeStr(xmlData, i);
                if (result === false) return $e98c900b2140646b$var$getErrorObject('InvalidAttr', "Attributes for '" + tagName + "' have open quote.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
                let attrStr = result.value;
                i = result.index;
                if (attrStr[attrStr.length - 1] === '/') {
                    //self closing tag
                    const attrStrStart = i - attrStr.length;
                    attrStr = attrStr.substring(0, attrStr.length - 1);
                    const isValid = $e98c900b2140646b$var$validateAttributeString(attrStr, options);
                    if (isValid === true) tagFound = true;
                    else //the result from the nested function returns the position of the error within the attribute
                    //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                    //this gives us the absolute index in the entire xml, which we can use to find the line at last
                    return $e98c900b2140646b$var$getErrorObject(isValid.err.code, isValid.err.msg, $e98c900b2140646b$var$getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                } else if (closingTag) {
                    if (!result.tagClosed) return $e98c900b2140646b$var$getErrorObject('InvalidTag', "Closing tag '" + tagName + "' doesn't have proper closing.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
                    else if (attrStr.trim().length > 0) return $e98c900b2140646b$var$getErrorObject('InvalidTag', "Closing tag '" + tagName + "' can't have attributes or invalid starting.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, tagStartPos));
                    else if (tags.length === 0) return $e98c900b2140646b$var$getErrorObject('InvalidTag', "Closing tag '" + tagName + "' has not been opened.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, tagStartPos));
                    else {
                        const otg = tags.pop();
                        if (tagName !== otg.tagName) {
                            let openPos = $e98c900b2140646b$var$getLineNumberForPosition(xmlData, otg.tagStartPos);
                            return $e98c900b2140646b$var$getErrorObject('InvalidTag', "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, tagStartPos));
                        }
                        //when there are no more tags, we reached the root level.
                        if (tags.length == 0) reachedRoot = true;
                    }
                } else {
                    const isValid = $e98c900b2140646b$var$validateAttributeString(attrStr, options);
                    if (isValid !== true) //the result from the nested function returns the position of the error within the attribute
                    //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                    //this gives us the absolute index in the entire xml, which we can use to find the line at last
                    return $e98c900b2140646b$var$getErrorObject(isValid.err.code, isValid.err.msg, $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                    //if the root level has been reached before ...
                    if (reachedRoot === true) return $e98c900b2140646b$var$getErrorObject('InvalidXml', 'Multiple possible root nodes found.', $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
                    else if (options.unpairedTags.indexOf(tagName) !== -1) ;
                    else tags.push({
                        tagName: tagName,
                        tagStartPos: tagStartPos
                    });
                    tagFound = true;
                }
                //skip tag text value
                //It may include comments and CDATA value
                for(i++; i < xmlData.length; i++){
                    if (xmlData[i] === '<') {
                        if (xmlData[i + 1] === '!') {
                            //comment or CADATA
                            i++;
                            i = $e98c900b2140646b$var$readCommentAndCDATA(xmlData, i);
                            continue;
                        } else if (xmlData[i + 1] === '?') {
                            i = $e98c900b2140646b$var$readPI(xmlData, ++i);
                            if (i.err) return i;
                        } else break;
                    } else if (xmlData[i] === '&') {
                        const afterAmp = $e98c900b2140646b$var$validateAmpersand(xmlData, i);
                        if (afterAmp == -1) return $e98c900b2140646b$var$getErrorObject('InvalidChar', "char '&' is not expected.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
                        i = afterAmp;
                    } else {
                        if (reachedRoot === true && !$e98c900b2140646b$var$isWhiteSpace(xmlData[i])) return $e98c900b2140646b$var$getErrorObject('InvalidXml', "Extra text at the end", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
                    }
                } //end of reading tag text value
                if (xmlData[i] === '<') i--;
            }
        } else {
            if ($e98c900b2140646b$var$isWhiteSpace(xmlData[i])) continue;
            return $e98c900b2140646b$var$getErrorObject('InvalidChar', "char '" + xmlData[i] + "' is not expected.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
        }
    }
    if (!tagFound) return $e98c900b2140646b$var$getErrorObject('InvalidXml', 'Start tag expected.', 1);
    else if (tags.length == 1) return $e98c900b2140646b$var$getErrorObject('InvalidTag', "Unclosed tag '" + tags[0].tagName + "'.", $e98c900b2140646b$var$getLineNumberForPosition(xmlData, tags[0].tagStartPos));
    else if (tags.length > 0) return $e98c900b2140646b$var$getErrorObject('InvalidXml', "Invalid '" + JSON.stringify(tags.map((t)=>t.tagName), null, 4).replace(/\r?\n/g, '') + "' found.", {
        line: 1,
        col: 1
    });
    return true;
};
function $e98c900b2140646b$var$isWhiteSpace(char) {
    return char === ' ' || char === '\t' || char === '\n' || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */ function $e98c900b2140646b$var$readPI(xmlData, i) {
    const start = i;
    for(; i < xmlData.length; i++)if (xmlData[i] == '?' || xmlData[i] == ' ') {
        //tagname
        const tagname = xmlData.substr(start, i - start);
        if (i > 5 && tagname === 'xml') return $e98c900b2140646b$var$getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', $e98c900b2140646b$var$getLineNumberForPosition(xmlData, i));
        else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
            //check if valid attribut string
            i++;
            break;
        } else continue;
    }
    return i;
}
function $e98c900b2140646b$var$readCommentAndCDATA(xmlData, i) {
    if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
        //comment
        for(i += 3; i < xmlData.length; i++)if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
            i += 2;
            break;
        }
    } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
        let angleBracketsCount = 1;
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === '<') angleBracketsCount++;
            else if (xmlData[i] === '>') {
                angleBracketsCount--;
                if (angleBracketsCount === 0) break;
            }
        }
    } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
        for(i += 8; i < xmlData.length; i++)if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
            i += 2;
            break;
        }
    }
    return i;
}
const $e98c900b2140646b$var$doubleQuote = '"';
const $e98c900b2140646b$var$singleQuote = "'";
/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */ function $e98c900b2140646b$var$readAttributeStr(xmlData, i) {
    let attrStr = '';
    let startChar = '';
    let tagClosed = false;
    for(; i < xmlData.length; i++){
        if (xmlData[i] === $e98c900b2140646b$var$doubleQuote || xmlData[i] === $e98c900b2140646b$var$singleQuote) {
            if (startChar === '') startChar = xmlData[i];
            else if (startChar !== xmlData[i]) ;
            else startChar = '';
        } else if (xmlData[i] === '>') {
            if (startChar === '') {
                tagClosed = true;
                break;
            }
        }
        attrStr += xmlData[i];
    }
    if (startChar !== '') return false;
    return {
        value: attrStr,
        index: i,
        tagClosed: tagClosed
    };
}
/**
 * Select all the attributes whether valid or invalid.
 */ const $e98c900b2140646b$var$validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');
//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""
function $e98c900b2140646b$var$validateAttributeString(attrStr, options) {
    //console.log("start:"+attrStr+":end");
    //if(attrStr.trim().length === 0) return true; //empty string
    const matches = $d6928b2c57ac5fd1$exports.getAllMatches(attrStr, $e98c900b2140646b$var$validAttrStrRegxp);
    const attrNames = {};
    for(let i = 0; i < matches.length; i++){
        if (matches[i][1].length === 0) //nospace before attribute name: a="sd"b="saf"
        return $e98c900b2140646b$var$getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' has no space in starting.", $e98c900b2140646b$var$getPositionFromMatch(matches[i]));
        else if (matches[i][3] !== undefined && matches[i][4] === undefined) return $e98c900b2140646b$var$getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' is without value.", $e98c900b2140646b$var$getPositionFromMatch(matches[i]));
        else if (matches[i][3] === undefined && !options.allowBooleanAttributes) //independent attribute: ab
        return $e98c900b2140646b$var$getErrorObject('InvalidAttr', "boolean attribute '" + matches[i][2] + "' is not allowed.", $e98c900b2140646b$var$getPositionFromMatch(matches[i]));
        /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */ const attrName = matches[i][2];
        if (!$e98c900b2140646b$var$validateAttrName(attrName)) return $e98c900b2140646b$var$getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is an invalid name.", $e98c900b2140646b$var$getPositionFromMatch(matches[i]));
        if (!attrNames.hasOwnProperty(attrName)) //check for duplicate attribute.
        attrNames[attrName] = 1;
        else return $e98c900b2140646b$var$getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is repeated.", $e98c900b2140646b$var$getPositionFromMatch(matches[i]));
    }
    return true;
}
function $e98c900b2140646b$var$validateNumberAmpersand(xmlData, i) {
    let re = /\d/;
    if (xmlData[i] === 'x') {
        i++;
        re = /[\da-fA-F]/;
    }
    for(; i < xmlData.length; i++){
        if (xmlData[i] === ';') return i;
        if (!xmlData[i].match(re)) break;
    }
    return -1;
}
function $e98c900b2140646b$var$validateAmpersand(xmlData, i) {
    // https://www.w3.org/TR/xml/#dt-charref
    i++;
    if (xmlData[i] === ';') return -1;
    if (xmlData[i] === '#') {
        i++;
        return $e98c900b2140646b$var$validateNumberAmpersand(xmlData, i);
    }
    let count = 0;
    for(; i < xmlData.length; i++, count++){
        if (xmlData[i].match(/\w/) && count < 20) continue;
        if (xmlData[i] === ';') break;
        return -1;
    }
    return i;
}
function $e98c900b2140646b$var$getErrorObject(code, message, lineNumber) {
    return {
        err: {
            code: code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
        }
    };
}
function $e98c900b2140646b$var$validateAttrName(attrName) {
    return $d6928b2c57ac5fd1$exports.isName(attrName);
}
// const startsWithXML = /^xml/i;
function $e98c900b2140646b$var$validateTagName(tagname) {
    return $d6928b2c57ac5fd1$exports.isName(tagname) /* && !tagname.match(startsWithXML) */ ;
}
//this function returns the line number for the character at the given index
function $e98c900b2140646b$var$getLineNumberForPosition(xmlData, index) {
    const lines = xmlData.substring(0, index).split(/\r?\n/);
    return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
    };
}
//this function returns the position of the first character of match within attrStr
function $e98c900b2140646b$var$getPositionFromMatch(match) {
    return match.startIndex + match[1].length;
}


//# sourceMappingURL=validator.42174068.js.map
