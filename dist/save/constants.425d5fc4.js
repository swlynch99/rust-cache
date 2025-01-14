// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const $9979eb65d7686560$export$31499a9cd224b78c = "12.26.0";
const $9979eb65d7686560$export$829ef6b2e59d984d = "2025-01-05";
const $9979eb65d7686560$export$3572b19e64d4e4c5 = 268435456; // 256MB
const $9979eb65d7686560$export$134a00c9028fc992 = 4194304000; // 4000MB
const $9979eb65d7686560$export$de80496023426611 = 50000;
const $9979eb65d7686560$export$2268714ff7917f22 = 8388608; // 8MB
const $9979eb65d7686560$export$c07b6d4004f0e6c1 = 4194304; // 4MB
const $9979eb65d7686560$export$f6c5cf36214bc931 = 5;
const $9979eb65d7686560$export$fa405bbf47d510e2 = 100000; // In ms
const $9979eb65d7686560$export$c36fd8fbedc7cfdc = "https://storage.azure.com/.default";
const $9979eb65d7686560$export$988a81a308ce5ea9 = {
    Parameters: {
        FORCE_BROWSER_NO_CACHE: "_",
        SIGNATURE: "sig",
        SNAPSHOT: "snapshot",
        VERSIONID: "versionid",
        TIMEOUT: "timeout"
    }
};
const $9979eb65d7686560$export$b2a5bcbb15d3a60c = {
    HTTP_ACCEPTED: 202,
    HTTP_CONFLICT: 409,
    HTTP_NOT_FOUND: 404,
    HTTP_PRECON_FAILED: 412,
    HTTP_RANGE_NOT_SATISFIABLE: 416
};
const $9979eb65d7686560$export$27208bcd4a3fbbd2 = {
    AUTHORIZATION: "Authorization",
    AUTHORIZATION_SCHEME: "Bearer",
    CONTENT_ENCODING: "Content-Encoding",
    CONTENT_ID: "Content-ID",
    CONTENT_LANGUAGE: "Content-Language",
    CONTENT_LENGTH: "Content-Length",
    CONTENT_MD5: "Content-Md5",
    CONTENT_TRANSFER_ENCODING: "Content-Transfer-Encoding",
    CONTENT_TYPE: "Content-Type",
    COOKIE: "Cookie",
    DATE: "date",
    IF_MATCH: "if-match",
    IF_MODIFIED_SINCE: "if-modified-since",
    IF_NONE_MATCH: "if-none-match",
    IF_UNMODIFIED_SINCE: "if-unmodified-since",
    PREFIX_FOR_STORAGE: "x-ms-",
    RANGE: "Range",
    USER_AGENT: "User-Agent",
    X_MS_CLIENT_REQUEST_ID: "x-ms-client-request-id",
    X_MS_COPY_SOURCE: "x-ms-copy-source",
    X_MS_DATE: "x-ms-date",
    X_MS_ERROR_CODE: "x-ms-error-code",
    X_MS_VERSION: "x-ms-version",
    X_MS_CopySourceErrorCode: "x-ms-copy-source-error-code"
};
const $9979eb65d7686560$export$8e8f25b46f198bbf = "";
const $9979eb65d7686560$export$4a74b51ac41c8e9c = "*";
const $9979eb65d7686560$export$aba9af29825a2430 = 1048576;
const $9979eb65d7686560$export$3da729a3fbe88911 = 256;
const $9979eb65d7686560$export$8b0b1e99914ad4e1 = 4 * $9979eb65d7686560$export$aba9af29825a2430;
const $9979eb65d7686560$export$1209d2f31c26a22a = "\r\n";
const $9979eb65d7686560$export$35f7ad19ed3f96fe = "HTTP/1.1";
const $9979eb65d7686560$export$a2398366f7c06e21 = "AES256";
const $9979eb65d7686560$export$44e08782fe66510c = `DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;`;
const $9979eb65d7686560$export$1142ecf912f25a86 = [
    "Access-Control-Allow-Origin",
    "Cache-Control",
    "Content-Length",
    "Content-Type",
    "Date",
    "Request-Id",
    "traceparent",
    "Transfer-Encoding",
    "User-Agent",
    "x-ms-client-request-id",
    "x-ms-date",
    "x-ms-error-code",
    "x-ms-request-id",
    "x-ms-return-client-request-id",
    "x-ms-version",
    "Accept-Ranges",
    "Content-Disposition",
    "Content-Encoding",
    "Content-Language",
    "Content-MD5",
    "Content-Range",
    "ETag",
    "Last-Modified",
    "Server",
    "Vary",
    "x-ms-content-crc64",
    "x-ms-copy-action",
    "x-ms-copy-completion-time",
    "x-ms-copy-id",
    "x-ms-copy-progress",
    "x-ms-copy-status",
    "x-ms-has-immutability-policy",
    "x-ms-has-legal-hold",
    "x-ms-lease-state",
    "x-ms-lease-status",
    "x-ms-range",
    "x-ms-request-server-encrypted",
    "x-ms-server-encrypted",
    "x-ms-snapshot",
    "x-ms-source-range",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "x-ms-access-tier",
    "x-ms-access-tier-change-time",
    "x-ms-access-tier-inferred",
    "x-ms-account-kind",
    "x-ms-archive-status",
    "x-ms-blob-append-offset",
    "x-ms-blob-cache-control",
    "x-ms-blob-committed-block-count",
    "x-ms-blob-condition-appendpos",
    "x-ms-blob-condition-maxsize",
    "x-ms-blob-content-disposition",
    "x-ms-blob-content-encoding",
    "x-ms-blob-content-language",
    "x-ms-blob-content-length",
    "x-ms-blob-content-md5",
    "x-ms-blob-content-type",
    "x-ms-blob-public-access",
    "x-ms-blob-sequence-number",
    "x-ms-blob-type",
    "x-ms-copy-destination-snapshot",
    "x-ms-creation-time",
    "x-ms-default-encryption-scope",
    "x-ms-delete-snapshots",
    "x-ms-delete-type-permanent",
    "x-ms-deny-encryption-scope-override",
    "x-ms-encryption-algorithm",
    "x-ms-if-sequence-number-eq",
    "x-ms-if-sequence-number-le",
    "x-ms-if-sequence-number-lt",
    "x-ms-incremental-copy",
    "x-ms-lease-action",
    "x-ms-lease-break-period",
    "x-ms-lease-duration",
    "x-ms-lease-id",
    "x-ms-lease-time",
    "x-ms-page-write",
    "x-ms-proposed-lease-id",
    "x-ms-range-get-content-md5",
    "x-ms-rehydrate-priority",
    "x-ms-sequence-number-action",
    "x-ms-sku-name",
    "x-ms-source-content-md5",
    "x-ms-source-if-match",
    "x-ms-source-if-modified-since",
    "x-ms-source-if-none-match",
    "x-ms-source-if-unmodified-since",
    "x-ms-tag-count",
    "x-ms-encryption-key-sha256",
    "x-ms-copy-source-error-code",
    "x-ms-copy-source-status-code",
    "x-ms-if-tags",
    "x-ms-source-if-tags"
];
const $9979eb65d7686560$export$835ddebb207ef5ce = [
    "comp",
    "maxresults",
    "rscc",
    "rscd",
    "rsce",
    "rscl",
    "rsct",
    "se",
    "si",
    "sip",
    "sp",
    "spr",
    "sr",
    "srt",
    "ss",
    "st",
    "sv",
    "include",
    "marker",
    "prefix",
    "copyid",
    "restype",
    "blockid",
    "blocklisttype",
    "delimiter",
    "prevsnapshot",
    "ske",
    "skoid",
    "sks",
    "skt",
    "sktid",
    "skv",
    "snapshot"
];
const $9979eb65d7686560$export$62da0943e135b3b3 = "BlobUsesCustomerSpecifiedEncryption";
const $9979eb65d7686560$export$957ee1ff309e3938 = "BlobDoesNotUseCustomerSpecifiedEncryption";
const $9979eb65d7686560$export$d8504a39273e99fa = [
    "10000",
    "10001",
    "10002",
    "10003",
    "10004",
    "10100",
    "10101",
    "10102",
    "10103",
    "10104",
    "11000",
    "11001",
    "11002",
    "11003",
    "11004",
    "11100",
    "11101",
    "11102",
    "11103",
    "11104"
];


//# sourceMappingURL=constants.425d5fc4.js.map
