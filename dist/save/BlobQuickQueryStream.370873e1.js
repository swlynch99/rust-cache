require("./AvroReadableFromStream.ec398b68.js");
require("./AvroReader.a93f331c.js");
var $jxub4$stream = require("stream");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var $187b62a400921338$exports = {};
$187b62a400921338$exports = new URL("AvroReadableFromStream.ec398b68.js", "file:" + __filename).toString();

var $908bcbaf67638a53$exports = {};
$908bcbaf67638a53$exports = new URL("AvroReader.a93f331c.js", "file:" + __filename).toString();


class $66c5adadfe044f6c$export$260a7ce11d4dddbd extends (0, $jxub4$stream.Readable) {
    /**
     * Creates an instance of BlobQuickQueryStream.
     *
     * @param source - The current ReadableStream returned from getter
     * @param options -
     */ constructor(source, options = {}){
        super();
        this.avroPaused = true;
        this.source = source;
        this.onProgress = options.onProgress;
        this.onError = options.onError;
        this.avroReader = new (0, $908bcbaf67638a53$exports.AvroReader)(new (0, $187b62a400921338$exports.AvroReadableFromStream)(this.source));
        this.avroIter = this.avroReader.parseObjects({
            abortSignal: options.abortSignal
        });
    }
    _read() {
        if (this.avroPaused) this.readInternal().catch((err)=>{
            this.emit("error", err);
        });
    }
    async readInternal() {
        this.avroPaused = false;
        let avroNext;
        do {
            avroNext = await this.avroIter.next();
            if (avroNext.done) break;
            const obj = avroNext.value;
            const schema = obj.$schema;
            if (typeof schema !== "string") throw Error("Missing schema in avro record.");
            switch(schema){
                case "com.microsoft.azure.storage.queryBlobContents.resultData":
                    {
                        const data = obj.data;
                        if (data instanceof Uint8Array === false) throw Error("Invalid data in avro result record.");
                        if (!this.push(Buffer.from(data))) this.avroPaused = true;
                    }
                    break;
                case "com.microsoft.azure.storage.queryBlobContents.progress":
                    {
                        const bytesScanned = obj.bytesScanned;
                        if (typeof bytesScanned !== "number") throw Error("Invalid bytesScanned in avro progress record.");
                        if (this.onProgress) this.onProgress({
                            loadedBytes: bytesScanned
                        });
                    }
                    break;
                case "com.microsoft.azure.storage.queryBlobContents.end":
                    if (this.onProgress) {
                        const totalBytes = obj.totalBytes;
                        if (typeof totalBytes !== "number") throw Error("Invalid totalBytes in avro end record.");
                        this.onProgress({
                            loadedBytes: totalBytes
                        });
                    }
                    this.push(null);
                    break;
                case "com.microsoft.azure.storage.queryBlobContents.error":
                    if (this.onError) {
                        const fatal = obj.fatal;
                        if (typeof fatal !== "boolean") throw Error("Invalid fatal in avro error record.");
                        const name = obj.name;
                        if (typeof name !== "string") throw Error("Invalid name in avro error record.");
                        const description = obj.description;
                        if (typeof description !== "string") throw Error("Invalid description in avro error record.");
                        const position = obj.position;
                        if (typeof position !== "number") throw Error("Invalid position in avro error record.");
                        this.onError({
                            position: position,
                            name: name,
                            isFatal: fatal,
                            description: description
                        });
                    }
                    break;
                default:
                    throw Error(`Unknown schema ${schema} in avro progress record.`);
            }
        }while (!avroNext.done && !this.avroPaused);
    }
}


