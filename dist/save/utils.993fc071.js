var $99efbc54f1f05496$export$e36fc9d62a853069;
var $99efbc54f1f05496$export$7747067cba9170ba;
var $99efbc54f1f05496$export$59259ef4495bcf07;
var $99efbc54f1f05496$export$5a511f208da16807;
var $99efbc54f1f05496$export$92ea59c0be378e4c;
"use strict";
$99efbc54f1f05496$export$e36fc9d62a853069 = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i)Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
};
$99efbc54f1f05496$export$7747067cba9170ba = Symbol("wrapper");
$99efbc54f1f05496$export$59259ef4495bcf07 = Symbol("impl");
$99efbc54f1f05496$export$5a511f208da16807 = function(impl) {
    return impl[$99efbc54f1f05496$export$7747067cba9170ba];
};
$99efbc54f1f05496$export$92ea59c0be378e4c = function(wrapper) {
    return wrapper[$99efbc54f1f05496$export$59259ef4495bcf07];
};


