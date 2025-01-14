require("./with-authorization-prefix.4f582b10.js");

var $9c21c696f857a960$exports = {};
$9c21c696f857a960$exports = new URL("with-authorization-prefix.4f582b10.js", "file:" + __filename).toString();


async function $e989fc5d5edd2972$export$1062a250c78723ea(token, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = (0, $9c21c696f857a960$exports.withAuthorizationPrefix)(token);
    return request(endpoint);
}


