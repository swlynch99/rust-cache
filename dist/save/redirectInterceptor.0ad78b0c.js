require("./RedirectHandler.ae412ec5.js");

'use strict';
var $e2e9b8df5923c893$exports = {};
$e2e9b8df5923c893$exports = new URL("RedirectHandler.ae412ec5.js", "file:" + __filename).toString();


function $8c8fac03f54db892$var$createRedirectInterceptor({ maxRedirections: defaultMaxRedirections }) {
    return (dispatch)=>{
        return function Intercept(opts, handler) {
            const { maxRedirections: maxRedirections = defaultMaxRedirections } = opts;
            if (!maxRedirections) return dispatch(opts, handler);
            const redirectHandler = new $e2e9b8df5923c893$exports(dispatch, maxRedirections, opts, handler);
            opts = {
                ...opts,
                maxRedirections: 0
            } // Stop sub dispatcher from also redirecting.
            ;
            return dispatch(opts, redirectHandler);
        };
    };
}
module.exports = $8c8fac03f54db892$var$createRedirectInterceptor;


//# sourceMappingURL=redirectInterceptor.0ad78b0c.js.map
