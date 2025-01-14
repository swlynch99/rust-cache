require("./pluggable-auth-client.fac9f80b.js");
require("./executable-response.7e2e68b6.js");
var $2DIeO$child_process = require("child_process");
var $2DIeO$fs = require("fs");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
"use strict";
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.PluggableAuthHandler = void 0;

var $dRvMe = parcelRequire("dRvMe");

var $3pdLq = parcelRequire("3pdLq");


/**
 * A handler used to retrieve 3rd party token responses from user defined
 * executables and cached file output for the PluggableAuthClient class.
 */ class $cefde60b097ae3cd$var$PluggableAuthHandler {
    /**
     * Instantiates a PluggableAuthHandler instance using the provided
     * PluggableAuthHandlerOptions object.
     */ constructor(options){
        if (!options.command) throw new Error('No command provided.');
        this.commandComponents = $cefde60b097ae3cd$var$PluggableAuthHandler.parseCommand(options.command);
        this.timeoutMillis = options.timeoutMillis;
        if (!this.timeoutMillis) throw new Error('No timeoutMillis provided.');
        this.outputFile = options.outputFile;
    }
    /**
     * Calls user provided executable to get a 3rd party subject token and
     * returns the response.
     * @param envMap a Map of additional Environment Variables required for
     *   the executable.
     * @return A promise that resolves with the executable response.
     */ retrieveResponseFromExecutable(envMap) {
        return new Promise((resolve, reject)=>{
            // Spawn process to run executable using added environment variables.
            const child = $2DIeO$child_process.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
                env: {
                    ...process.env,
                    ...Object.fromEntries(envMap)
                }
            });
            let output = '';
            // Append stdout to output as executable runs.
            child.stdout.on('data', (data)=>{
                output += data;
            });
            // Append stderr as executable runs.
            child.stderr.on('data', (err)=>{
                output += err;
            });
            // Set up a timeout to end the child process and throw an error.
            const timeout = setTimeout(()=>{
                // Kill child process and remove listeners so 'close' event doesn't get
                // read after child process is killed.
                child.removeAllListeners();
                child.kill();
                return reject(new Error('The executable failed to finish within the timeout specified.'));
            }, this.timeoutMillis);
            child.on('close', (code)=>{
                // Cancel timeout if executable closes before timeout is reached.
                clearTimeout(timeout);
                if (code === 0) // If the executable completed successfully, try to return the parsed response.
                try {
                    const responseJson = JSON.parse(output);
                    const response = new $3pdLq.ExecutableResponse(responseJson);
                    return resolve(response);
                } catch (error) {
                    if (error instanceof $3pdLq.ExecutableResponseError) return reject(error);
                    return reject(new $3pdLq.ExecutableResponseError(`The executable returned an invalid response: ${output}`));
                }
                else return reject(new $dRvMe.ExecutableError(output, code.toString()));
            });
        });
    }
    /**
     * Checks user provided output file for response from previous run of
     * executable and return the response if it exists, is formatted correctly, and is not expired.
     */ async retrieveCachedResponse() {
        if (!this.outputFile || this.outputFile.length === 0) return undefined;
        let filePath;
        try {
            filePath = await $2DIeO$fs.promises.realpath(this.outputFile);
        } catch (_a) {
            // If file path cannot be resolved, return undefined.
            return undefined;
        }
        if (!(await $2DIeO$fs.promises.lstat(filePath)).isFile()) // If path does not lead to file, return undefined.
        return undefined;
        const responseString = await $2DIeO$fs.promises.readFile(filePath, {
            encoding: 'utf8'
        });
        if (responseString === '') return undefined;
        try {
            const responseJson = JSON.parse(responseString);
            const response = new $3pdLq.ExecutableResponse(responseJson);
            // Check if response is successful and unexpired.
            if (response.isValid()) return new $3pdLq.ExecutableResponse(responseJson);
            return undefined;
        } catch (error) {
            if (error instanceof $3pdLq.ExecutableResponseError) throw error;
            throw new $3pdLq.ExecutableResponseError(`The output file contained an invalid response: ${responseString}`);
        }
    }
    /**
     * Parses given command string into component array, splitting on spaces unless
     * spaces are between quotation marks.
     */ static parseCommand(command) {
        // Split the command into components by splitting on spaces,
        // unless spaces are contained in quotation marks.
        const components = command.match(/(?:[^\s"]+|"[^"]*")+/g);
        if (!components) throw new Error(`Provided command: "${command}" could not be parsed.`);
        // Remove quotation marks from the beginning and end of each component if they are present.
        for(let i = 0; i < components.length; i++)if (components[i][0] === '"' && components[i].slice(-1) === '"') components[i] = components[i].slice(1, -1);
        return components;
    }
}
module.exports.PluggableAuthHandler = $cefde60b097ae3cd$var$PluggableAuthHandler;


