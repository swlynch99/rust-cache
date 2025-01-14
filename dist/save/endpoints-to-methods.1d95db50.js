require("./endpoints.a9243427.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $59ad696621200b09$exports = {};
$59ad696621200b09$exports = new URL("endpoints.a9243427.js", "file:" + __filename).toString();


const $966bb4a6b7ce2803$var$endpointMethodsMap = /* @__PURE__ */ new Map();
for (const [scope, endpoints] of Object.entries((0, (/*@__PURE__*/$parcel$interopDefault($59ad696621200b09$exports)))))for (const [methodName, endpoint] of Object.entries(endpoints)){
    const [route, defaults, decorations] = endpoint;
    const [method, url] = route.split(/ /);
    const endpointDefaults = Object.assign({
        method: method,
        url: url
    }, defaults);
    if (!$966bb4a6b7ce2803$var$endpointMethodsMap.has(scope)) $966bb4a6b7ce2803$var$endpointMethodsMap.set(scope, /* @__PURE__ */ new Map());
    $966bb4a6b7ce2803$var$endpointMethodsMap.get(scope).set(methodName, {
        scope: scope,
        methodName: methodName,
        endpointDefaults: endpointDefaults,
        decorations: decorations
    });
}
const $966bb4a6b7ce2803$var$handler = {
    has ({ scope: scope }, methodName) {
        return $966bb4a6b7ce2803$var$endpointMethodsMap.get(scope).has(methodName);
    },
    getOwnPropertyDescriptor (target, methodName) {
        return {
            value: this.get(target, methodName),
            // ensures method is in the cache
            configurable: true,
            writable: true,
            enumerable: true
        };
    },
    defineProperty (target, methodName, descriptor) {
        Object.defineProperty(target.cache, methodName, descriptor);
        return true;
    },
    deleteProperty (target, methodName) {
        delete target.cache[methodName];
        return true;
    },
    ownKeys ({ scope: scope }) {
        return [
            ...$966bb4a6b7ce2803$var$endpointMethodsMap.get(scope).keys()
        ];
    },
    set (target, methodName, value) {
        return target.cache[methodName] = value;
    },
    get ({ octokit: octokit, scope: scope, cache: cache }, methodName) {
        if (cache[methodName]) return cache[methodName];
        const method = $966bb4a6b7ce2803$var$endpointMethodsMap.get(scope).get(methodName);
        if (!method) return void 0;
        const { endpointDefaults: endpointDefaults, decorations: decorations } = method;
        if (decorations) cache[methodName] = $966bb4a6b7ce2803$var$decorate(octokit, scope, methodName, endpointDefaults, decorations);
        else cache[methodName] = octokit.request.defaults(endpointDefaults);
        return cache[methodName];
    }
};
function $966bb4a6b7ce2803$export$3b214893ba7a03d2(octokit) {
    const newMethods = {};
    for (const scope of $966bb4a6b7ce2803$var$endpointMethodsMap.keys())newMethods[scope] = new Proxy({
        octokit: octokit,
        scope: scope,
        cache: {}
    }, $966bb4a6b7ce2803$var$handler);
    return newMethods;
}
function $966bb4a6b7ce2803$var$decorate(octokit, scope, methodName, defaults, decorations) {
    const requestWithDefaults = octokit.request.defaults(defaults);
    function withDecorations(...args) {
        let options = requestWithDefaults.endpoint.merge(...args);
        if (decorations.mapToData) {
            options = Object.assign({}, options, {
                data: options[decorations.mapToData],
                [decorations.mapToData]: void 0
            });
            return requestWithDefaults(options);
        }
        if (decorations.renamed) {
            const [newScope, newMethodName] = decorations.renamed;
            octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
        }
        if (decorations.deprecated) octokit.log.warn(decorations.deprecated);
        if (decorations.renamedParameters) {
            const options2 = requestWithDefaults.endpoint.merge(...args);
            for (const [name, alias] of Object.entries(decorations.renamedParameters))if (name in options2) {
                octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);
                if (!(alias in options2)) options2[alias] = options2[name];
                delete options2[name];
            }
            return requestWithDefaults(options2);
        }
        return requestWithDefaults(...args);
    }
    return Object.assign(withDecorations, requestWithDefaults);
}


