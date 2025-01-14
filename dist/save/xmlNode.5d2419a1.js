'use strict';
class $b2a0dd5f3e2e34b7$var$XmlNode {
    constructor(tagname){
        this.tagname = tagname;
        this.child = []; //nested tags, text, cdata, comments in order
        this[":@"] = {}; //attributes map
    }
    add(key, val) {
        // this.child.push( {name : key, val: val, isCdata: isCdata });
        if (key === "__proto__") key = "#__proto__";
        this.child.push({
            [key]: val
        });
    }
    addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) this.child.push({
            [node.tagname]: node.child,
            [":@"]: node[":@"]
        });
        else this.child.push({
            [node.tagname]: node.child
        });
    }
}
module.exports = $b2a0dd5f3e2e34b7$var$XmlNode;


//# sourceMappingURL=xmlNode.5d2419a1.js.map
