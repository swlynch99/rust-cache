const $65f7b06fcf15b85e$var$EOL = "\n";
/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */ function $65f7b06fcf15b85e$var$toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) indentation = $65f7b06fcf15b85e$var$EOL;
    return $65f7b06fcf15b85e$var$arrToStr(jArray, options, "", indentation);
}
function $65f7b06fcf15b85e$var$arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const tagName = $65f7b06fcf15b85e$var$propName(tagObj);
        if (tagName === undefined) continue;
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!$65f7b06fcf15b85e$var$isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = $65f7b06fcf15b85e$var$replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) xmlStr += indentation;
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) xmlStr += indentation;
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = $65f7b06fcf15b85e$var$attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") newIdentation += options.indentBy;
        const attStr = $65f7b06fcf15b85e$var$attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = $65f7b06fcf15b85e$var$arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) xmlStr += tagStart + "/>";
        else if (tagValue && tagValue.endsWith(">")) xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) xmlStr += indentation + options.indentBy + tagValue + indentation;
            else xmlStr += tagValue;
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }
    return xmlStr;
}
function $65f7b06fcf15b85e$var$propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (!obj.hasOwnProperty(key)) continue;
        if (key !== ":@") return key;
    }
}
function $65f7b06fcf15b85e$var$attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) for(let attr in attrMap){
        if (!attrMap.hasOwnProperty(attr)) continue;
        let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
        attrVal = $65f7b06fcf15b85e$var$replaceEntitiesValue(attrVal, options);
        if (attrVal === true && options.suppressBooleanAttributes) attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
        else attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
    }
    return attrStr;
}
function $65f7b06fcf15b85e$var$isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for(let index in options.stopNodes){
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}
function $65f7b06fcf15b85e$var$replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) for(let i = 0; i < options.entities.length; i++){
        const entity = options.entities[i];
        textValue = textValue.replace(entity.regex, entity.val);
    }
    return textValue;
}
module.exports = $65f7b06fcf15b85e$var$toXml;


//# sourceMappingURL=orderedJs2Xml.48616245.js.map
