"use strict";
var $226ff0cb679b1a72$var$__awaiter = module.exports && module.exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.PersonalAccessTokenCredentialHandler = module.exports.BearerCredentialHandler = module.exports.BasicCredentialHandler = void 0;
class $226ff0cb679b1a72$var$BasicCredentialHandler {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) throw Error('The request has no headers');
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return $226ff0cb679b1a72$var$__awaiter(this, void 0, void 0, function*() {
            throw new Error('not implemented');
        });
    }
}
module.exports.BasicCredentialHandler = $226ff0cb679b1a72$var$BasicCredentialHandler;
class $226ff0cb679b1a72$var$BearerCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) throw Error('The request has no headers');
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return $226ff0cb679b1a72$var$__awaiter(this, void 0, void 0, function*() {
            throw new Error('not implemented');
        });
    }
}
module.exports.BearerCredentialHandler = $226ff0cb679b1a72$var$BearerCredentialHandler;
class $226ff0cb679b1a72$var$PersonalAccessTokenCredentialHandler {
    constructor(token){
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) throw Error('The request has no headers');
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return $226ff0cb679b1a72$var$__awaiter(this, void 0, void 0, function*() {
            throw new Error('not implemented');
        });
    }
}
module.exports.PersonalAccessTokenCredentialHandler = $226ff0cb679b1a72$var$PersonalAccessTokenCredentialHandler;


