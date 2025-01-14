
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
parcelRegister("9miFD", function(module, exports) {
'use strict';
function $6d04a6b04e857d73$var$_process(v, mod) {
    var i;
    var r;
    if (typeof mod === 'function') {
        r = mod(v);
        if (r !== undefined) v = r;
    } else if (Array.isArray(mod)) for(i = 0; i < mod.length; i++){
        r = mod[i](v);
        if (r !== undefined) v = r;
    }
    return v;
}
function $6d04a6b04e857d73$var$parseKey(key, val) {
    // detect negative index notation
    if (key[0] === '-' && Array.isArray(val) && /^-\d+$/.test(key)) return val.length + parseInt(key, 10);
    return key;
}
function $6d04a6b04e857d73$var$isIndex(k) {
    return /^\d+$/.test(k);
}
function $6d04a6b04e857d73$var$isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
function $6d04a6b04e857d73$var$isArrayOrObject(val) {
    return Object(val) === val;
}
function $6d04a6b04e857d73$var$isEmptyObject(val) {
    return Object.keys(val).length === 0;
}
var $6d04a6b04e857d73$var$blacklist = [
    '__proto__',
    'prototype',
    'constructor'
];
var $6d04a6b04e857d73$var$blacklistFilter = function(part) {
    return $6d04a6b04e857d73$var$blacklist.indexOf(part) === -1;
};
function $6d04a6b04e857d73$var$parsePath(path, sep) {
    if (path.indexOf('[') >= 0) path = path.replace(/\[/g, sep).replace(/]/g, '');
    var parts = path.split(sep);
    var check = parts.filter($6d04a6b04e857d73$var$blacklistFilter);
    if (check.length !== parts.length) throw Error('Refusing to update blacklisted property ' + path);
    return parts;
}
var $6d04a6b04e857d73$var$hasOwnProperty = Object.prototype.hasOwnProperty;
function $6d04a6b04e857d73$var$DotObject(separator, override, useArray, useBrackets) {
    if (!(this instanceof $6d04a6b04e857d73$var$DotObject)) return new $6d04a6b04e857d73$var$DotObject(separator, override, useArray, useBrackets);
    if (typeof override === 'undefined') override = false;
    if (typeof useArray === 'undefined') useArray = true;
    if (typeof useBrackets === 'undefined') useBrackets = true;
    this.separator = separator || '.';
    this.override = override;
    this.useArray = useArray;
    this.useBrackets = useBrackets;
    this.keepArray = false;
    // contains touched arrays
    this.cleanup = [];
}
var $6d04a6b04e857d73$var$dotDefault = new $6d04a6b04e857d73$var$DotObject('.', false, true, true);
function $6d04a6b04e857d73$var$wrap(method) {
    return function() {
        return $6d04a6b04e857d73$var$dotDefault[method].apply($6d04a6b04e857d73$var$dotDefault, arguments);
    };
}
$6d04a6b04e857d73$var$DotObject.prototype._fill = function(a, obj, v, mod) {
    var k = a.shift();
    if (a.length > 0) {
        obj[k] = obj[k] || (this.useArray && $6d04a6b04e857d73$var$isIndex(a[0]) ? [] : {});
        if (!$6d04a6b04e857d73$var$isArrayOrObject(obj[k])) {
            if (this.override) obj[k] = {};
            else {
                if (!($6d04a6b04e857d73$var$isArrayOrObject(v) && $6d04a6b04e857d73$var$isEmptyObject(v))) throw new Error('Trying to redefine `' + k + '` which is a ' + typeof obj[k]);
                return;
            }
        }
        this._fill(a, obj[k], v, mod);
    } else {
        if (!this.override && $6d04a6b04e857d73$var$isArrayOrObject(obj[k]) && !$6d04a6b04e857d73$var$isEmptyObject(obj[k])) {
            if (!($6d04a6b04e857d73$var$isArrayOrObject(v) && $6d04a6b04e857d73$var$isEmptyObject(v))) throw new Error("Trying to redefine non-empty obj['" + k + "']");
            return;
        }
        obj[k] = $6d04a6b04e857d73$var$_process(v, mod);
    }
};
/**
 *
 * Converts an object with dotted-key/value pairs to it's expanded version
 *
 * Optionally transformed by a set of modifiers.
 *
 * Usage:
 *
 *   var row = {
 *     'nr': 200,
 *     'doc.name': '  My Document  '
 *   }
 *
 *   var mods = {
 *     'doc.name': [_s.trim, _s.underscored]
 *   }
 *
 *   dot.object(row, mods)
 *
 * @param {Object} obj
 * @param {Object} mods
 */ $6d04a6b04e857d73$var$DotObject.prototype.object = function(obj, mods) {
    var self = this;
    Object.keys(obj).forEach(function(k) {
        var mod = mods === undefined ? null : mods[k];
        // normalize array notation.
        var ok = $6d04a6b04e857d73$var$parsePath(k, self.separator).join(self.separator);
        if (ok.indexOf(self.separator) !== -1) {
            self._fill(ok.split(self.separator), obj, obj[k], mod);
            delete obj[k];
        } else obj[k] = $6d04a6b04e857d73$var$_process(obj[k], mod);
    });
    return obj;
};
/**
 * @param {String} path dotted path
 * @param {String} v value to be set
 * @param {Object} obj object to be modified
 * @param {Function|Array} mod optional modifier
 */ $6d04a6b04e857d73$var$DotObject.prototype.str = function(path, v, obj, mod) {
    var ok = $6d04a6b04e857d73$var$parsePath(path, this.separator).join(this.separator);
    if (path.indexOf(this.separator) !== -1) this._fill(ok.split(this.separator), obj, v, mod);
    else obj[path] = $6d04a6b04e857d73$var$_process(v, mod);
    return obj;
};
/**
 *
 * Pick a value from an object using dot notation.
 *
 * Optionally remove the value
 *
 * @param {String} path
 * @param {Object} obj
 * @param {Boolean} remove
 */ $6d04a6b04e857d73$var$DotObject.prototype.pick = function(path, obj, remove, reindexArray) {
    var i;
    var keys;
    var val;
    var key;
    var cp;
    keys = $6d04a6b04e857d73$var$parsePath(path, this.separator);
    for(i = 0; i < keys.length; i++){
        key = $6d04a6b04e857d73$var$parseKey(keys[i], obj);
        if (obj && typeof obj === 'object' && key in obj) {
            if (i === keys.length - 1) {
                if (remove) {
                    val = obj[key];
                    if (reindexArray && Array.isArray(obj)) obj.splice(key, 1);
                    else delete obj[key];
                    if (Array.isArray(obj)) {
                        cp = keys.slice(0, -1).join('.');
                        if (this.cleanup.indexOf(cp) === -1) this.cleanup.push(cp);
                    }
                    return val;
                } else return obj[key];
            } else obj = obj[key];
        } else return undefined;
    }
    if (remove && Array.isArray(obj)) obj = obj.filter(function(n) {
        return n !== undefined;
    });
    return obj;
};
/**
 *
 * Delete value from an object using dot notation.
 *
 * @param {String} path
 * @param {Object} obj
 * @return {any} The removed value
 */ $6d04a6b04e857d73$var$DotObject.prototype.delete = function(path, obj) {
    return this.remove(path, obj, true);
};
/**
 *
 * Remove value from an object using dot notation.
 *
 * Will remove multiple items if path is an array.
 * In this case array indexes will be retained until all
 * removals have been processed.
 *
 * Use dot.delete() to automatically  re-index arrays.
 *
 * @param {String|Array<String>} path
 * @param {Object} obj
 * @param {Boolean} reindexArray
 * @return {any} The removed value
 */ $6d04a6b04e857d73$var$DotObject.prototype.remove = function(path, obj, reindexArray) {
    var i;
    this.cleanup = [];
    if (Array.isArray(path)) {
        for(i = 0; i < path.length; i++)this.pick(path[i], obj, true, reindexArray);
        if (!reindexArray) this._cleanup(obj);
        return obj;
    } else return this.pick(path, obj, true, reindexArray);
};
$6d04a6b04e857d73$var$DotObject.prototype._cleanup = function(obj) {
    var ret;
    var i;
    var keys;
    var root;
    if (this.cleanup.length) {
        for(i = 0; i < this.cleanup.length; i++){
            keys = this.cleanup[i].split('.');
            root = keys.splice(0, -1).join('.');
            ret = root ? this.pick(root, obj) : obj;
            ret = ret[keys[0]].filter(function(v) {
                return v !== undefined;
            });
            this.set(this.cleanup[i], ret, obj);
        }
        this.cleanup = [];
    }
};
/**
 * Alias method  for `dot.remove`
 *
 * Note: this is not an alias for dot.delete()
 *
 * @param {String|Array<String>} path
 * @param {Object} obj
 * @param {Boolean} reindexArray
 * @return {any} The removed value
 */ $6d04a6b04e857d73$var$DotObject.prototype.del = $6d04a6b04e857d73$var$DotObject.prototype.remove;
/**
 *
 * Move a property from one place to the other.
 *
 * If the source path does not exist (undefined)
 * the target property will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */ $6d04a6b04e857d73$var$DotObject.prototype.move = function(source, target, obj, mods, merge) {
    if (typeof mods === 'function' || Array.isArray(mods)) this.set(target, $6d04a6b04e857d73$var$_process(this.pick(source, obj, true), mods), obj, merge);
    else {
        merge = mods;
        this.set(target, this.pick(source, obj, true), obj, merge);
    }
    return obj;
};
/**
 *
 * Transfer a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */ $6d04a6b04e857d73$var$DotObject.prototype.transfer = function(source, target, obj1, obj2, mods, merge) {
    if (typeof mods === 'function' || Array.isArray(mods)) this.set(target, $6d04a6b04e857d73$var$_process(this.pick(source, obj1, true), mods), obj2, merge);
    else {
        merge = mods;
        this.set(target, this.pick(source, obj1, true), obj2, merge);
    }
    return obj2;
};
/**
 *
 * Copy a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Function|Array} mods
 * @param {Boolean} merge
 */ $6d04a6b04e857d73$var$DotObject.prototype.copy = function(source, target, obj1, obj2, mods, merge) {
    if (typeof mods === 'function' || Array.isArray(mods)) this.set(target, $6d04a6b04e857d73$var$_process(// clone what is picked
    JSON.parse(JSON.stringify(this.pick(source, obj1, false))), mods), obj2, merge);
    else {
        merge = mods;
        this.set(target, this.pick(source, obj1, false), obj2, merge);
    }
    return obj2;
};
/**
 *
 * Set a property on an object using dot notation.
 *
 * @param {String} path
 * @param {any} val
 * @param {Object} obj
 * @param {Boolean} merge
 */ $6d04a6b04e857d73$var$DotObject.prototype.set = function(path, val, obj, merge) {
    var i;
    var k;
    var keys;
    var key;
    // Do not operate if the value is undefined.
    if (typeof val === 'undefined') return obj;
    keys = $6d04a6b04e857d73$var$parsePath(path, this.separator);
    for(i = 0; i < keys.length; i++){
        key = keys[i];
        if (i === keys.length - 1) {
            if (merge && $6d04a6b04e857d73$var$isObject(val) && $6d04a6b04e857d73$var$isObject(obj[key])) {
                for(k in val)if ($6d04a6b04e857d73$var$hasOwnProperty.call(val, k)) obj[key][k] = val[k];
            } else if (merge && Array.isArray(obj[key]) && Array.isArray(val)) for(var j = 0; j < val.length; j++)obj[keys[i]].push(val[j]);
            else obj[key] = val;
        } else if (// force the value to be an object
        !$6d04a6b04e857d73$var$hasOwnProperty.call(obj, key) || !$6d04a6b04e857d73$var$isObject(obj[key]) && !Array.isArray(obj[key])) {
            // initialize as array if next key is numeric
            if (/^\d+$/.test(keys[i + 1])) obj[key] = [];
            else obj[key] = {};
        }
        obj = obj[key];
    }
    return obj;
};
/**
 *
 * Transform an object
 *
 * Usage:
 *
 *   var obj = {
 *     "id": 1,
 *    "some": {
 *      "thing": "else"
 *    }
 *   }
 *
 *   var transform = {
 *     "id": "nr",
 *    "some.thing": "name"
 *   }
 *
 *   var tgt = dot.transform(transform, obj)
 *
 * @param {Object} recipe Transform recipe
 * @param {Object} obj Object to be transformed
 * @param {Array} mods modifiers for the target
 */ $6d04a6b04e857d73$var$DotObject.prototype.transform = function(recipe, obj, tgt) {
    obj = obj || {};
    tgt = tgt || {};
    Object.keys(recipe).forEach((function(key) {
        this.set(recipe[key], this.pick(key, obj), tgt);
    }).bind(this));
    return tgt;
};
/**
 *
 * Convert object to dotted-key/value pair
 *
 * Usage:
 *
 *   var tgt = dot.dot(obj)
 *
 *   or
 *
 *   var tgt = {}
 *   dot.dot(obj, tgt)
 *
 * @param {Object} obj source object
 * @param {Object} tgt target object
 * @param {Array} path path array (internal)
 */ $6d04a6b04e857d73$var$DotObject.prototype.dot = function(obj, tgt, path) {
    tgt = tgt || {};
    path = path || [];
    var isArray = Array.isArray(obj);
    Object.keys(obj).forEach((function(key) {
        var index = isArray && this.useBrackets ? '[' + key + ']' : key;
        if ($6d04a6b04e857d73$var$isArrayOrObject(obj[key]) && ($6d04a6b04e857d73$var$isObject(obj[key]) && !$6d04a6b04e857d73$var$isEmptyObject(obj[key]) || Array.isArray(obj[key]) && !this.keepArray && obj[key].length !== 0)) {
            if (isArray && this.useBrackets) {
                var previousKey = path[path.length - 1] || '';
                return this.dot(obj[key], tgt, path.slice(0, -1).concat(previousKey + index));
            } else return this.dot(obj[key], tgt, path.concat(index));
        } else if (isArray && this.useBrackets) tgt[path.join(this.separator).concat('[' + key + ']')] = obj[key];
        else tgt[path.concat(index).join(this.separator)] = obj[key];
    }).bind(this));
    return tgt;
};
$6d04a6b04e857d73$var$DotObject.pick = $6d04a6b04e857d73$var$wrap('pick');
$6d04a6b04e857d73$var$DotObject.move = $6d04a6b04e857d73$var$wrap('move');
$6d04a6b04e857d73$var$DotObject.transfer = $6d04a6b04e857d73$var$wrap('transfer');
$6d04a6b04e857d73$var$DotObject.transform = $6d04a6b04e857d73$var$wrap('transform');
$6d04a6b04e857d73$var$DotObject.copy = $6d04a6b04e857d73$var$wrap('copy');
$6d04a6b04e857d73$var$DotObject.object = $6d04a6b04e857d73$var$wrap('object');
$6d04a6b04e857d73$var$DotObject.str = $6d04a6b04e857d73$var$wrap('str');
$6d04a6b04e857d73$var$DotObject.set = $6d04a6b04e857d73$var$wrap('set');
$6d04a6b04e857d73$var$DotObject.delete = $6d04a6b04e857d73$var$wrap('delete');
$6d04a6b04e857d73$var$DotObject.del = $6d04a6b04e857d73$var$DotObject.remove = $6d04a6b04e857d73$var$wrap('remove');
$6d04a6b04e857d73$var$DotObject.dot = $6d04a6b04e857d73$var$wrap('dot');
[
    'override',
    'overwrite'
].forEach(function(prop) {
    Object.defineProperty($6d04a6b04e857d73$var$DotObject, prop, {
        get: function() {
            return $6d04a6b04e857d73$var$dotDefault.override;
        },
        set: function(val) {
            $6d04a6b04e857d73$var$dotDefault.override = !!val;
        }
    });
});
[
    'useArray',
    'keepArray',
    'useBrackets'
].forEach(function(prop) {
    Object.defineProperty($6d04a6b04e857d73$var$DotObject, prop, {
        get: function() {
            return $6d04a6b04e857d73$var$dotDefault[prop];
        },
        set: function(val) {
            $6d04a6b04e857d73$var$dotDefault[prop] = val;
        }
    });
});
$6d04a6b04e857d73$var$DotObject._process = $6d04a6b04e857d73$var$_process;
module.exports = $6d04a6b04e857d73$var$DotObject;

});


//# sourceMappingURL=dot-object.59822c15.js.map
