require("./util.b7191435.js");
require("./symbols.42e4e8f0.js");
require("./webidl.35d389df.js");
require("./util.26715e80.js");


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
parcelRegister("9EqcW", function(module, exports) {
'use strict';

var $9P6z8 = parcelRequire("9P6z8");
var $706c2dcd47d88ac5$require$staticPropertyDescriptors = $9P6z8.staticPropertyDescriptors;
var $706c2dcd47d88ac5$require$readOperation = $9P6z8.readOperation;
var $706c2dcd47d88ac5$require$fireAProgressEvent = $9P6z8.fireAProgressEvent;

var $iHn5S = parcelRequire("iHn5S");
var $706c2dcd47d88ac5$require$kState = $iHn5S.kState;
var $706c2dcd47d88ac5$require$kError = $iHn5S.kError;
var $706c2dcd47d88ac5$require$kResult = $iHn5S.kResult;
var $706c2dcd47d88ac5$require$kEvents = $iHn5S.kEvents;
var $706c2dcd47d88ac5$require$kAborted = $iHn5S.kAborted;

var $iPB2Q = parcelRequire("iPB2Q");
var $706c2dcd47d88ac5$require$webidl = $iPB2Q.webidl;

var $1Z05w = parcelRequire("1Z05w");
var $706c2dcd47d88ac5$require$kEnumerableProperty = $1Z05w.kEnumerableProperty;
class $706c2dcd47d88ac5$var$FileReader extends EventTarget {
    constructor(){
        super();
        this[$706c2dcd47d88ac5$require$kState] = 'empty';
        this[$706c2dcd47d88ac5$require$kResult] = null;
        this[$706c2dcd47d88ac5$require$kError] = null;
        this[$706c2dcd47d88ac5$require$kEvents] = {
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
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        $706c2dcd47d88ac5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsArrayBuffer'
        });
        blob = $706c2dcd47d88ac5$require$webidl.converters.Blob(blob, {
            strict: false
        });
        // The readAsArrayBuffer(blob) method, when invoked,
        // must initiate a read operation for blob with ArrayBuffer.
        $706c2dcd47d88ac5$require$readOperation(this, blob, 'ArrayBuffer');
    }
    /**
   * @see https://w3c.github.io/FileAPI/#readAsBinaryString
   * @param {import('buffer').Blob} blob
   */ readAsBinaryString(blob) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        $706c2dcd47d88ac5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsBinaryString'
        });
        blob = $706c2dcd47d88ac5$require$webidl.converters.Blob(blob, {
            strict: false
        });
        // The readAsBinaryString(blob) method, when invoked,
        // must initiate a read operation for blob with BinaryString.
        $706c2dcd47d88ac5$require$readOperation(this, blob, 'BinaryString');
    }
    /**
   * @see https://w3c.github.io/FileAPI/#readAsDataText
   * @param {import('buffer').Blob} blob
   * @param {string?} encoding
   */ readAsText(blob, encoding) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        $706c2dcd47d88ac5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsText'
        });
        blob = $706c2dcd47d88ac5$require$webidl.converters.Blob(blob, {
            strict: false
        });
        if (encoding !== undefined) encoding = $706c2dcd47d88ac5$require$webidl.converters.DOMString(encoding);
        // The readAsText(blob, encoding) method, when invoked,
        // must initiate a read operation for blob with Text and encoding.
        $706c2dcd47d88ac5$require$readOperation(this, blob, 'Text', encoding);
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dfn-readAsDataURL
   * @param {import('buffer').Blob} blob
   */ readAsDataURL(blob) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        $706c2dcd47d88ac5$require$webidl.argumentLengthCheck(arguments, 1, {
            header: 'FileReader.readAsDataURL'
        });
        blob = $706c2dcd47d88ac5$require$webidl.converters.Blob(blob, {
            strict: false
        });
        // The readAsDataURL(blob) method, when invoked, must
        // initiate a read operation for blob with DataURL.
        $706c2dcd47d88ac5$require$readOperation(this, blob, 'DataURL');
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dfn-abort
   */ abort() {
        // 1. If this's state is "empty" or if this's state is
        //    "done" set this's result to null and terminate
        //    this algorithm.
        if (this[$706c2dcd47d88ac5$require$kState] === 'empty' || this[$706c2dcd47d88ac5$require$kState] === 'done') {
            this[$706c2dcd47d88ac5$require$kResult] = null;
            return;
        }
        // 2. If this's state is "loading" set this's state to
        //    "done" and set this's result to null.
        if (this[$706c2dcd47d88ac5$require$kState] === 'loading') {
            this[$706c2dcd47d88ac5$require$kState] = 'done';
            this[$706c2dcd47d88ac5$require$kResult] = null;
        }
        // 3. If there are any tasks from this on the file reading
        //    task source in an affiliated task queue, then remove
        //    those tasks from that task queue.
        this[$706c2dcd47d88ac5$require$kAborted] = true;
        // 4. Terminate the algorithm for the read method being processed.
        // TODO
        // 5. Fire a progress event called abort at this.
        $706c2dcd47d88ac5$require$fireAProgressEvent('abort', this);
        // 6. If this's state is not "loading", fire a progress
        //    event called loadend at this.
        if (this[$706c2dcd47d88ac5$require$kState] !== 'loading') $706c2dcd47d88ac5$require$fireAProgressEvent('loadend', this);
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dom-filereader-readystate
   */ get readyState() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        switch(this[$706c2dcd47d88ac5$require$kState]){
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
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        // The result attribute’s getter, when invoked, must return
        // this's result.
        return this[$706c2dcd47d88ac5$require$kResult];
    }
    /**
   * @see https://w3c.github.io/FileAPI/#dom-filereader-error
   */ get error() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        // The error attribute’s getter, when invoked, must return
        // this's error.
        return this[$706c2dcd47d88ac5$require$kError];
    }
    get onloadend() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        return this[$706c2dcd47d88ac5$require$kEvents].loadend;
    }
    set onloadend(fn) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        if (this[$706c2dcd47d88ac5$require$kEvents].loadend) this.removeEventListener('loadend', this[$706c2dcd47d88ac5$require$kEvents].loadend);
        if (typeof fn === 'function') {
            this[$706c2dcd47d88ac5$require$kEvents].loadend = fn;
            this.addEventListener('loadend', fn);
        } else this[$706c2dcd47d88ac5$require$kEvents].loadend = null;
    }
    get onerror() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        return this[$706c2dcd47d88ac5$require$kEvents].error;
    }
    set onerror(fn) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        if (this[$706c2dcd47d88ac5$require$kEvents].error) this.removeEventListener('error', this[$706c2dcd47d88ac5$require$kEvents].error);
        if (typeof fn === 'function') {
            this[$706c2dcd47d88ac5$require$kEvents].error = fn;
            this.addEventListener('error', fn);
        } else this[$706c2dcd47d88ac5$require$kEvents].error = null;
    }
    get onloadstart() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        return this[$706c2dcd47d88ac5$require$kEvents].loadstart;
    }
    set onloadstart(fn) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        if (this[$706c2dcd47d88ac5$require$kEvents].loadstart) this.removeEventListener('loadstart', this[$706c2dcd47d88ac5$require$kEvents].loadstart);
        if (typeof fn === 'function') {
            this[$706c2dcd47d88ac5$require$kEvents].loadstart = fn;
            this.addEventListener('loadstart', fn);
        } else this[$706c2dcd47d88ac5$require$kEvents].loadstart = null;
    }
    get onprogress() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        return this[$706c2dcd47d88ac5$require$kEvents].progress;
    }
    set onprogress(fn) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        if (this[$706c2dcd47d88ac5$require$kEvents].progress) this.removeEventListener('progress', this[$706c2dcd47d88ac5$require$kEvents].progress);
        if (typeof fn === 'function') {
            this[$706c2dcd47d88ac5$require$kEvents].progress = fn;
            this.addEventListener('progress', fn);
        } else this[$706c2dcd47d88ac5$require$kEvents].progress = null;
    }
    get onload() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        return this[$706c2dcd47d88ac5$require$kEvents].load;
    }
    set onload(fn) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        if (this[$706c2dcd47d88ac5$require$kEvents].load) this.removeEventListener('load', this[$706c2dcd47d88ac5$require$kEvents].load);
        if (typeof fn === 'function') {
            this[$706c2dcd47d88ac5$require$kEvents].load = fn;
            this.addEventListener('load', fn);
        } else this[$706c2dcd47d88ac5$require$kEvents].load = null;
    }
    get onabort() {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        return this[$706c2dcd47d88ac5$require$kEvents].abort;
    }
    set onabort(fn) {
        $706c2dcd47d88ac5$require$webidl.brandCheck(this, $706c2dcd47d88ac5$var$FileReader);
        if (this[$706c2dcd47d88ac5$require$kEvents].abort) this.removeEventListener('abort', this[$706c2dcd47d88ac5$require$kEvents].abort);
        if (typeof fn === 'function') {
            this[$706c2dcd47d88ac5$require$kEvents].abort = fn;
            this.addEventListener('abort', fn);
        } else this[$706c2dcd47d88ac5$require$kEvents].abort = null;
    }
}
// https://w3c.github.io/FileAPI/#dom-filereader-empty
$706c2dcd47d88ac5$var$FileReader.EMPTY = $706c2dcd47d88ac5$var$FileReader.prototype.EMPTY = 0;
// https://w3c.github.io/FileAPI/#dom-filereader-loading
$706c2dcd47d88ac5$var$FileReader.LOADING = $706c2dcd47d88ac5$var$FileReader.prototype.LOADING = 1;
// https://w3c.github.io/FileAPI/#dom-filereader-done
$706c2dcd47d88ac5$var$FileReader.DONE = $706c2dcd47d88ac5$var$FileReader.prototype.DONE = 2;
Object.defineProperties($706c2dcd47d88ac5$var$FileReader.prototype, {
    EMPTY: $706c2dcd47d88ac5$require$staticPropertyDescriptors,
    LOADING: $706c2dcd47d88ac5$require$staticPropertyDescriptors,
    DONE: $706c2dcd47d88ac5$require$staticPropertyDescriptors,
    readAsArrayBuffer: $706c2dcd47d88ac5$require$kEnumerableProperty,
    readAsBinaryString: $706c2dcd47d88ac5$require$kEnumerableProperty,
    readAsText: $706c2dcd47d88ac5$require$kEnumerableProperty,
    readAsDataURL: $706c2dcd47d88ac5$require$kEnumerableProperty,
    abort: $706c2dcd47d88ac5$require$kEnumerableProperty,
    readyState: $706c2dcd47d88ac5$require$kEnumerableProperty,
    result: $706c2dcd47d88ac5$require$kEnumerableProperty,
    error: $706c2dcd47d88ac5$require$kEnumerableProperty,
    onloadstart: $706c2dcd47d88ac5$require$kEnumerableProperty,
    onprogress: $706c2dcd47d88ac5$require$kEnumerableProperty,
    onload: $706c2dcd47d88ac5$require$kEnumerableProperty,
    onabort: $706c2dcd47d88ac5$require$kEnumerableProperty,
    onerror: $706c2dcd47d88ac5$require$kEnumerableProperty,
    onloadend: $706c2dcd47d88ac5$require$kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'FileReader',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties($706c2dcd47d88ac5$var$FileReader, {
    EMPTY: $706c2dcd47d88ac5$require$staticPropertyDescriptors,
    LOADING: $706c2dcd47d88ac5$require$staticPropertyDescriptors,
    DONE: $706c2dcd47d88ac5$require$staticPropertyDescriptors
});
module.exports = {
    FileReader: $706c2dcd47d88ac5$var$FileReader
};

});
parcelRegister("9P6z8", function(module, exports) {
module.exports = new URL("util.b7191435.js", "file:" + __filename).toString();

});



//# sourceMappingURL=filereader.25ebfa20.js.map
