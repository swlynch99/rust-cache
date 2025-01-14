var $e6KeY$stream = require("stream");
var $e6KeY$console = require("console");

'use strict';

var $1f344c1e0488e07a$require$Transform = $e6KeY$stream.Transform;

var $1f344c1e0488e07a$require$Console = $e6KeY$console.Console;
/**
 * Gets the output of `console.table(…)` as a string.
 */ module.exports = class PendingInterceptorsFormatter {
    constructor({ disableColors: disableColors } = {}){
        this.transform = new $1f344c1e0488e07a$require$Transform({
            transform (chunk, _enc, cb) {
                cb(null, chunk);
            }
        });
        this.logger = new $1f344c1e0488e07a$require$Console({
            stdout: this.transform,
            inspectOptions: {
                colors: !disableColors && !process.env.CI
            }
        });
    }
    format(pendingInterceptors) {
        const withPrettyHeaders = pendingInterceptors.map(({ method: method, path: path, data: { statusCode: statusCode }, persist: persist, times: times, timesInvoked: timesInvoked, origin: origin })=>({
                Method: method,
                Origin: origin,
                Path: path,
                'Status code': statusCode,
                Persistent: persist ? "\u2705" : "\u274C",
                Invocations: timesInvoked,
                Remaining: persist ? Infinity : times - timesInvoked
            }));
        this.logger.table(withPrettyHeaders);
        return this.transform.read().toString();
    }
};


