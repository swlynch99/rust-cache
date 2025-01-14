class $559598304dc50dd2$export$d5e40bdbb672dd52 extends Error {
    constructor(message){
        super(message); // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */ if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        this.name = 'Deprecation';
    }
}


//# sourceMappingURL=dist-web.adcbd3ad.js.map
