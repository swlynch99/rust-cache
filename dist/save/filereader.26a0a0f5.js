require("./util.57d4322a.js");
require("./symbols.ac8e74db.js");
require("./webidl.107e124b.js");
require("./util.c7a5ec55.js");


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
parcelRegister("fC0Ks", function(module, exports) {
'use strict';

var $329Bn = parcelRequire("329Bn");
var $b5dafc381df0ba60$require$staticPropertyDescriptors = $329Bn.staticPropertyDescriptors;
var $b5dafc381df0ba60$require$readOperation = $329Bn.readOperation;
var $b5dafc381df0ba60$require$fireAProgressEvent = $329Bn.fireAProgressEvent;

var $hsZLk = parcelRequire("hsZLk");
var $b5dafc381df0ba60$require$kState = $hsZLk.kState;
var $b5dafc381df0ba60$require$kError = $hsZLk.kError;
var $b5dafc381df0ba60$require$kResult = $hsZLk.kResult;
var $b5dafc381df0ba60$require$kEvents = $hsZLk.kEvents;
var $b5dafc381df0ba60$require$kAborted = $hsZLk.kAborted;

var $cpX4f = parcelRequire("cpX4f");
var $b5dafc381df0ba60$require$webidl = $cpX4f.webidl;

var $iiSZx = parcelRequire("iiSZx");
var $b5dafc381df0ba60$require$kEnumerableProperty = $iiSZx.kEnumerableProperty;
class $b5dafc381df0ba60$var$FileReader extends EventTarget {
    constructor(){
        super();
        this[$b5dafc381df0ba60$require$kState] = 'empty';
        this[$b5dafc381df0ba60$require$kResult] = null;
        this[$b5dafc381df0ba60$require$kError] = null;
        this[$b5dafc381df0ba60$require$kEvents] = {
            loadend: null,
            error: null,
            abort: null,
            load: null,
            progress: null,
            loadstart: null
        };
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dfn-readAsArrayBuffer
   * @param {import('buffer').Blob} blob
   */ readAsArrayBuffer(blob) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        $b5dafc381df0ba60$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsArrayBuffer'
        });
        blob = $b5dafc381df0ba60$require$webidl.converters.Blob(blob, {
            strict: false
        });
        // The readAsArrayBuffer(blob) method, when invoked,
        // must initiate a read operation for blob with ArrayBuffer.
        $b5dafc381df0ba60$require$readOperation(this, blob, 'ArrayBuffer');
    }
    /**
   * @see https://w3c.github.io/FileAPI/#readAsBinaryString
   * @param {import('buffer').Blob} blob
   */ readAsBinaryString(blob) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        $b5dafc381df0ba60$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsBinaryString'
        });
        blob = $b5dafc381df0ba60$require$webidl.converters.Blob(blob, {
            strict: false
        });
        // The readAsBinaryString(blob) method, when invoked,
        // must initiate a read operation for blob with BinaryString.
        $b5dafc381df0ba60$require$readOperation(this, blob, 'BinaryString');
    }
    /**
   * @see https://w3c.github.io/FileAPI/#readAsDataText
   * @param {import('buffer').Blob} blob
   * @param {string?} encoding
   */ readAsText(blob, encoding) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        $b5dafc381df0ba60$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsText'
        });
        blob = $b5dafc381df0ba60$require$webidl.converters.Blob(blob, {
            strict: false
        });
        if (encoding !== undefined) encoding = $b5dafc381df0ba60$require$webidl.converters.DOMString(encoding);
        // The readAsText(blob, encoding) method, when invoked,
        // must initiate a read operation for blob with Text and encoding.
        $b5dafc381df0ba60$require$readOperation(this, blob, 'Text', encoding);
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dfn-readAsDataURL
   * @param {import('buffer').Blob} blob
   */ readAsDataURL(blob) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        $b5dafc381df0ba60$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsDataURL'
        });
        blob = $b5dafc381df0ba60$require$webidl.converters.Blob(blob, {
            strict: false
        });
        // The readAsDataURL(blob) method, when invoked, must
        // initiate a read operation for blob with DataURL.
        $b5dafc381df0ba60$require$readOperation(this, blob, 'DataURL');
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dfn-abort
   */ abort() {
        // 1. If this's state is "empty" or if this's state is
        //    "done" set this's result to null and terminate
        //    this algorithm.
        if (this[$b5dafc381df0ba60$require$kState] === 'empty' || this[$b5dafc381df0ba60$require$kState] === 'done') {
            this[$b5dafc381df0ba60$require$kResult] = null;
            return;
        }
        // 2. If this's state is "loading" set this's state to
        //    "done" and set this's result to null.
        if (this[$b5dafc381df0ba60$require$kState] === 'loading') {
            this[$b5dafc381df0ba60$require$kState] = 'done';
            this[$b5dafc381df0ba60$require$kResult] = null;
        }
        // 3. If there are any tasks from this on the file reading
        //    task source in an affiliated task queue, then remove
        //    those tasks from that task queue.
        this[$b5dafc381df0ba60$require$kAborted] = true;
        // 4. Terminate the algorithm for the read method being processed.
        // TODO
        // 5. Fire a progress event called abort at this.
        $b5dafc381df0ba60$require$fireAProgressEvent('abort', this);
        // 6. If this's state is not "loading", fire a progress
        //    event called loadend at this.
        if (this[$b5dafc381df0ba60$require$kState] !== 'loading') $b5dafc381df0ba60$require$fireAProgressEvent('loadend', this);
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dom-filereader-readystate
   */ get readyState() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        switch(this[$b5dafc381df0ba60$require$kState]){
            case 'empty':
                return this.EMPTY;
            case 'loading':
                return this.LOADING;
            case 'done':
                return this.DONE;
        }
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dom-filereader-result
   */ get result() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        // The result attribute’s getter, when invoked, must return
        // this's result.
        return this[$b5dafc381df0ba60$require$kResult];
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dom-filereader-error
   */ get error() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        // The error attribute’s getter, when invoked, must return
        // this's error.
        return this[$b5dafc381df0ba60$require$kError];
    }
    get onloadend() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        return this[$b5dafc381df0ba60$require$kEvents].loadend;
    }
    set onloadend(fn) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        if (this[$b5dafc381df0ba60$require$kEvents].loadend) this.removeEventListener('loadend', this[$b5dafc381df0ba60$require$kEvents].loadend);
        if (typeof fn === 'function') {
            this[$b5dafc381df0ba60$require$kEvents].loadend = fn;
            this.addEventListener('loadend', fn);
        } else this[$b5dafc381df0ba60$require$kEvents].loadend = null;
    }
    get onerror() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        return this[$b5dafc381df0ba60$require$kEvents].error;
    }
    set onerror(fn) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        if (this[$b5dafc381df0ba60$require$kEvents].error) this.removeEventListener('error', this[$b5dafc381df0ba60$require$kEvents].error);
        if (typeof fn === 'function') {
            this[$b5dafc381df0ba60$require$kEvents].error = fn;
            this.addEventListener('error', fn);
        } else this[$b5dafc381df0ba60$require$kEvents].error = null;
    }
    get onloadstart() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        return this[$b5dafc381df0ba60$require$kEvents].loadstart;
    }
    set onloadstart(fn) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        if (this[$b5dafc381df0ba60$require$kEvents].loadstart) this.removeEventListener('loadstart', this[$b5dafc381df0ba60$require$kEvents].loadstart);
        if (typeof fn === 'function') {
            this[$b5dafc381df0ba60$require$kEvents].loadstart = fn;
            this.addEventListener('loadstart', fn);
        } else this[$b5dafc381df0ba60$require$kEvents].loadstart = null;
    }
    get onprogress() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        return this[$b5dafc381df0ba60$require$kEvents].progress;
    }
    set onprogress(fn) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        if (this[$b5dafc381df0ba60$require$kEvents].progress) this.removeEventListener('progress', this[$b5dafc381df0ba60$require$kEvents].progress);
        if (typeof fn === 'function') {
            this[$b5dafc381df0ba60$require$kEvents].progress = fn;
            this.addEventListener('progress', fn);
        } else this[$b5dafc381df0ba60$require$kEvents].progress = null;
    }
    get onload() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        return this[$b5dafc381df0ba60$require$kEvents].load;
    }
    set onload(fn) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        if (this[$b5dafc381df0ba60$require$kEvents].load) this.removeEventListener('load', this[$b5dafc381df0ba60$require$kEvents].load);
        if (typeof fn === 'function') {
            this[$b5dafc381df0ba60$require$kEvents].load = fn;
            this.addEventListener('load', fn);
        } else this[$b5dafc381df0ba60$require$kEvents].load = null;
    }
    get onabort() {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        return this[$b5dafc381df0ba60$require$kEvents].abort;
    }
    set onabort(fn) {
        $b5dafc381df0ba60$require$webidl.brandCheck(this, $b5dafc381df0ba60$var$FileReader);
        if (this[$b5dafc381df0ba60$require$kEvents].abort) this.removeEventListener('abort', this[$b5dafc381df0ba60$require$kEvents].abort);
        if (typeof fn === 'function') {
            this[$b5dafc381df0ba60$require$kEvents].abort = fn;
            this.addEventListener('abort', fn);
        } else this[$b5dafc381df0ba60$require$kEvents].abort = null;
    }
}
// https://w3c.github.io/FileAPI/#dom-filereader-empty
$b5dafc381df0ba60$var$FileReader.EMPTY = $b5dafc381df0ba60$var$FileReader.prototype.EMPTY = 0;
// https://w3c.github.io/FileAPI/#dom-filereader-loading
$b5dafc381df0ba60$var$FileReader.LOADING = $b5dafc381df0ba60$var$FileReader.prototype.LOADING = 1;
// https://w3c.github.io/FileAPI/#dom-filereader-done
$b5dafc381df0ba60$var$FileReader.DONE = $b5dafc381df0ba60$var$FileReader.prototype.DONE = 2;
Object.defineProperties($b5dafc381df0ba60$var$FileReader.prototype, {
    EMPTY: $b5dafc381df0ba60$require$staticPropertyDescriptors,
    LOADING: $b5dafc381df0ba60$require$staticPropertyDescriptors,
    DONE: $b5dafc381df0ba60$require$staticPropertyDescriptors,
    readAsArrayBuffer: $b5dafc381df0ba60$require$kEnumerableProperty,
    readAsBinaryString: $b5dafc381df0ba60$require$kEnumerableProperty,
    readAsText: $b5dafc381df0ba60$require$kEnumerableProperty,
    readAsDataURL: $b5dafc381df0ba60$require$kEnumerableProperty,
    abort: $b5dafc381df0ba60$require$kEnumerableProperty,
    readyState: $b5dafc381df0ba60$require$kEnumerableProperty,
    result: $b5dafc381df0ba60$require$kEnumerableProperty,
    error: $b5dafc381df0ba60$require$kEnumerableProperty,
    onloadstart: $b5dafc381df0ba60$require$kEnumerableProperty,
    onprogress: $b5dafc381df0ba60$require$kEnumerableProperty,
    onload: $b5dafc381df0ba60$require$kEnumerableProperty,
    onabort: $b5dafc381df0ba60$require$kEnumerableProperty,
    onerror: $b5dafc381df0ba60$require$kEnumerableProperty,
    onloadend: $b5dafc381df0ba60$require$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'FileReader',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties($b5dafc381df0ba60$var$FileReader, {
    EMPTY: $b5dafc381df0ba60$require$staticPropertyDescriptors,
    LOADING: $b5dafc381df0ba60$require$staticPropertyDescriptors,
    DONE: $b5dafc381df0ba60$require$staticPropertyDescriptors
});
module.exports = {
    FileReader: $b5dafc381df0ba60$var$FileReader
};

});
parcelRegister("329Bn", function(module, exports) {
module.exports = new URL("util.57d4322a.js", "file:" + __filename).toString();

});



