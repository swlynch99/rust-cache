require("./helpers.5170dd9e.js");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $c47e64ae43445d2e$exports = {};
$c47e64ae43445d2e$exports = new URL("helpers.5170dd9e.js", "file:" + __filename).toString();


/**
 * The header that comes back from Azure services representing
 * the amount of time (minimum) to wait to retry (in seconds or timestamp after which we can retry).
 */ const $9fb1715f703c1727$var$RetryAfterHeader = "Retry-After";
/**
 * The headers that come back from Azure services representing
 * the amount of time (minimum) to wait to retry.
 *
 * "retry-after-ms", "x-ms-retry-after-ms" : milliseconds
 * "Retry-After" : seconds or timestamp
 */ const $9fb1715f703c1727$var$AllRetryAfterHeaders = [
    "retry-after-ms",
    "x-ms-retry-after-ms",
    $9fb1715f703c1727$var$RetryAfterHeader
];
/**
 * A response is a throttling retry response if it has a throttling status code (429 or 503),
 * as long as one of the [ "Retry-After" or "retry-after-ms" or "x-ms-retry-after-ms" ] headers has a valid value.
 *
 * Returns the `retryAfterInMs` value if the response is a throttling retry response.
 * If not throttling retry response, returns `undefined`.
 *
 * @internal
 */ function $9fb1715f703c1727$var$getRetryAfterInMs(response) {
    if (!(response && [
        429,
        503
    ].includes(response.status))) return undefined;
    try {
        // Headers: "retry-after-ms", "x-ms-retry-after-ms", "Retry-After"
        for (const header of $9fb1715f703c1727$var$AllRetryAfterHeaders){
            const retryAfterValue = (0, $c47e64ae43445d2e$exports.parseHeaderValueAsNumber)(response, header);
            if (retryAfterValue === 0 || retryAfterValue) {
                // "Retry-After" header ==> seconds
                // "retry-after-ms", "x-ms-retry-after-ms" headers ==> milli-seconds
                const multiplyingFactor = header === $9fb1715f703c1727$var$RetryAfterHeader ? 1000 : 1;
                return retryAfterValue * multiplyingFactor; // in milli-seconds
            }
        }
        // RetryAfterHeader ("Retry-After") has a special case where it might be formatted as a date instead of a number of seconds
        const retryAfterHeader = response.headers.get($9fb1715f703c1727$var$RetryAfterHeader);
        if (!retryAfterHeader) return;
        const date = Date.parse(retryAfterHeader);
        const diff = date - Date.now();
        // negative diff would mean a date in the past, so retry asap with 0 milliseconds
        return Number.isFinite(diff) ? Math.max(0, diff) : undefined;
    } catch (_a) {
        return undefined;
    }
}
function $9fb1715f703c1727$export$48a74a1c26461af(response) {
    return Number.isFinite($9fb1715f703c1727$var$getRetryAfterInMs(response));
}
function $9fb1715f703c1727$export$3d2fd7f8042e755a() {
    return {
        name: "throttlingRetryStrategy",
        retry ({ response: response }) {
            const retryAfterInMs = $9fb1715f703c1727$var$getRetryAfterInMs(response);
            if (!Number.isFinite(retryAfterInMs)) return {
                skipStrategy: true
            };
            return {
                retryAfterInMs: retryAfterInMs
            };
        }
    };
}


//# sourceMappingURL=throttlingRetryStrategy.7e2d6a19.js.map
