function $e0934ef885c3bf12$export$35931de892707090(url, parameters) {
    const separator = /\?/.test(url) ? "&" : "?";
    const names = Object.keys(parameters);
    if (names.length === 0) return url;
    return url + separator + names.map((name)=>{
        if (name === "q") return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
        return `${name}=${encodeURIComponent(parameters[name])}`;
    }).join("&");
}


//# sourceMappingURL=add-query-parameters.3a350412.js.map
