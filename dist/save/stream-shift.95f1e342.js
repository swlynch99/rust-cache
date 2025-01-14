module.exports = $4480a376a0b9a964$var$shift;
function $4480a376a0b9a964$var$shift(stream) {
    var rs = stream._readableState;
    if (!rs) return null;
    return rs.objectMode || typeof stream._duplexState === 'number' ? stream.read() : stream.read($4480a376a0b9a964$var$getStateLength(rs));
}
function $4480a376a0b9a964$var$getStateLength(state) {
    if (state.buffer.length) {
        var idx = state.bufferIndex || 0;
        // Since node 6.3.0 state.buffer is a BufferList not an array
        if (state.buffer.head) return state.buffer.head.data.length;
        else if (state.buffer.length - idx > 0 && state.buffer[idx]) return state.buffer[idx].length;
    }
    return state.length;
}


//# sourceMappingURL=stream-shift.95f1e342.js.map
