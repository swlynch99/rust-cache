var $7PwGj$util = require("util");
var $7PwGj$fs = require("fs");

"use strict";
// Copyright 2024 Google LLC
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
var $918261cb5e1131a4$var$_a, $918261cb5e1131a4$var$_b, $918261cb5e1131a4$var$_c;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.FileSubjectTokenSupplier = void 0;


// fs.readfile is undefined in browser karma tests causing
// `npm run browser-test` to fail as test.oauth2.ts imports this file via
// src/index.ts.
// Fallback to void function to avoid promisify throwing a TypeError.
const $918261cb5e1131a4$var$readFile = (0, $7PwGj$util.promisify)(($918261cb5e1131a4$var$_a = $7PwGj$fs.readFile) !== null && $918261cb5e1131a4$var$_a !== void 0 ? $918261cb5e1131a4$var$_a : ()=>{});
const $918261cb5e1131a4$var$realpath = (0, $7PwGj$util.promisify)(($918261cb5e1131a4$var$_b = $7PwGj$fs.realpath) !== null && $918261cb5e1131a4$var$_b !== void 0 ? $918261cb5e1131a4$var$_b : ()=>{});
const $918261cb5e1131a4$var$lstat = (0, $7PwGj$util.promisify)(($918261cb5e1131a4$var$_c = $7PwGj$fs.lstat) !== null && $918261cb5e1131a4$var$_c !== void 0 ? $918261cb5e1131a4$var$_c : ()=>{});
/**
 * Internal subject token supplier implementation used when a file location
 * is configured in the credential configuration used to build an {@link IdentityPoolClient}
 */ class $918261cb5e1131a4$var$FileSubjectTokenSupplier {
    /**
     * Instantiates a new file based subject token supplier.
     * @param opts The file subject token supplier options to build the supplier
     *   with.
     */ constructor(opts){
        this.filePath = opts.filePath;
        this.formatType = opts.formatType;
        this.subjectTokenFieldName = opts.subjectTokenFieldName;
    }
    /**
     * Returns the subject token stored at the file specified in the constructor.
     * @param context {@link ExternalAccountSupplierContext} from the calling
     *   {@link IdentityPoolClient}, contains the requested audience and subject
     *   token type for the external account identity. Not used.
     */ async getSubjectToken(context) {
        // Make sure there is a file at the path. lstatSync will throw if there is
        // nothing there.
        let parsedFilePath = this.filePath;
        try {
            // Resolve path to actual file in case of symlink. Expect a thrown error
            // if not resolvable.
            parsedFilePath = await $918261cb5e1131a4$var$realpath(parsedFilePath);
            if (!(await $918261cb5e1131a4$var$lstat(parsedFilePath)).isFile()) throw new Error();
        } catch (err) {
            if (err instanceof Error) err.message = `The file at ${parsedFilePath} does not exist, or it is not a file. ${err.message}`;
            throw err;
        }
        let subjectToken;
        const rawText = await $918261cb5e1131a4$var$readFile(parsedFilePath, {
            encoding: 'utf8'
        });
        if (this.formatType === 'text') subjectToken = rawText;
        else if (this.formatType === 'json' && this.subjectTokenFieldName) {
            const json = JSON.parse(rawText);
            subjectToken = json[this.subjectTokenFieldName];
        }
        if (!subjectToken) throw new Error('Unable to parse the subject_token from the credential_source file');
        return subjectToken;
    }
}
module.exports.FileSubjectTokenSupplier = $918261cb5e1131a4$var$FileSubjectTokenSupplier;


