"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.state = void 0;
/**
 * @internal
 *
 * Holds the singleton instrumenter, to be shared across CJS and ESM imports.
 */ module.exports.state = {
    instrumenterImplementation: undefined
};


