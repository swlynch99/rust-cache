var $679e4ea2066fb148$export$e36fc9d62a853069;
var $679e4ea2066fb148$export$7747067cba9170ba;
var $679e4ea2066fb148$export$59259ef4495bcf07;
var $679e4ea2066fb148$export$5a511f208da16807;
var $679e4ea2066fb148$export$92ea59c0be378e4c;
"use strict";
$679e4ea2066fb148$export$e36fc9d62a853069 = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i)Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
};
$679e4ea2066fb148$export$7747067cba9170ba = Symbol("wrapper");
$679e4ea2066fb148$export$59259ef4495bcf07 = Symbol("impl");
$679e4ea2066fb148$export$5a511f208da16807 = function(impl) {
    return impl[$679e4ea2066fb148$export$7747067cba9170ba];
};
$679e4ea2066fb148$export$92ea59c0be378e4c = function(wrapper) {
    return wrapper[$679e4ea2066fb148$export$59259ef4495bcf07];
};


//# sourceMappingURL=utils.c7193c20.js.map
