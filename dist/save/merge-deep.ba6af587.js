require("./is-plain-object.6f3dc538.js");

var $4496f073ded51b3b$exports = {};
$4496f073ded51b3b$exports = new URL("is-plain-object.6f3dc538.js", "file:" + __filename).toString();


function $3dc8814298d234a2$export$dd702b3c8240390c(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach((key)=>{
        if ((0, $4496f073ded51b3b$exports.isPlainObject)(options[key])) {
            if (!(key in defaults)) Object.assign(result, {
                [key]: options[key]
            });
            else result[key] = $3dc8814298d234a2$export$dd702b3c8240390c(defaults[key], options[key]);
        } else Object.assign(result, {
            [key]: options[key]
        });
    });
    return result;
}


