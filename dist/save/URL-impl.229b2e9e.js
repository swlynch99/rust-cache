require("./url-state-machine.73b4c672.js");

var $5e0f669ee08e1760$export$92ebad0065552617;
"use strict";
var $8b09d987e482166e$exports = {};
$8b09d987e482166e$exports = new URL("url-state-machine.73b4c672.js", "file:" + __filename).toString();


$5e0f669ee08e1760$export$92ebad0065552617 = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = $8b09d987e482166e$exports.basicURLParse(base);
            if (parsedBase === "failure") throw new TypeError("Invalid base URL");
        }
        const parsedURL = $8b09d987e482166e$exports.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") throw new TypeError("Invalid URL");
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return $8b09d987e482166e$exports.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = $8b09d987e482166e$exports.basicURLParse(v);
        if (parsedURL === "failure") throw new TypeError("Invalid URL");
        this._url = parsedURL;
    }
    get origin() {
        return $8b09d987e482166e$exports.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        $8b09d987e482166e$exports.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if ($8b09d987e482166e$exports.cannotHaveAUsernamePasswordPort(this._url)) return;
        $8b09d987e482166e$exports.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if ($8b09d987e482166e$exports.cannotHaveAUsernamePasswordPort(this._url)) return;
        $8b09d987e482166e$exports.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) return "";
        if (url.port === null) return $8b09d987e482166e$exports.serializeHost(url.host);
        return $8b09d987e482166e$exports.serializeHost(url.host) + ":" + $8b09d987e482166e$exports.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) return;
        $8b09d987e482166e$exports.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) return "";
        return $8b09d987e482166e$exports.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) return;
        $8b09d987e482166e$exports.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) return "";
        return $8b09d987e482166e$exports.serializeInteger(this._url.port);
    }
    set port(v) {
        if ($8b09d987e482166e$exports.cannotHaveAUsernamePasswordPort(this._url)) return;
        if (v === "") this._url.port = null;
        else $8b09d987e482166e$exports.basicURLParse(v, {
            url: this._url,
            stateOverride: "port"
        });
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) return this._url.path[0];
        if (this._url.path.length === 0) return "";
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) return;
        this._url.path = [];
        $8b09d987e482166e$exports.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") return "";
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        $8b09d987e482166e$exports.basicURLParse(input, {
            url: url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") return "";
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        $8b09d987e482166e$exports.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};


