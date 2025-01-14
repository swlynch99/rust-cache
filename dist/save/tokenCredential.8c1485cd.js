// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @internal
 * @param accessToken - Access token
 * @returns Whether a token is bearer type or not
 */ function $460868d28f751171$export$5ce6dad1a9b7e63a(accessToken) {
    return !accessToken.tokenType || accessToken.tokenType === "Bearer";
}
function $460868d28f751171$export$7bc0db98fbe3be86(accessToken) {
    return accessToken.tokenType === "pop";
}
function $460868d28f751171$export$59ba6af2e517603a(credential) {
    // Check for an object with a 'getToken' function and possibly with
    // a 'signRequest' function.  We do this check to make sure that
    // a ServiceClientCredentials implementor (like TokenClientCredentials
    // in ms-rest-nodeauth) doesn't get mistaken for a TokenCredential if
    // it doesn't actually implement TokenCredential also.
    const castCredential = credential;
    return castCredential && typeof castCredential.getToken === "function" && (castCredential.signRequest === undefined || castCredential.getToken.length > 0);
}


