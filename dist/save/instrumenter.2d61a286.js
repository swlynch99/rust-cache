require("./tracingContext.62026703.js");
require("./state.bbf35c55.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $88baac9462948469$exports = {};
$88baac9462948469$exports = new URL("tracingContext.62026703.js", "file:" + __filename).toString();


var $06962bf515b21de2$exports = {};
$06962bf515b21de2$exports = new URL("state.bbf35c55.js", "file:" + __filename).toString();


function $9739b9e3f109a559$export$587b9db4b7c4a6ca() {
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
function $9739b9e3f109a559$export$d5a1a4534f47a56c() {
    return {
        createRequestHeaders: ()=>{
            return {};
        },
        parseTraceparentHeader: ()=>{
            return undefined;
        },
        startSpan: (_name, spanOptions)=>{
            return {
                span: $9739b9e3f109a559$export$587b9db4b7c4a6ca(),
                tracingContext: (0, $88baac9462948469$exports.createTracingContext)({
                    parentContext: spanOptions.tracingContext
                })
            };
        },
        withContext (_context, callback, ...callbackArgs) {
            return callback(...callbackArgs);
        }
    };
}
function $9739b9e3f109a559$export$98309c408aedd7b9(instrumenter) {
    (0, $06962bf515b21de2$exports.state).instrumenterImplementation = instrumenter;
}
function $9739b9e3f109a559$export$4b530bf07734fa4c() {
    if (!(0, $06962bf515b21de2$exports.state).instrumenterImplementation) (0, $06962bf515b21de2$exports.state).instrumenterImplementation = $9739b9e3f109a559$export$d5a1a4534f47a56c();
    return (0, $06962bf515b21de2$exports.state).instrumenterImplementation;
}


//# sourceMappingURL=instrumenter.2d61a286.js.map
