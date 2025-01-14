require("./with-authorization-prefix.e540a8fb.js");

var $a771e07148091d5e$exports = {};
$a771e07148091d5e$exports = new URL("with-authorization-prefix.e540a8fb.js", "file:" + __filename).toString();


async function $d7c79323fa79141d$export$1062a250c78723ea(token, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = (0, $a771e07148091d5e$exports.withAuthorizationPrefix)(token);
    return request(endpoint);
}


//# sourceMappingURL=hook.a48f93d5.js.map
