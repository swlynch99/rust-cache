var $9jkxx$stream = require("stream");
var $9jkxx$console = require("console");

'use strict';

var $26f7fb06494c24fa$require$Transform = $9jkxx$stream.Transform;

var $26f7fb06494c24fa$require$Console = $9jkxx$console.Console;
/**
 * Gets the output of `console.table(…)` as a string.
 */ module.exports = class PendingInterceptorsFormatter {
    constructor({ disableColors: disableColors } = {}){
        this.transform = new $26f7fb06494c24fa$require$Transform({
            transform (chunk, _enc, cb) {
                cb(null, chunk);
            }
        });
        this.logger = new $26f7fb06494c24fa$require$Console({
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


//# sourceMappingURL=pending-interceptors-formatter.54cc6c65.js.map
