function $6caabbb02438ff0e$export$aa3ffe13abc35cf8(token) {
    if (token.split(/\./).length === 3) return `bearer ${token}`;
    return `token ${token}`;
}


