class $2011512dba9270eb$export$d5e40bdbb672dd52 extends Error {
    constructor(message){
        super(message); // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */ if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        this.name = 'Deprecation';
    }
}


