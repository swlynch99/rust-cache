require("./dist-web.3deca2d5.js");
require("./before-after-hook.f3c0a1e3.js");
require("./dist-src.35575957.js");
require("./dist-web.b3370587.js");
require("./dist-src.cbed6ce9.js");

// pkg/dist-src/index.js
var $4d5ca22a95ed3491$exports = {};
$4d5ca22a95ed3491$exports = new URL("dist-web.3deca2d5.js", "file:" + __filename).toString();


var $30da7f65fa4a85fd$exports = {};
$30da7f65fa4a85fd$exports = new URL("before-after-hook.f3c0a1e3.js", "file:" + __filename).toString();


var $d15f61a328b14102$exports = {};
$d15f61a328b14102$exports = new URL("dist-src.35575957.js", "file:" + __filename).toString();


var $5075d16ebc1738e0$exports = {};
$5075d16ebc1738e0$exports = new URL("dist-web.b3370587.js", "file:" + __filename).toString();


var $17158c9d043e1938$exports = {};
$17158c9d043e1938$exports = new URL("dist-src.cbed6ce9.js", "file:" + __filename).toString();


// pkg/dist-src/version.js
var $310472631f014b9d$var$VERSION = "5.2.0";
// pkg/dist-src/index.js
var $310472631f014b9d$var$noop = ()=>{};
var $310472631f014b9d$var$consoleWarn = console.warn.bind(console);
var $310472631f014b9d$var$consoleError = console.error.bind(console);
var $310472631f014b9d$var$userAgentTrail = `octokit-core.js/${$310472631f014b9d$var$VERSION} ${(0, $4d5ca22a95ed3491$exports.getUserAgent)()}`;
var $310472631f014b9d$export$d19f1ac68c042717 = class {
    static{
        this.VERSION = $310472631f014b9d$var$VERSION;
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
        const hook = new (0, $30da7f65fa4a85fd$exports.Collection)();
        const requestDefaults = {
            baseUrl: (0, $d15f61a328b14102$exports.request).endpoint.DEFAULTS.baseUrl,
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
        requestDefaults.headers["user-agent"] = options.userAgent ? `${options.userAgent} ${$310472631f014b9d$var$userAgentTrail}` : $310472631f014b9d$var$userAgentTrail;
        if (options.baseUrl) requestDefaults.baseUrl = options.baseUrl;
        if (options.previews) requestDefaults.mediaType.previews = options.previews;
        if (options.timeZone) requestDefaults.headers["time-zone"] = options.timeZone;
        this.request = (0, $d15f61a328b14102$exports.request).defaults(requestDefaults);
        this.graphql = (0, $5075d16ebc1738e0$exports.withCustomRequest)(this.request).defaults(requestDefaults);
        this.log = Object.assign({
            debug: $310472631f014b9d$var$noop,
            info: $310472631f014b9d$var$noop,
            warn: $310472631f014b9d$var$consoleWarn,
            error: $310472631f014b9d$var$consoleError
        }, options.log);
        this.hook = hook;
        if (!options.authStrategy) {
            if (!options.auth) this.auth = async ()=>({
                    type: "unauthenticated"
                });
            else {
                const auth = (0, $17158c9d043e1938$exports.createTokenAuth)(options.auth);
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


