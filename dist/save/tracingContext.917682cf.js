// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/** @internal */ const $df1b6f56a6bfde57$export$49bcd6db97664b30 = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace")
};
function $df1b6f56a6bfde57$export$adc0ba9c4c5a984d(options = {}) {
    let context = new $df1b6f56a6bfde57$export$ea437edda9257640(options.parentContext);
    if (options.span) context = context.setValue($df1b6f56a6bfde57$export$49bcd6db97664b30.span, options.span);
    if (options.namespace) context = context.setValue($df1b6f56a6bfde57$export$49bcd6db97664b30.namespace, options.namespace);
    return context;
}
class $df1b6f56a6bfde57$export$ea437edda9257640 {
    constructor(initialContext){
        this._contextMap = initialContext instanceof $df1b6f56a6bfde57$export$ea437edda9257640 ? new Map(initialContext._contextMap) : new Map();
    }
    setValue(key, value) {
        const newContext = new $df1b6f56a6bfde57$export$ea437edda9257640(this);
        newContext._contextMap.set(key, value);
        return newContext;
    }
    getValue(key) {
        return this._contextMap.get(key);
    }
    deleteValue(key) {
        const newContext = new $df1b6f56a6bfde57$export$ea437edda9257640(this);
        newContext._contextMap.delete(key);
        return newContext;
    }
}


