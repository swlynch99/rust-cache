"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.terminalStates = module.exports.POLL_INTERVAL_IN_MS = void 0;
/**
 * The default time interval to wait before sending the next polling request.
 */ module.exports.POLL_INTERVAL_IN_MS = 2000;
/**
 * The closed set of terminal states.
 */ module.exports.terminalStates = [
    "succeeded",
    "canceled",
    "failed"
];


