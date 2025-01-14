require("./reflection-info.7dce837c.js");
require("./oneof.3fb3327f.js");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;

var $jcCg0 = parcelRequire("jcCg0");
var $0ee1bfa46584508a$exports = {};
$0ee1bfa46584508a$exports = new URL("oneof.3fb3327f.js", "file:" + __filename).toString();


class $7547ce45a213fe67$export$909924fefdf89590 {
    constructor(info){
        var _a;
        this.fields = (_a = info.fields) !== null && _a !== void 0 ? _a : [];
    }
    prepare() {
        if (this.data) return;
        const req = [], known = [], oneofs = [];
        for (let field of this.fields){
            if (field.oneof) {
                if (!oneofs.includes(field.oneof)) {
                    oneofs.push(field.oneof);
                    req.push(field.oneof);
                    known.push(field.oneof);
                }
            } else {
                known.push(field.localName);
                switch(field.kind){
                    case "scalar":
                    case "enum":
                        if (!field.opt || field.repeat) req.push(field.localName);
                        break;
                    case "message":
                        if (field.repeat) req.push(field.localName);
                        break;
                    case "map":
                        req.push(field.localName);
                        break;
                }
            }
        }
        this.data = {
            req: req,
            known: known,
            oneofs: Object.values(oneofs)
        };
    }
    /**
     * Is the argument a valid message as specified by the
     * reflection information?
     *
     * Checks all field types recursively. The `depth`
     * specifies how deep into the structure the check will be.
     *
     * With a depth of 0, only the presence of fields
     * is checked.
     *
     * With a depth of 1 or more, the field types are checked.
     *
     * With a depth of 2 or more, the members of map, repeated
     * and message fields are checked.
     *
     * Message fields will be checked recursively with depth - 1.
     *
     * The number of map entries / repeated values being checked
     * is < depth.
     */ is(message, depth, allowExcessProperties = false) {
        if (depth < 0) return true;
        if (message === null || message === undefined || typeof message != 'object') return false;
        this.prepare();
        let keys = Object.keys(message), data = this.data;
        // if a required field is missing in arg, this cannot be a T
        if (keys.length < data.req.length || data.req.some((n)=>!keys.includes(n))) return false;
        if (!allowExcessProperties) {
            // if the arg contains a key we dont know, this is not a literal T
            if (keys.some((k)=>!data.known.includes(k))) return false;
        }
        // "With a depth of 0, only the presence and absence of fields is checked."
        // "With a depth of 1 or more, the field types are checked."
        if (depth < 1) return true;
        // check oneof group
        for (const name of data.oneofs){
            const group = message[name];
            if (!(0, $0ee1bfa46584508a$exports.isOneofGroup)(group)) return false;
            if (group.oneofKind === undefined) continue;
            const field = this.fields.find((f)=>f.localName === group.oneofKind);
            if (!field) return false; // we found no field, but have a kind, something is wrong
            if (!this.field(group[group.oneofKind], field, allowExcessProperties, depth)) return false;
        }
        // check types
        for (const field of this.fields){
            if (field.oneof !== undefined) continue;
            if (!this.field(message[field.localName], field, allowExcessProperties, depth)) return false;
        }
        return true;
    }
    field(arg, field, allowExcessProperties, depth) {
        let repeated = field.repeat;
        switch(field.kind){
            case "scalar":
                if (arg === undefined) return field.opt;
                if (repeated) return this.scalars(arg, field.T, depth, field.L);
                return this.scalar(arg, field.T, field.L);
            case "enum":
                if (arg === undefined) return field.opt;
                if (repeated) return this.scalars(arg, (0, $jcCg0.ScalarType).INT32, depth);
                return this.scalar(arg, (0, $jcCg0.ScalarType).INT32);
            case "message":
                if (arg === undefined) return true;
                if (repeated) return this.messages(arg, field.T(), allowExcessProperties, depth);
                return this.message(arg, field.T(), allowExcessProperties, depth);
            case "map":
                if (typeof arg != 'object' || arg === null) return false;
                if (depth < 2) return true;
                if (!this.mapKeys(arg, field.K, depth)) return false;
                switch(field.V.kind){
                    case "scalar":
                        return this.scalars(Object.values(arg), field.V.T, depth, field.V.L);
                    case "enum":
                        return this.scalars(Object.values(arg), (0, $jcCg0.ScalarType).INT32, depth);
                    case "message":
                        return this.messages(Object.values(arg), field.V.T(), allowExcessProperties, depth);
                }
                break;
        }
        return true;
    }
    message(arg, type, allowExcessProperties, depth) {
        if (allowExcessProperties) return type.isAssignable(arg, depth);
        return type.is(arg, depth);
    }
    messages(arg, type, allowExcessProperties, depth) {
        if (!Array.isArray(arg)) return false;
        if (depth < 2) return true;
        if (allowExcessProperties) {
            for(let i = 0; i < arg.length && i < depth; i++)if (!type.isAssignable(arg[i], depth - 1)) return false;
        } else {
            for(let i = 0; i < arg.length && i < depth; i++)if (!type.is(arg[i], depth - 1)) return false;
        }
        return true;
    }
    scalar(arg, type, longType) {
        let argType = typeof arg;
        switch(type){
            case (0, $jcCg0.ScalarType).UINT64:
            case (0, $jcCg0.ScalarType).FIXED64:
            case (0, $jcCg0.ScalarType).INT64:
            case (0, $jcCg0.ScalarType).SFIXED64:
            case (0, $jcCg0.ScalarType).SINT64:
                switch(longType){
                    case (0, $jcCg0.LongType).BIGINT:
                        return argType == "bigint";
                    case (0, $jcCg0.LongType).NUMBER:
                        return argType == "number" && !isNaN(arg);
                    default:
                        return argType == "string";
                }
            case (0, $jcCg0.ScalarType).BOOL:
                return argType == 'boolean';
            case (0, $jcCg0.ScalarType).STRING:
                return argType == 'string';
            case (0, $jcCg0.ScalarType).BYTES:
                return arg instanceof Uint8Array;
            case (0, $jcCg0.ScalarType).DOUBLE:
            case (0, $jcCg0.ScalarType).FLOAT:
                return argType == 'number' && !isNaN(arg);
            default:
                // case ScalarType.UINT32:
                // case ScalarType.FIXED32:
                // case ScalarType.INT32:
                // case ScalarType.SINT32:
                // case ScalarType.SFIXED32:
                return argType == 'number' && Number.isInteger(arg);
        }
    }
    scalars(arg, type, depth, longType) {
        if (!Array.isArray(arg)) return false;
        if (depth < 2) return true;
        if (Array.isArray(arg)) {
            for(let i = 0; i < arg.length && i < depth; i++)if (!this.scalar(arg[i], type, longType)) return false;
        }
        return true;
    }
    mapKeys(map, type, depth) {
        let keys = Object.keys(map);
        switch(type){
            case (0, $jcCg0.ScalarType).INT32:
            case (0, $jcCg0.ScalarType).FIXED32:
            case (0, $jcCg0.ScalarType).SFIXED32:
            case (0, $jcCg0.ScalarType).SINT32:
            case (0, $jcCg0.ScalarType).UINT32:
                return this.scalars(keys.slice(0, depth).map((k)=>parseInt(k)), type, depth);
            case (0, $jcCg0.ScalarType).BOOL:
                return this.scalars(keys.slice(0, depth).map((k)=>k == 'true' ? true : k == 'false' ? false : k), type, depth);
            default:
                return this.scalars(keys, type, depth, (0, $jcCg0.LongType).STRING);
        }
    }
}


//# sourceMappingURL=reflection-type-check.cd8ae068.js.map
