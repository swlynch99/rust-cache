require("./tracingContext.917682cf.js");
require("./state.f8c50114.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $50d5182c6a1ffa8a$exports = {};
$50d5182c6a1ffa8a$exports = new URL("tracingContext.917682cf.js", "file:" + __filename).toString();


var $cd31d4d7e1e45134$exports = {};
$cd31d4d7e1e45134$exports = new URL("state.f8c50114.js", "file:" + __filename).toString();


function $0be78e7350087e94$export$587b9db4b7c4a6ca() {
    return {
        end: ()=>{
        // noop
        },
        isRecording: ()=>false,
        recordException: ()=>{
        // noop
        },
        setAttribute: ()=>{
        // noop
        },
        setStatus: ()=>{
        // noop
        },
        addEvent: ()=>{
        // noop
        }
    };
}
function $0be78e7350087e94$export$d5a1a4534f47a56c() {
    return {
        createRequestHeaders: ()=>{
            return {};
        },
        parseTraceparentHeader: ()=>{
            return undefined;
        },
        startSpan: (_name, spanOptions)=>{
            return {
                span: $0be78e7350087e94$export$587b9db4b7c4a6ca(),
                tracingContext: (0, $50d5182c6a1ffa8a$exports.createTracingContext)({
                    parentContext: spanOptions.tracingContext
                })
            };
        },
        withContext (_context, callback, ...callbackArgs) {
            return callback(...callbackArgs);
        }
    };
}
function $0be78e7350087e94$export$98309c408aedd7b9(instrumenter) {
    (0, $cd31d4d7e1e45134$exports.state).instrumenterImplementation = instrumenter;
}
function $0be78e7350087e94$export$4b530bf07734fa4c() {
    if (!(0, $cd31d4d7e1e45134$exports.state).instrumenterImplementation) (0, $cd31d4d7e1e45134$exports.state).instrumenterImplementation = $0be78e7350087e94$export$d5a1a4534f47a56c();
    return (0, $cd31d4d7e1e45134$exports.state).instrumenterImplementation;
}


