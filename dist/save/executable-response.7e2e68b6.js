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
module.exports.InvalidSubjectTokenError = module.exports.InvalidMessageFieldError = module.exports.InvalidCodeFieldError = module.exports.InvalidTokenTypeFieldError = module.exports.InvalidExpirationTimeFieldError = module.exports.InvalidSuccessFieldError = module.exports.InvalidVersionFieldError = module.exports.ExecutableResponseError = module.exports.ExecutableResponse = void 0;
const $27ae62243cc8dc50$var$SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';
const $27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
const $27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE2 = 'urn:ietf:params:oauth:token-type:jwt';
/**
 * Defines the response of a 3rd party executable run by the pluggable auth client.
 */ class $27ae62243cc8dc50$var$ExecutableResponse {
    /**
     * Instantiates an ExecutableResponse instance using the provided JSON object
     * from the output of the executable.
     * @param responseJson Response from a 3rd party executable, loaded from a
     * run of the executable or a cached output file.
     */ constructor(responseJson){
        // Check that the required fields exist in the json response.
        if (!responseJson.version) throw new $27ae62243cc8dc50$var$InvalidVersionFieldError("Executable response must contain a 'version' field.");
        if (responseJson.success === undefined) throw new $27ae62243cc8dc50$var$InvalidSuccessFieldError("Executable response must contain a 'success' field.");
        this.version = responseJson.version;
        this.success = responseJson.success;
        // Validate required fields for a successful response.
        if (this.success) {
            this.expirationTime = responseJson.expiration_time;
            this.tokenType = responseJson.token_type;
            // Validate token type field.
            if (this.tokenType !== $27ae62243cc8dc50$var$SAML_SUBJECT_TOKEN_TYPE && this.tokenType !== $27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE1 && this.tokenType !== $27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE2) throw new $27ae62243cc8dc50$var$InvalidTokenTypeFieldError("Executable response must contain a 'token_type' field when successful " + `and it must be one of ${$27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE1}, ${$27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE2}, or ${$27ae62243cc8dc50$var$SAML_SUBJECT_TOKEN_TYPE}.`);
            // Validate subject token.
            if (this.tokenType === $27ae62243cc8dc50$var$SAML_SUBJECT_TOKEN_TYPE) {
                if (!responseJson.saml_response) throw new $27ae62243cc8dc50$var$InvalidSubjectTokenError(`Executable response must contain a 'saml_response' field when token_type=${$27ae62243cc8dc50$var$SAML_SUBJECT_TOKEN_TYPE}.`);
                this.subjectToken = responseJson.saml_response;
            } else {
                if (!responseJson.id_token) throw new $27ae62243cc8dc50$var$InvalidSubjectTokenError("Executable response must contain a 'id_token' field when " + `token_type=${$27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE1} or ${$27ae62243cc8dc50$var$OIDC_SUBJECT_TOKEN_TYPE2}.`);
                this.subjectToken = responseJson.id_token;
            }
        } else {
            // Both code and message must be provided for unsuccessful responses.
            if (!responseJson.code) throw new $27ae62243cc8dc50$var$InvalidCodeFieldError("Executable response must contain a 'code' field when unsuccessful.");
            if (!responseJson.message) throw new $27ae62243cc8dc50$var$InvalidMessageFieldError("Executable response must contain a 'message' field when unsuccessful.");
            this.errorCode = responseJson.code;
            this.errorMessage = responseJson.message;
        }
    }
    /**
     * @return A boolean representing if the response has a valid token. Returns
     * true when the response was successful and the token is not expired.
     */ isValid() {
        return !this.isExpired() && this.success;
    }
    /**
     * @return A boolean representing if the response is expired. Returns true if the
     * provided timeout has passed.
     */ isExpired() {
        return this.expirationTime !== undefined && this.expirationTime < Math.round(Date.now() / 1000);
    }
}
module.exports.ExecutableResponse = $27ae62243cc8dc50$var$ExecutableResponse;
/**
 * An error thrown by the ExecutableResponse class.
 */ class $27ae62243cc8dc50$var$ExecutableResponseError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
module.exports.ExecutableResponseError = $27ae62243cc8dc50$var$ExecutableResponseError;
/**
 * An error thrown when the 'version' field in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidVersionFieldError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidVersionFieldError = $27ae62243cc8dc50$var$InvalidVersionFieldError;
/**
 * An error thrown when the 'success' field in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidSuccessFieldError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidSuccessFieldError = $27ae62243cc8dc50$var$InvalidSuccessFieldError;
/**
 * An error thrown when the 'expiration_time' field in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidExpirationTimeFieldError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidExpirationTimeFieldError = $27ae62243cc8dc50$var$InvalidExpirationTimeFieldError;
/**
 * An error thrown when the 'token_type' field in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidTokenTypeFieldError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidTokenTypeFieldError = $27ae62243cc8dc50$var$InvalidTokenTypeFieldError;
/**
 * An error thrown when the 'code' field in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidCodeFieldError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidCodeFieldError = $27ae62243cc8dc50$var$InvalidCodeFieldError;
/**
 * An error thrown when the 'message' field in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidMessageFieldError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidMessageFieldError = $27ae62243cc8dc50$var$InvalidMessageFieldError;
/**
 * An error thrown when the subject token in an executable response is missing or invalid.
 */ class $27ae62243cc8dc50$var$InvalidSubjectTokenError extends $27ae62243cc8dc50$var$ExecutableResponseError {
}
module.exports.InvalidSubjectTokenError = $27ae62243cc8dc50$var$InvalidSubjectTokenError;


