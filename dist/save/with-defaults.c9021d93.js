require("./fetch-wrapper.d804f84c.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $b77183f52ff35ce4$exports = {};
$b77183f52ff35ce4$exports = new URL("fetch-wrapper.d804f84c.js", "file:" + __filename).toString();


function $7df3d446f22004e9$export$2e2bcd8739ae039(oldEndpoint, newDefaults) {
    const endpoint = oldEndpoint.defaults(newDefaults);
    const newApi = function(route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters);
        if (!endpointOptions.request || !endpointOptions.request.hook) return (0, (/*@__PURE__*/$parcel$interopDefault($b77183f52ff35ce4$exports)))(endpoint.parse(endpointOptions));
        const request = (route2, parameters2)=>{
            return (0, (/*@__PURE__*/$parcel$interopDefault($b77183f52ff35ce4$exports)))(endpoint.parse(endpoint.merge(route2, parameters2)));
        };
        Object.assign(request, {
            endpoint: endpoint,
            defaults: $7df3d446f22004e9$export$2e2bcd8739ae039.bind(null, endpoint)
        });
        return endpointOptions.request.hook(request, endpointOptions);
    };
    return Object.assign(newApi, {
        endpoint: endpoint,
        defaults: $7df3d446f22004e9$export$2e2bcd8739ae039.bind(null, endpoint)
    });
}


