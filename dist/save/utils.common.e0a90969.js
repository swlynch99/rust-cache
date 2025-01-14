require("./esm.346084e9.js");
require("./esm.f174e5c8.js");
require("./constants.40d31e64.js");


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
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $huk7e = parcelRequire("huk7e");

var $3lAwb = parcelRequire("3lAwb");

var $3UluS = parcelRequire("3UluS");
function $a87f1700d1db0dd5$export$fcaabf7b2e7899d(url) {
    const urlParsed = new URL(url);
    let path = urlParsed.pathname;
    path = path || "/";
    path = $a87f1700d1db0dd5$var$escape(path);
    urlParsed.pathname = path;
    return urlParsed.toString();
}
function $a87f1700d1db0dd5$var$getProxyUriFromDevConnString(connectionString) {
    // Development Connection String
    // https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string#connect-to-the-emulator-account-using-the-well-known-account-name-and-key
    let proxyUri = "";
    if (connectionString.search("DevelopmentStorageProxyUri=") !== -1) {
        // CONNECTION_STRING=UseDevelopmentStorage=true;DevelopmentStorageProxyUri=http://myProxyUri
        const matchCredentials = connectionString.split(";");
        for (const element of matchCredentials)if (element.trim().startsWith("DevelopmentStorageProxyUri=")) proxyUri = element.trim().match("DevelopmentStorageProxyUri=(.*)")[1];
    }
    return proxyUri;
}
function $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, argument) {
    const elements = connectionString.split(";");
    for (const element of elements){
        if (element.trim().startsWith(argument)) return element.trim().match(argument + "=(.*)")[1];
    }
    return "";
}
function $a87f1700d1db0dd5$export$e0644e9a061ded6f(connectionString) {
    let proxyUri = "";
    if (connectionString.startsWith("UseDevelopmentStorage=true")) {
        // Development connection string
        proxyUri = $a87f1700d1db0dd5$var$getProxyUriFromDevConnString(connectionString);
        connectionString = (0, $3UluS.DevelopmentConnectionString);
    }
    // Matching BlobEndpoint in the Account connection string
    let blobEndpoint = $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "BlobEndpoint");
    // Slicing off '/' at the end if exists
    // (The methods that use `extractConnectionStringParts` expect the url to not have `/` at the end)
    blobEndpoint = blobEndpoint.endsWith("/") ? blobEndpoint.slice(0, -1) : blobEndpoint;
    if (connectionString.search("DefaultEndpointsProtocol=") !== -1 && connectionString.search("AccountKey=") !== -1) {
        // Account connection string
        let defaultEndpointsProtocol = "";
        let accountName = "";
        let accountKey = Buffer.from("accountKey", "base64");
        let endpointSuffix = "";
        // Get account name and key
        accountName = $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "AccountName");
        accountKey = Buffer.from($a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "AccountKey"), "base64");
        if (!blobEndpoint) {
            // BlobEndpoint is not present in the Account connection string
            // Can be obtained from `${defaultEndpointsProtocol}://${accountName}.blob.${endpointSuffix}`
            defaultEndpointsProtocol = $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "DefaultEndpointsProtocol");
            const protocol = defaultEndpointsProtocol.toLowerCase();
            if (protocol !== "https" && protocol !== "http") throw new Error("Invalid DefaultEndpointsProtocol in the provided Connection String. Expecting 'https' or 'http'");
            endpointSuffix = $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "EndpointSuffix");
            if (!endpointSuffix) throw new Error("Invalid EndpointSuffix in the provided Connection String");
            blobEndpoint = `${defaultEndpointsProtocol}://${accountName}.blob.${endpointSuffix}`;
        }
        if (!accountName) throw new Error("Invalid AccountName in the provided Connection String");
        else if (accountKey.length === 0) throw new Error("Invalid AccountKey in the provided Connection String");
        return {
            kind: "AccountConnString",
            url: blobEndpoint,
            accountName: accountName,
            accountKey: accountKey,
            proxyUri: proxyUri
        };
    } else {
        // SAS connection string
        let accountSas = $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "SharedAccessSignature");
        let accountName = $a87f1700d1db0dd5$export$e7a1deb12c55ccf9(connectionString, "AccountName");
        // if accountName is empty, try to read it from BlobEndpoint
        if (!accountName) accountName = $a87f1700d1db0dd5$export$3bf69d9e8c65f1cf(blobEndpoint);
        if (!blobEndpoint) throw new Error("Invalid BlobEndpoint in the provided SAS Connection String");
        else if (!accountSas) throw new Error("Invalid SharedAccessSignature in the provided SAS Connection String");
        // client constructors assume accountSas does *not* start with ?
        if (accountSas.startsWith("?")) accountSas = accountSas.substring(1);
        return {
            kind: "SASConnString",
            url: blobEndpoint,
            accountName: accountName,
            accountSas: accountSas
        };
    }
}
/**
 * Internal escape method implemented Strategy Two mentioned in escapeURL() description.
 *
 * @param text -
 */ function $a87f1700d1db0dd5$var$escape(text) {
    return encodeURIComponent(text).replace(/%2F/g, "/") // Don't escape for "/"
    .replace(/'/g, "%27") // Escape for "'"
    .replace(/\+/g, "%20").replace(/%25/g, "%"); // Revert encoded "%"
}
function $a87f1700d1db0dd5$export$c2b0fef28fdd69b3(url, name) {
    const urlParsed = new URL(url);
    let path = urlParsed.pathname;
    path = path ? path.endsWith("/") ? `${path}${name}` : `${path}/${name}` : name;
    urlParsed.pathname = path;
    return urlParsed.toString();
}
function $a87f1700d1db0dd5$export$123fed14dd18c6(url, name, value) {
    const urlParsed = new URL(url);
    const encodedName = encodeURIComponent(name);
    const encodedValue = value ? encodeURIComponent(value) : undefined;
    // mutating searchParams will change the encoding, so we have to do this ourselves
    const searchString = urlParsed.search === "" ? "?" : urlParsed.search;
    const searchPieces = [];
    for (const pair of searchString.slice(1).split("&"))if (pair) {
        const [key] = pair.split("=", 2);
        if (key !== encodedName) searchPieces.push(pair);
    }
    if (encodedValue) searchPieces.push(`${encodedName}=${encodedValue}`);
    urlParsed.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
    return urlParsed.toString();
}
function $a87f1700d1db0dd5$export$d945b34716c152fb(url, name) {
    var _a;
    const urlParsed = new URL(url);
    return (_a = urlParsed.searchParams.get(name)) !== null && _a !== void 0 ? _a : undefined;
}
function $a87f1700d1db0dd5$export$6ab0c43fe39ad805(url, host) {
    const urlParsed = new URL(url);
    urlParsed.hostname = host;
    return urlParsed.toString();
}
function $a87f1700d1db0dd5$export$9e6f1d301873c209(url) {
    try {
        const urlParsed = new URL(url);
        return urlParsed.pathname;
    } catch (e) {
        return undefined;
    }
}
function $a87f1700d1db0dd5$export$6f1e609427f8a134(url) {
    try {
        const urlParsed = new URL(url);
        return urlParsed.protocol.endsWith(":") ? urlParsed.protocol.slice(0, -1) : urlParsed.protocol;
    } catch (e) {
        return undefined;
    }
}
function $a87f1700d1db0dd5$export$1cf8974c7e32873c(url) {
    const urlParsed = new URL(url);
    const pathString = urlParsed.pathname;
    if (!pathString) throw new RangeError("Invalid url without valid path.");
    let queryString = urlParsed.search || "";
    queryString = queryString.trim();
    if (queryString !== "") queryString = queryString.startsWith("?") ? queryString : `?${queryString}`; // Ensure query string start with '?'
    return `${pathString}${queryString}`;
}
function $a87f1700d1db0dd5$export$c215d6ee900900db(url) {
    let queryString = new URL(url).search;
    if (!queryString) return {};
    queryString = queryString.trim();
    queryString = queryString.startsWith("?") ? queryString.substring(1) : queryString;
    let querySubStrings = queryString.split("&");
    querySubStrings = querySubStrings.filter((value)=>{
        const indexOfEqual = value.indexOf("=");
        const lastIndexOfEqual = value.lastIndexOf("=");
        return indexOfEqual > 0 && indexOfEqual === lastIndexOfEqual && lastIndexOfEqual < value.length - 1;
    });
    const queries = {};
    for (const querySubString of querySubStrings){
        const splitResults = querySubString.split("=");
        const key = splitResults[0];
        const value = splitResults[1];
        queries[key] = value;
    }
    return queries;
}
function $a87f1700d1db0dd5$export$118a14717a41bf9c(url, queryParts) {
    const urlParsed = new URL(url);
    let query = urlParsed.search;
    if (query) query += "&" + queryParts;
    else query = queryParts;
    urlParsed.search = query;
    return urlParsed.toString();
}
function $a87f1700d1db0dd5$export$2fcc9e2da98a14da(date, withMilliseconds = true) {
    // Date.toISOString() will return like "2018-10-29T06:34:36.139Z"
    const dateString = date.toISOString();
    return withMilliseconds ? dateString.substring(0, dateString.length - 1) + "0000" + "Z" : dateString.substring(0, dateString.length - 5) + "Z";
}
function $a87f1700d1db0dd5$export$4e633de97d65d1c8(content) {
    return !(0, $3lAwb.isNode) ? btoa(content) : Buffer.from(content).toString("base64");
}
function $a87f1700d1db0dd5$export$afb15ede80c42aab(encodedString) {
    return !(0, $3lAwb.isNode) ? atob(encodedString) : Buffer.from(encodedString, "base64").toString();
}
function $a87f1700d1db0dd5$export$74c98d8507eddc4d(blockIDPrefix, blockIndex) {
    // To generate a 64 bytes base64 string, source string should be 48
    const maxSourceStringLength = 48;
    // A blob can have a maximum of 100,000 uncommitted blocks at any given time
    const maxBlockIndexLength = 6;
    const maxAllowedBlockIDPrefixLength = maxSourceStringLength - maxBlockIndexLength;
    if (blockIDPrefix.length > maxAllowedBlockIDPrefixLength) blockIDPrefix = blockIDPrefix.slice(0, maxAllowedBlockIDPrefixLength);
    const res = blockIDPrefix + $a87f1700d1db0dd5$export$36cf564d487b5178(blockIndex.toString(), maxSourceStringLength - blockIDPrefix.length, "0");
    return $a87f1700d1db0dd5$export$4e633de97d65d1c8(res);
}
async function $a87f1700d1db0dd5$export$1391212d75b2ee65(timeInMs, aborter, abortError) {
    return new Promise((resolve, reject)=>{
        /* eslint-disable-next-line prefer-const */ let timeout;
        const abortHandler = ()=>{
            if (timeout !== undefined) clearTimeout(timeout);
            reject(abortError);
        };
        const resolveHandler = ()=>{
            if (aborter !== undefined) aborter.removeEventListener("abort", abortHandler);
            resolve();
        };
        timeout = setTimeout(resolveHandler, timeInMs);
        if (aborter !== undefined) aborter.addEventListener("abort", abortHandler);
    });
}
function $a87f1700d1db0dd5$export$36cf564d487b5178(currentString, targetLength, padString = " ") {
    // @ts-expect-error: TS doesn't know this code needs to run downlevel sometimes
    if (String.prototype.padStart) return currentString.padStart(targetLength, padString);
    padString = padString || " ";
    if (currentString.length > targetLength) return currentString;
    else {
        targetLength = targetLength - currentString.length;
        if (targetLength > padString.length) padString += padString.repeat(targetLength / padString.length);
        return padString.slice(0, targetLength) + currentString;
    }
}
function $a87f1700d1db0dd5$export$84d599e4b091d798(url) {
    let safeURL = url;
    if ($a87f1700d1db0dd5$export$d945b34716c152fb(safeURL, (0, $3UluS.URLConstants).Parameters.SIGNATURE)) safeURL = $a87f1700d1db0dd5$export$123fed14dd18c6(safeURL, (0, $3UluS.URLConstants).Parameters.SIGNATURE, "*****");
    return safeURL;
}
function $a87f1700d1db0dd5$export$c043b77a35c67137(originalHeader) {
    const headers = (0, $huk7e.createHttpHeaders)();
    for (const [name, value] of originalHeader){
        if (name.toLowerCase() === (0, $3UluS.HeaderConstants).AUTHORIZATION.toLowerCase()) headers.set(name, "*****");
        else if (name.toLowerCase() === (0, $3UluS.HeaderConstants).X_MS_COPY_SOURCE) headers.set(name, $a87f1700d1db0dd5$export$84d599e4b091d798(value));
        else headers.set(name, value);
    }
    return headers;
}
function $a87f1700d1db0dd5$export$52c2b9a0a1fb9e16(str1, str2) {
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}
function $a87f1700d1db0dd5$export$3bf69d9e8c65f1cf(url) {
    const parsedUrl = new URL(url);
    let accountName;
    try {
        if (parsedUrl.hostname.split(".")[1] === "blob") // `${defaultEndpointsProtocol}://${accountName}.blob.${endpointSuffix}`;
        accountName = parsedUrl.hostname.split(".")[0];
        else if ($a87f1700d1db0dd5$export$cedba6e3556bcc09(parsedUrl)) // IPv4/IPv6 address hosts... Example - http://192.0.0.10:10001/devstoreaccount1/
        // Single word domain without a [dot] in the endpoint... Example - http://localhost:10001/devstoreaccount1/
        // .getPath() -> /devstoreaccount1/
        accountName = parsedUrl.pathname.split("/")[1];
        else // Custom domain case: "https://customdomain.com/containername/blob".
        accountName = "";
        return accountName;
    } catch (error) {
        throw new Error("Unable to extract accountName with provided information.");
    }
}
function $a87f1700d1db0dd5$export$cedba6e3556bcc09(parsedUrl) {
    const host = parsedUrl.host;
    // Case 1: Ipv6, use a broad regex to find out candidates whose host contains two ':'.
    // Case 2: localhost(:port) or host.docker.internal, use broad regex to match port part.
    // Case 3: Ipv4, use broad regex which just check if host contains Ipv4.
    // For valid host please refer to https://man7.org/linux/man-pages/man7/hostname.7.html.
    return /^.*:.*:.*$|^(localhost|host.docker.internal)(:[0-9]+)?$|^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){3}(:[0-9]+)?$/.test(host) || Boolean(parsedUrl.port) && (0, $3UluS.PathStylePorts).includes(parsedUrl.port);
}
function $a87f1700d1db0dd5$export$58e95a8caa05b354(tags) {
    if (tags === undefined) return undefined;
    const tagPairs = [];
    for(const key in tags)if (Object.prototype.hasOwnProperty.call(tags, key)) {
        const value = tags[key];
        tagPairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return tagPairs.join("&");
}
function $a87f1700d1db0dd5$export$831b255fdeb1bf46(tags) {
    if (tags === undefined) return undefined;
    const res = {
        blobTagSet: []
    };
    for(const key in tags)if (Object.prototype.hasOwnProperty.call(tags, key)) {
        const value = tags[key];
        res.blobTagSet.push({
            key: key,
            value: value
        });
    }
    return res;
}
function $a87f1700d1db0dd5$export$f3feec15cd382cc9(tags) {
    if (tags === undefined) return undefined;
    const res = {};
    for (const blobTag of tags.blobTagSet)res[blobTag.key] = blobTag.value;
    return res;
}
function $a87f1700d1db0dd5$export$91d0c33cfacfa2a1(textConfiguration) {
    if (textConfiguration === undefined) return undefined;
    switch(textConfiguration.kind){
        case "csv":
            return {
                format: {
                    type: "delimited",
                    delimitedTextConfiguration: {
                        columnSeparator: textConfiguration.columnSeparator || ",",
                        fieldQuote: textConfiguration.fieldQuote || "",
                        recordSeparator: textConfiguration.recordSeparator,
                        escapeChar: textConfiguration.escapeCharacter || "",
                        headersPresent: textConfiguration.hasHeaders || false
                    }
                }
            };
        case "json":
            return {
                format: {
                    type: "json",
                    jsonTextConfiguration: {
                        recordSeparator: textConfiguration.recordSeparator
                    }
                }
            };
        case "arrow":
            return {
                format: {
                    type: "arrow",
                    arrowConfiguration: {
                        schema: textConfiguration.schema
                    }
                }
            };
        case "parquet":
            return {
                format: {
                    type: "parquet"
                }
            };
        default:
            throw Error("Invalid BlobQueryTextConfiguration.");
    }
}
function $a87f1700d1db0dd5$export$4b938afa1f01b766(objectReplicationRecord) {
    if (!objectReplicationRecord) return undefined;
    if ("policy-id" in objectReplicationRecord) // If the dictionary contains a key with policy id, we are not required to do any parsing since
    // the policy id should already be stored in the ObjectReplicationDestinationPolicyId.
    return undefined;
    const orProperties = [];
    for(const key in objectReplicationRecord){
        const ids = key.split("_");
        const policyPrefix = "or-";
        if (ids[0].startsWith(policyPrefix)) ids[0] = ids[0].substring(policyPrefix.length);
        const rule = {
            ruleId: ids[1],
            replicationStatus: objectReplicationRecord[key]
        };
        const policyIndex = orProperties.findIndex((policy)=>policy.policyId === ids[0]);
        if (policyIndex > -1) orProperties[policyIndex].rules.push(rule);
        else orProperties.push({
            policyId: ids[0],
            rules: [
                rule
            ]
        });
    }
    return orProperties;
}
function $a87f1700d1db0dd5$export$15cf97bcc69283a5(thing, credential) {
    thing.credential = credential;
    return thing;
}
function $a87f1700d1db0dd5$export$b1bc7e8ba26e5c7f(httpAuthorization) {
    return httpAuthorization ? httpAuthorization.scheme + " " + httpAuthorization.value : undefined;
}
function $a87f1700d1db0dd5$export$2d1989927bd01740(name) {
    if (name.encoded) return decodeURIComponent(name.content);
    else return name.content;
}
function $a87f1700d1db0dd5$export$edf5034e2b191672(internalResponse) {
    return Object.assign(Object.assign({}, internalResponse), {
        segment: {
            blobItems: internalResponse.segment.blobItems.map((blobItemInteral)=>{
                const blobItem = Object.assign(Object.assign({}, blobItemInteral), {
                    name: $a87f1700d1db0dd5$export$2d1989927bd01740(blobItemInteral.name)
                });
                return blobItem;
            })
        }
    });
}
function $a87f1700d1db0dd5$export$5875d13b7042bb6a(internalResponse) {
    var _a;
    return Object.assign(Object.assign({}, internalResponse), {
        segment: {
            blobPrefixes: (_a = internalResponse.segment.blobPrefixes) === null || _a === void 0 ? void 0 : _a.map((blobPrefixInternal)=>{
                const blobPrefix = Object.assign(Object.assign({}, blobPrefixInternal), {
                    name: $a87f1700d1db0dd5$export$2d1989927bd01740(blobPrefixInternal.name)
                });
                return blobPrefix;
            }),
            blobItems: internalResponse.segment.blobItems.map((blobItemInteral)=>{
                const blobItem = Object.assign(Object.assign({}, blobItemInteral), {
                    name: $a87f1700d1db0dd5$export$2d1989927bd01740(blobItemInteral.name)
                });
                return blobItem;
            })
        }
    });
}
function* $a87f1700d1db0dd5$export$e30b95cc40a1d108(getPageRangesSegment) {
    let pageRange = [];
    let clearRange = [];
    if (getPageRangesSegment.pageRange) pageRange = getPageRangesSegment.pageRange;
    if (getPageRangesSegment.clearRange) clearRange = getPageRangesSegment.clearRange;
    let pageRangeIndex = 0;
    let clearRangeIndex = 0;
    while(pageRangeIndex < pageRange.length && clearRangeIndex < clearRange.length)if (pageRange[pageRangeIndex].start < clearRange[clearRangeIndex].start) {
        yield {
            start: pageRange[pageRangeIndex].start,
            end: pageRange[pageRangeIndex].end,
            isClear: false
        };
        ++pageRangeIndex;
    } else {
        yield {
            start: clearRange[clearRangeIndex].start,
            end: clearRange[clearRangeIndex].end,
            isClear: true
        };
        ++clearRangeIndex;
    }
    for(; pageRangeIndex < pageRange.length; ++pageRangeIndex)yield {
        start: pageRange[pageRangeIndex].start,
        end: pageRange[pageRangeIndex].end,
        isClear: false
    };
    for(; clearRangeIndex < clearRange.length; ++clearRangeIndex)yield {
        start: clearRange[clearRangeIndex].start,
        end: clearRange[clearRangeIndex].end,
        isClear: true
    };
}
function $a87f1700d1db0dd5$export$1a8c3740171bfa15(blobName) {
    const split = blobName.split("/");
    for(let i = 0; i < split.length; i++)split[i] = encodeURIComponent(split[i]);
    return split.join("/");
}
function $a87f1700d1db0dd5$export$e9ab0335f56f7771(response) {
    if (`_response` in response) return response;
    throw new TypeError(`Unexpected response object ${response}`);
}


