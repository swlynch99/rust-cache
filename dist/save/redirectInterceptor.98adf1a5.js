require("./RedirectHandler.2c1dd810.js");

'use strict';
var $5e26880ff459cfae$exports = {};
$5e26880ff459cfae$exports = new URL("RedirectHandler.2c1dd810.js", "file:" + __filename).toString();


function $c3e892d405aba70f$var$createRedirectInterceptor({ maxRedirections: defaultMaxRedirections }) {
    return (dispatch)=>{
        return function Intercept(opts, handler) {
            const { maxRedirections: maxRedirections = defaultMaxRedirections } = opts;
            if (!maxRedirections) return dispatch(opts, handler);
            const redirectHandler = new $5e26880ff459cfae$exports(dispatch, maxRedirections, opts, handler);
            opts = {
                ...opts,
                maxRedirections: 0
            } // Stop sub dispatcher from also redirecting.
            ;
            return dispatch(opts, redirectHandler);
        };
    };
}
module.exports = $c3e892d405aba70f$var$createRedirectInterceptor;


