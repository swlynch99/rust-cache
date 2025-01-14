require("./BuffersStream.476d286a.js");
var $jrX6P$buffer = require("buffer");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var $a8c614d1bf3fb8a6$exports = {};
$a8c614d1bf3fb8a6$exports = new URL("BuffersStream.476d286a.js", "file:" + __filename).toString();



const $d489951d6da56aea$var$maxBufferLength = (0, ($parcel$interopDefault($jrX6P$buffer))).constants.MAX_LENGTH;
class $d489951d6da56aea$export$b0bed5a5b833d523 {
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
        const bufferNum = Math.ceil(capacity / $d489951d6da56aea$var$maxBufferLength);
        for(let i = 0; i < bufferNum; i++){
            let len = i === bufferNum - 1 ? capacity % $d489951d6da56aea$var$maxBufferLength : $d489951d6da56aea$var$maxBufferLength;
            if (len === 0) len = $d489951d6da56aea$var$maxBufferLength;
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
        return new (0, $a8c614d1bf3fb8a6$exports.BuffersStream)(this.buffers, this.size);
    }
}


//# sourceMappingURL=PooledBuffer.764651cb.js.map
