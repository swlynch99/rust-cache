"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ManifestFilename = module.exports.TarFilename = module.exports.SystemTarPathOnWindows = module.exports.GnuTarPathOnWindows = module.exports.SocketTimeout = module.exports.DefaultRetryDelay = module.exports.DefaultRetryAttempts = module.exports.ArchiveToolType = module.exports.CompressionMethod = module.exports.CacheFilename = void 0;
var $45da5915dc7c4758$var$CacheFilename;
(function(CacheFilename) {
    CacheFilename["Gzip"] = "cache.tgz";
    CacheFilename["Zstd"] = "cache.tzst";
})($45da5915dc7c4758$var$CacheFilename = module.exports.CacheFilename || (module.exports.CacheFilename = {}));
var $45da5915dc7c4758$var$CompressionMethod;
(function(CompressionMethod) {
    CompressionMethod["Gzip"] = "gzip";
    // Long range mode was added to zstd in v1.3.2.
    // This enum is for earlier version of zstd that does not have --long support
    CompressionMethod["ZstdWithoutLong"] = "zstd-without-long";
    CompressionMethod["Zstd"] = "zstd";
})($45da5915dc7c4758$var$CompressionMethod = module.exports.CompressionMethod || (module.exports.CompressionMethod = {}));
var $45da5915dc7c4758$var$ArchiveToolType;
(function(ArchiveToolType) {
    ArchiveToolType["GNU"] = "gnu";
    ArchiveToolType["BSD"] = "bsd";
})($45da5915dc7c4758$var$ArchiveToolType = module.exports.ArchiveToolType || (module.exports.ArchiveToolType = {}));
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


//# sourceMappingURL=constants.3a1f1756.js.map
