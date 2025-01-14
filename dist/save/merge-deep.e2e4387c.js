require("./is-plain-object.8a9e84d0.js");

var $53d9e7bbc292ce7e$exports = {};
$53d9e7bbc292ce7e$exports = new URL("is-plain-object.8a9e84d0.js", "file:" + __filename).toString();


function $d042aa1308a54b6b$export$dd702b3c8240390c(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach((key)=>{
        if ((0, $53d9e7bbc292ce7e$exports.isPlainObject)(options[key])) {
            if (!(key in defaults)) Object.assign(result, {
                [key]: options[key]
            });
            else result[key] = $d042aa1308a54b6b$export$dd702b3c8240390c(defaults[key], options[key]);
        } else Object.assign(result, {
            [key]: options[key]
        });
    });
    return result;
}


//# sourceMappingURL=merge-deep.e2e4387c.js.map
