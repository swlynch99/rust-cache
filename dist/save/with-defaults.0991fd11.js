require("./fetch-wrapper.ba20b9e5.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $bc1fedee7b4c6274$exports = {};
$bc1fedee7b4c6274$exports = new URL("fetch-wrapper.ba20b9e5.js", "file:" + __filename).toString();


function $aa15c6820ebad9a9$export$2e2bcd8739ae039(oldEndpoint, newDefaults) {
    const endpoint = oldEndpoint.defaults(newDefaults);
    const newApi = function(route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters);
        if (!endpointOptions.request || !endpointOptions.request.hook) return (0, (/*@__PURE__*/$parcel$interopDefault($bc1fedee7b4c6274$exports)))(endpoint.parse(endpointOptions));
        const request = (route2, parameters2)=>{
            return (0, (/*@__PURE__*/$parcel$interopDefault($bc1fedee7b4c6274$exports)))(endpoint.parse(endpoint.merge(route2, parameters2)));
        };
        Object.assign(request, {
            endpoint: endpoint,
            defaults: $aa15c6820ebad9a9$export$2e2bcd8739ae039.bind(null, endpoint)
        });
        return endpointOptions.request.hook(request, endpointOptions);
    };
    return Object.assign(newApi, {
        endpoint: endpoint,
        defaults: $aa15c6820ebad9a9$export$2e2bcd8739ae039.bind(null, endpoint)
    });
}


//# sourceMappingURL=with-defaults.0991fd11.js.map
