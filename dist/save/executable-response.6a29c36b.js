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
const $bec0b57a8f1bb9bb$var$SAML_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:saml2';
const $bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE1 = 'urn:ietf:params:oauth:token-type:id_token';
const $bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE2 = 'urn:ietf:params:oauth:token-type:jwt';
/**
 * Defines the response of a 3rd party executable run by the pluggable auth client.
 */ class $bec0b57a8f1bb9bb$var$ExecutableResponse {
    /**
     * Instantiates an ExecutableResponse instance using the provided JSON object
     * from the output of the executable.
     * @param responseJson Response from a 3rd party executable, loaded from a
     * run of the executable or a cached output file.
     */ constructor(responseJson){
        // Check that the required fields exist in the json response.
        if (!responseJson.version) throw new $bec0b57a8f1bb9bb$var$InvalidVersionFieldError("Executable response must contain a 'version' field.");
        if (responseJson.success === undefined) throw new $bec0b57a8f1bb9bb$var$InvalidSuccessFieldError("Executable response must contain a 'success' field.");
        this.version = responseJson.version;
        this.success = responseJson.success;
        // Validate required fields for a successful response.
        if (this.success) {
            this.expirationTime = responseJson.expiration_time;
            this.tokenType = responseJson.token_type;
            // Validate token type field.
            if (this.tokenType !== $bec0b57a8f1bb9bb$var$SAML_SUBJECT_TOKEN_TYPE && this.tokenType !== $bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE1 && this.tokenType !== $bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE2) throw new $bec0b57a8f1bb9bb$var$InvalidTokenTypeFieldError("Executable response must contain a 'token_type' field when successful " + `and it must be one of ${$bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE1}, ${$bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE2}, or ${$bec0b57a8f1bb9bb$var$SAML_SUBJECT_TOKEN_TYPE}.`);
            // Validate subject token.
            if (this.tokenType === $bec0b57a8f1bb9bb$var$SAML_SUBJECT_TOKEN_TYPE) {
                if (!responseJson.saml_response) throw new $bec0b57a8f1bb9bb$var$InvalidSubjectTokenError(`Executable response must contain a 'saml_response' field when token_type=${$bec0b57a8f1bb9bb$var$SAML_SUBJECT_TOKEN_TYPE}.`);
                this.subjectToken = responseJson.saml_response;
            } else {
                if (!responseJson.id_token) throw new $bec0b57a8f1bb9bb$var$InvalidSubjectTokenError("Executable response must contain a 'id_token' field when " + `token_type=${$bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE1} or ${$bec0b57a8f1bb9bb$var$OIDC_SUBJECT_TOKEN_TYPE2}.`);
                this.subjectToken = responseJson.id_token;
            }
        } else {
            // Both code and message must be provided for unsuccessful responses.
            if (!responseJson.code) throw new $bec0b57a8f1bb9bb$var$InvalidCodeFieldError("Executable response must contain a 'code' field when unsuccessful.");
            if (!responseJson.message) throw new $bec0b57a8f1bb9bb$var$InvalidMessageFieldError("Executable response must contain a 'message' field when unsuccessful.");
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
module.exports.ExecutableResponse = $bec0b57a8f1bb9bb$var$ExecutableResponse;
/**
 * An error thrown by the ExecutableResponse class.
 */ class $bec0b57a8f1bb9bb$var$ExecutableResponseError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
module.exports.ExecutableResponseError = $bec0b57a8f1bb9bb$var$ExecutableResponseError;
/**
 * An error thrown when the 'version' field in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidVersionFieldError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidVersionFieldError = $bec0b57a8f1bb9bb$var$InvalidVersionFieldError;
/**
 * An error thrown when the 'success' field in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidSuccessFieldError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidSuccessFieldError = $bec0b57a8f1bb9bb$var$InvalidSuccessFieldError;
/**
 * An error thrown when the 'expiration_time' field in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidExpirationTimeFieldError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidExpirationTimeFieldError = $bec0b57a8f1bb9bb$var$InvalidExpirationTimeFieldError;
/**
 * An error thrown when the 'token_type' field in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidTokenTypeFieldError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidTokenTypeFieldError = $bec0b57a8f1bb9bb$var$InvalidTokenTypeFieldError;
/**
 * An error thrown when the 'code' field in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidCodeFieldError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidCodeFieldError = $bec0b57a8f1bb9bb$var$InvalidCodeFieldError;
/**
 * An error thrown when the 'message' field in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidMessageFieldError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidMessageFieldError = $bec0b57a8f1bb9bb$var$InvalidMessageFieldError;
/**
 * An error thrown when the subject token in an executable response is missing or invalid.
 */ class $bec0b57a8f1bb9bb$var$InvalidSubjectTokenError extends $bec0b57a8f1bb9bb$var$ExecutableResponseError {
}
module.exports.InvalidSubjectTokenError = $bec0b57a8f1bb9bb$var$InvalidSubjectTokenError;


//# sourceMappingURL=executable-response.6a29c36b.js.map
