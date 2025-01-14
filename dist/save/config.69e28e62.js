"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getCacheServiceURL = module.exports.getCacheServiceVersion = module.exports.isGhes = void 0;
function $1c8c9616ece4fa80$var$isGhes() {
    const ghUrl = new URL(process.env['GITHUB_SERVER_URL'] || 'https://github.com');
    const hostname = ghUrl.hostname.trimEnd().toUpperCase();
    const isGitHubHost = hostname === 'GITHUB.COM';
    const isGheHost = hostname.endsWith('.GHE.COM');
    const isLocalHost = hostname.endsWith('.LOCALHOST');
    return !isGitHubHost && !isGheHost && !isLocalHost;
}
module.exports.isGhes = $1c8c9616ece4fa80$var$isGhes;
function $1c8c9616ece4fa80$var$getCacheServiceVersion() {
    // Cache service v2 is not supported on GHES. We will default to
    // cache service v1 even if the feature flag was enabled by user.
    if ($1c8c9616ece4fa80$var$isGhes()) return 'v1';
    return process.env['ACTIONS_CACHE_SERVICE_V2'] ? 'v2' : 'v1';
}
module.exports.getCacheServiceVersion = $1c8c9616ece4fa80$var$getCacheServiceVersion;
function $1c8c9616ece4fa80$var$getCacheServiceURL() {
    const version = $1c8c9616ece4fa80$var$getCacheServiceVersion();
    // Based on the version of the cache service, we will determine which
    // URL to use.
    switch(version){
        case 'v1':
            return process.env['ACTIONS_CACHE_URL'] || process.env['ACTIONS_RESULTS_URL'] || '';
        case 'v2':
            return process.env['ACTIONS_RESULTS_URL'] || '';
        default:
            throw new Error(`Unsupported cache service version: ${version}`);
    }
}
module.exports.getCacheServiceURL = $1c8c9616ece4fa80$var$getCacheServiceURL;


//# sourceMappingURL=config.69e28e62.js.map
