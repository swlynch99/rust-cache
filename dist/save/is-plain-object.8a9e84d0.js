function $023e6512d344ad5e$export$53b83ca8eaab0383(value) {
    if (typeof value !== "object" || value === null) return false;
    if (Object.prototype.toString.call(value) !== "[object Object]") return false;
    const proto = Object.getPrototypeOf(value);
    if (proto === null) return true;
    const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}


//# sourceMappingURL=is-plain-object.8a9e84d0.js.map
