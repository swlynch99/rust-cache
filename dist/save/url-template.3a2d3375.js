function $8984629fd678510b$var$encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
        if (!/%[0-9A-Fa-f]/.test(part)) part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
        return part;
    }).join("");
}
function $8984629fd678510b$var$encodeUnreserved(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
function $8984629fd678510b$var$encodeValue(operator, value, key) {
    value = operator === "+" || operator === "#" ? $8984629fd678510b$var$encodeReserved(value) : $8984629fd678510b$var$encodeUnreserved(value);
    if (key) return $8984629fd678510b$var$encodeUnreserved(key) + "=" + value;
    else return value;
}
function $8984629fd678510b$var$isDefined(value) {
    return value !== void 0 && value !== null;
}
function $8984629fd678510b$var$isKeyOperator(operator) {
    return operator === ";" || operator === "&" || operator === "?";
}
function $8984629fd678510b$var$getValues(context, operator, key, modifier) {
    var value = context[key], result = [];
    if ($8984629fd678510b$var$isDefined(value) && value !== "") {
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            value = value.toString();
            if (modifier && modifier !== "*") value = value.substring(0, parseInt(modifier, 10));
            result.push($8984629fd678510b$var$encodeValue(operator, value, $8984629fd678510b$var$isKeyOperator(operator) ? key : ""));
        } else if (modifier === "*") {
            if (Array.isArray(value)) value.filter($8984629fd678510b$var$isDefined).forEach(function(value2) {
                result.push($8984629fd678510b$var$encodeValue(operator, value2, $8984629fd678510b$var$isKeyOperator(operator) ? key : ""));
            });
            else Object.keys(value).forEach(function(k) {
                if ($8984629fd678510b$var$isDefined(value[k])) result.push($8984629fd678510b$var$encodeValue(operator, value[k], k));
            });
        } else {
            const tmp = [];
            if (Array.isArray(value)) value.filter($8984629fd678510b$var$isDefined).forEach(function(value2) {
                tmp.push($8984629fd678510b$var$encodeValue(operator, value2));
            });
            else Object.keys(value).forEach(function(k) {
                if ($8984629fd678510b$var$isDefined(value[k])) {
                    tmp.push($8984629fd678510b$var$encodeUnreserved(k));
                    tmp.push($8984629fd678510b$var$encodeValue(operator, value[k].toString()));
                }
            });
            if ($8984629fd678510b$var$isKeyOperator(operator)) result.push($8984629fd678510b$var$encodeUnreserved(key) + "=" + tmp.join(","));
            else if (tmp.length !== 0) result.push(tmp.join(","));
        }
    } else {
        if (operator === ";") {
            if ($8984629fd678510b$var$isDefined(value)) result.push($8984629fd678510b$var$encodeUnreserved(key));
        } else if (value === "" && (operator === "&" || operator === "?")) result.push($8984629fd678510b$var$encodeUnreserved(key) + "=");
        else if (value === "") result.push("");
    }
    return result;
}
function $8984629fd678510b$export$7a5253c0f62e0150(template) {
    return {
        expand: $8984629fd678510b$var$expand.bind(null, template)
    };
}
function $8984629fd678510b$var$expand(template, context) {
    var operators = [
        "+",
        "#",
        ".",
        "/",
        ";",
        "?",
        "&"
    ];
    template = template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
        if (expression) {
            let operator = "";
            const values = [];
            if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0);
                expression = expression.substr(1);
            }
            expression.split(/,/g).forEach(function(variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                values.push($8984629fd678510b$var$getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });
            if (operator && operator !== "+") {
                var separator = ",";
                if (operator === "?") separator = "&";
                else if (operator !== "#") separator = operator;
                return (values.length !== 0 ? operator : "") + values.join(separator);
            } else return values.join(",");
        } else return $8984629fd678510b$var$encodeReserved(literal);
    });
    if (template === "/") return template;
    else return template.replace(/\/$/, "");
}


//# sourceMappingURL=url-template.3a2d3375.js.map
