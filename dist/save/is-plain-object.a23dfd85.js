function $5cff42c64fdf56b6$export$53b83ca8eaab0383(value) {
    if (typeof value !== "object" || value === null) return false;
    if (Object.prototype.toString.call(value) !== "[object Object]") return false;
    const proto = Object.getPrototypeOf(value);
    if (proto === null) return true;
    const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}


//# sourceMappingURL=is-plain-object.a23dfd85.js.map
