"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CacheFileSizeLimit = module.exports.ManifestFilename = module.exports.TarFilename = module.exports.SystemTarPathOnWindows = module.exports.GnuTarPathOnWindows = module.exports.SocketTimeout = module.exports.DefaultRetryDelay = module.exports.DefaultRetryAttempts = module.exports.ArchiveToolType = module.exports.CompressionMethod = module.exports.CacheFilename = void 0;
var $5e7b03c0c6ff4ab9$var$CacheFilename;
(function(CacheFilename) {
    CacheFilename["Gzip"] = "cache.tgz";
    CacheFilename["Zstd"] = "cache.tzst";
})($5e7b03c0c6ff4ab9$var$CacheFilename || (module.exports.CacheFilename = $5e7b03c0c6ff4ab9$var$CacheFilename = {}));
var $5e7b03c0c6ff4ab9$var$CompressionMethod;
(function(CompressionMethod) {
    CompressionMethod["Gzip"] = "gzip";
    // Long range mode was added to zstd in v1.3.2.
    // This enum is for earlier version of zstd that does not have --long support
    CompressionMethod["ZstdWithoutLong"] = "zstd-without-long";
    CompressionMethod["Zstd"] = "zstd";
})($5e7b03c0c6ff4ab9$var$CompressionMethod || (module.exports.CompressionMethod = $5e7b03c0c6ff4ab9$var$CompressionMethod = {}));
var $5e7b03c0c6ff4ab9$var$ArchiveToolType;
(function(ArchiveToolType) {
    ArchiveToolType["GNU"] = "gnu";
    ArchiveToolType["BSD"] = "bsd";
})($5e7b03c0c6ff4ab9$var$ArchiveToolType || (module.exports.ArchiveToolType = $5e7b03c0c6ff4ab9$var$ArchiveToolType = {}));
// The default number of retry attempts.
module.exports.DefaultRetryAttempts = 2;
// The default delay in milliseconds between retry attempts.
module.exports.DefaultRetryDelay = 5000;
// Socket timeout in milliseconds during download.  If no traffic is received
// over the socket during this period, the socket is destroyed and the download
// is aborted.
module.exports.SocketTimeout = 5000;
// The default path of GNUtar on hosted Windows runners
module.exports.GnuTarPathOnWindows = `${process.env['PROGRAMFILES']}\\Git\\usr\\bin\\tar.exe`;
// The default path of BSDtar on hosted Windows runners
module.exports.SystemTarPathOnWindows = `${process.env['SYSTEMDRIVE']}\\Windows\\System32\\tar.exe`;
module.exports.TarFilename = 'cache.tar';
module.exports.ManifestFilename = 'manifest.txt';
module.exports.CacheFileSizeLimit = 10 * Math.pow(1024, 3); // 10GiB per repository


//# sourceMappingURL=constants.e122b271.js.map
