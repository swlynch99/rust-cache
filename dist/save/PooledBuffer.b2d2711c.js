require("./BuffersStream.9a6e3830.js");
var $87SUr$buffer = require("buffer");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $bd666d59cfb88a0a$exports = {};
$bd666d59cfb88a0a$exports = new URL("BuffersStream.9a6e3830.js", "file:" + __filename).toString();



const $1bdff3e51991e81e$var$maxBufferLength = (0, ($parcel$interopDefault($87SUr$buffer))).constants.MAX_LENGTH;
class $1bdff3e51991e81e$export$b0bed5a5b833d523 {
    /**
     * The size of the data contained in the pooled buffers.
     */ get size() {
        return this._size;
    }
    constructor(capacity, buffers, totalLength){
        /**
         * Internal buffers used to keep the data.
         * Each buffer has a length of the maxBufferLength except last one.
         */ this.buffers = [];
        this.capacity = capacity;
        this._size = 0;
        // allocate
        const bufferNum = Math.ceil(capacity / $1bdff3e51991e81e$var$maxBufferLength);
        for(let i = 0; i < bufferNum; i++){
            let len = i === bufferNum - 1 ? capacity % $1bdff3e51991e81e$var$maxBufferLength : $1bdff3e51991e81e$var$maxBufferLength;
            if (len === 0) len = $1bdff3e51991e81e$var$maxBufferLength;
            this.buffers.push(Buffer.allocUnsafe(len));
        }
        if (buffers) this.fill(buffers, totalLength);
    }
    /**
     * Fill the internal buffers with data in the input buffers serially
     * with respect to the total length and the total capacity of the internal buffers.
     * Data copied will be shift out of the input buffers.
     *
     * @param buffers - Input buffers containing the data to be filled in the pooled buffer
     * @param totalLength - Total length of the data to be filled in.
     *
     */ fill(buffers, totalLength) {
        this._size = Math.min(this.capacity, totalLength);
        let i = 0, j = 0, targetOffset = 0, sourceOffset = 0, totalCopiedNum = 0;
        while(totalCopiedNum < this._size){
            const source = buffers[i];
            const target = this.buffers[j];
            const copiedNum = source.copy(target, targetOffset, sourceOffset);
            totalCopiedNum += copiedNum;
            sourceOffset += copiedNum;
            targetOffset += copiedNum;
            if (sourceOffset === source.length) {
                i++;
                sourceOffset = 0;
            }
            if (targetOffset === target.length) {
                j++;
                targetOffset = 0;
            }
        }
        // clear copied from source buffers
        buffers.splice(0, i);
        if (buffers.length > 0) buffers[0] = buffers[0].slice(sourceOffset);
    }
    /**
     * Get the readable stream assembled from all the data in the internal buffers.
     *
     */ getReadableStream() {
        return new (0, $bd666d59cfb88a0a$exports.BuffersStream)(this.buffers, this.size);
    }
}


