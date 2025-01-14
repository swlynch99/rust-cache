// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/** @internal */ const $ff21dda1c652ab71$export$49bcd6db97664b30 = {
    span: Symbol.for("@azure/core-tracing span"),
    namespace: Symbol.for("@azure/core-tracing namespace")
};
function $ff21dda1c652ab71$export$adc0ba9c4c5a984d(options = {}) {
    let context = new $ff21dda1c652ab71$export$ea437edda9257640(options.parentContext);
    if (options.span) context = context.setValue($ff21dda1c652ab71$export$49bcd6db97664b30.span, options.span);
    if (options.namespace) context = context.setValue($ff21dda1c652ab71$export$49bcd6db97664b30.namespace, options.namespace);
    return context;
}
class $ff21dda1c652ab71$export$ea437edda9257640 {
    constructor(initialContext){
        this._contextMap = initialContext instanceof $ff21dda1c652ab71$export$ea437edda9257640 ? new Map(initialContext._contextMap) : new Map();
    }
    setValue(key, value) {
        const newContext = new $ff21dda1c652ab71$export$ea437edda9257640(this);
        newContext._contextMap.set(key, value);
        return newContext;
    }
    getValue(key) {
        return this._contextMap.get(key);
    }
    deleteValue(key) {
        const newContext = new $ff21dda1c652ab71$export$ea437edda9257640(this);
        newContext._contextMap.delete(key);
        return newContext;
    }
}


//# sourceMappingURL=tracingContext.62026703.js.map
