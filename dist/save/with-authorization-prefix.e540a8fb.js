function $1fcdcd63ecbd253f$export$aa3ffe13abc35cf8(token) {
    if (token.split(/\./).length === 3) return `bearer ${token}`;
    return `token ${token}`;
}


//# sourceMappingURL=with-authorization-prefix.e540a8fb.js.map
