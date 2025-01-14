require("./dist-web.c5e3c3ab.js");
require("./before-after-hook.b74f9f56.js");
require("./dist-src.8b8ff18e.js");
require("./dist-web.af0cd006.js");
require("./dist-src.a6625e6a.js");

// pkg/dist-src/index.js
var $cc5cedc762324cfd$exports = {};
$cc5cedc762324cfd$exports = new URL("dist-web.c5e3c3ab.js", "file:" + __filename).toString();


var $27e8c58903139dcf$exports = {};
$27e8c58903139dcf$exports = new URL("before-after-hook.b74f9f56.js", "file:" + __filename).toString();


var $f4aa5bb3c340acac$exports = {};
$f4aa5bb3c340acac$exports = new URL("dist-src.8b8ff18e.js", "file:" + __filename).toString();


var $c0df95532c0d846d$exports = {};
$c0df95532c0d846d$exports = new URL("dist-web.af0cd006.js", "file:" + __filename).toString();


var $d624cf8775226be5$exports = {};
$d624cf8775226be5$exports = new URL("dist-src.a6625e6a.js", "file:" + __filename).toString();


// pkg/dist-src/version.js
var $aa7c846152c3e233$var$VERSION = "5.2.0";
// pkg/dist-src/index.js
var $aa7c846152c3e233$var$noop = ()=>{};
var $aa7c846152c3e233$var$consoleWarn = console.warn.bind(console);
var $aa7c846152c3e233$var$consoleError = console.error.bind(console);
var $aa7c846152c3e233$var$userAgentTrail = `octokit-core.js/${$aa7c846152c3e233$var$VERSION} ${(0, $cc5cedc762324cfd$exports.getUserAgent)()}`;
var $aa7c846152c3e233$export$d19f1ac68c042717 = class {
    static{
        this.VERSION = $aa7c846152c3e233$var$VERSION;
    }
    static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
            constructor(...args){
                const options = args[0] || {};
                if (typeof defaults === "function") {
                    super(defaults(options));
                    return;
                }
                super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
                    userAgent: `${options.userAgent} ${defaults.userAgent}`
                } : null));
            }
        };
        return OctokitWithDefaults;
    }
    static{
        this.plugins = [];
    }
    /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */ static plugin(...newPlugins) {
        const currentPlugins = this.plugins;
        const NewOctokit = class extends this {
            static{
                this.plugins = currentPlugins.concat(newPlugins.filter((plugin)=>!currentPlugins.includes(plugin)));
            }
        };
        return NewOctokit;
    }
    constructor(options = {}){
        const hook = new (0, $27e8c58903139dcf$exports.Collection)();
        const requestDefaults = {
            baseUrl: (0, $f4aa5bb3c340acac$exports.request).endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, options.request, {
                // @ts-ignore internal usage only, no need to type
                hook: hook.bind(null, "request")
            }),
            mediaType: {
                previews: [],
                format: ""
            }
        };
        requestDefaults.headers["user-agent"] = options.userAgent ? `${options.userAgent} ${$aa7c846152c3e233$var$userAgentTrail}` : $aa7c846152c3e233$var$userAgentTrail;
        if (options.baseUrl) requestDefaults.baseUrl = options.baseUrl;
        if (options.previews) requestDefaults.mediaType.previews = options.previews;
        if (options.timeZone) requestDefaults.headers["time-zone"] = options.timeZone;
        this.request = (0, $f4aa5bb3c340acac$exports.request).defaults(requestDefaults);
        this.graphql = (0, $c0df95532c0d846d$exports.withCustomRequest)(this.request).defaults(requestDefaults);
        this.log = Object.assign({
            debug: $aa7c846152c3e233$var$noop,
            info: $aa7c846152c3e233$var$noop,
            warn: $aa7c846152c3e233$var$consoleWarn,
            error: $aa7c846152c3e233$var$consoleError
        }, options.log);
        this.hook = hook;
        if (!options.authStrategy) {
            if (!options.auth) this.auth = async ()=>({
                    type: "unauthenticated"
                });
            else {
                const auth = (0, $d624cf8775226be5$exports.createTokenAuth)(options.auth);
                hook.wrap("request", auth.hook);
                this.auth = auth;
            }
        } else {
            const { authStrategy: authStrategy, ...otherOptions } = options;
            const auth = authStrategy(Object.assign({
                request: this.request,
                log: this.log,
                // we pass the current octokit instance as well as its constructor options
                // to allow for authentication strategies that return a new octokit instance
                // that shares the same internal state as the current one. The original
                // requirement for this was the "event-octokit" authentication strategy
                // of https://github.com/probot/octokit-auth-probot.
                octokit: this,
                octokitOptions: otherOptions
            }, options.auth));
            hook.wrap("request", auth.hook);
            this.auth = auth;
        }
        const classConstructor = this.constructor;
        for(let i = 0; i < classConstructor.plugins.length; ++i)Object.assign(this, classConstructor.plugins[i](this, options));
    }
};


//# sourceMappingURL=dist-web.e7757bbb.js.map
