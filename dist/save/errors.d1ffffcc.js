"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.UsageError = module.exports.NetworkError = module.exports.GHESNotSupportedError = module.exports.CacheNotFoundError = module.exports.InvalidResponseError = module.exports.FilesNotFoundError = void 0;
class $f244486ac33ec4b2$var$FilesNotFoundError extends Error {
    constructor(files = []){
        let message = 'No files were found to upload';
        if (files.length > 0) message += `: ${files.join(', ')}`;
        super(message);
        this.files = files;
        this.name = 'FilesNotFoundError';
    }
}
module.exports.FilesNotFoundError = $f244486ac33ec4b2$var$FilesNotFoundError;
class $f244486ac33ec4b2$var$InvalidResponseError extends Error {
    constructor(message){
        super(message);
        this.name = 'InvalidResponseError';
    }
}
module.exports.InvalidResponseError = $f244486ac33ec4b2$var$InvalidResponseError;
class $f244486ac33ec4b2$var$CacheNotFoundError extends Error {
    constructor(message = 'Cache not found'){
        super(message);
        this.name = 'CacheNotFoundError';
    }
}
module.exports.CacheNotFoundError = $f244486ac33ec4b2$var$CacheNotFoundError;
class $f244486ac33ec4b2$var$GHESNotSupportedError extends Error {
    constructor(message = '@actions/cache v4.1.4+, actions/cache/save@v4+ and actions/cache/restore@v4+ are not currently supported on GHES.'){
        super(message);
        this.name = 'GHESNotSupportedError';
    }
}
module.exports.GHESNotSupportedError = $f244486ac33ec4b2$var$GHESNotSupportedError;
class $f244486ac33ec4b2$var$NetworkError extends Error {
    constructor(code){
        const message = `Unable to make request: ${code}\nIf you are using self-hosted runners, please make sure your runner has access to all GitHub endpoints: https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github`;
        super(message);
        this.code = code;
        this.name = 'NetworkError';
    }
}
module.exports.NetworkError = $f244486ac33ec4b2$var$NetworkError;
$f244486ac33ec4b2$var$NetworkError.isNetworkErrorCode = (code)=>{
    if (!code) return false;
    return [
        'ECONNRESET',
        'ENOTFOUND',
        'ETIMEDOUT',
        'ECONNREFUSED',
        'EHOSTUNREACH'
    ].includes(code);
};
class $f244486ac33ec4b2$var$UsageError extends Error {
    constructor(){
        const message = `Cache storage quota has been hit. Unable to upload any new cache entries. Usage is recalculated every 6-12 hours.\nMore info on storage limits: https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#calculating-minute-and-storage-spending`;
        super(message);
        this.name = 'UsageError';
    }
}
module.exports.UsageError = $f244486ac33ec4b2$var$UsageError;
$f244486ac33ec4b2$var$UsageError.isUsageErrorMessage = (msg)=>{
    if (!msg) return false;
    return msg.includes('insufficient usage');
};


//# sourceMappingURL=errors.d1ffffcc.js.map
