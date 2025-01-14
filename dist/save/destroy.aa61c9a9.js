'use strict';
// undocumented cb() API, needed for core, not for public API
function $5f38141c286d452b$var$destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick($5f38141c286d452b$var$emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick($5f38141c286d452b$var$emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick($5f38141c286d452b$var$emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick($5f38141c286d452b$var$emitErrorAndCloseNT, _this, err);
            } else process.nextTick($5f38141c286d452b$var$emitCloseNT, _this);
        } else if (cb) {
            process.nextTick($5f38141c286d452b$var$emitCloseNT, _this);
            cb(err);
        } else process.nextTick($5f38141c286d452b$var$emitCloseNT, _this);
    });
    return this;
}
function $5f38141c286d452b$var$emitErrorAndCloseNT(self, err) {
    $5f38141c286d452b$var$emitErrorNT(self, err);
    $5f38141c286d452b$var$emitCloseNT(self);
}
function $5f38141c286d452b$var$emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function $5f38141c286d452b$var$undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function $5f38141c286d452b$var$emitErrorNT(self, err) {
    self.emit('error', err);
}
function $5f38141c286d452b$var$errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: $5f38141c286d452b$var$destroy,
    undestroy: $5f38141c286d452b$var$undestroy,
    errorOrDestroy: $5f38141c286d452b$var$errorOrDestroy
};


//# sourceMappingURL=destroy.aa61c9a9.js.map
