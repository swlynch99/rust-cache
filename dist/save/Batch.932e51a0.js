var $7wJRc$events = require("events");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// In browser, during webpack or browserify bundling, this module will be replaced by 'events'
// https://github.com/Gozala/events

/**
 * States for Batch.
 */ var $b7b5833b755847b1$var$BatchStates;
(function(BatchStates) {
    BatchStates[BatchStates["Good"] = 0] = "Good";
    BatchStates[BatchStates["Error"] = 1] = "Error";
})($b7b5833b755847b1$var$BatchStates || ($b7b5833b755847b1$var$BatchStates = {}));
class $b7b5833b755847b1$export$33b107562567fc47 {
    /**
     * Creates an instance of Batch.
     * @param concurrency -
     */ constructor(concurrency = 5){
        /**
         * Number of active operations under execution.
         */ this.actives = 0;
        /**
         * Number of completed operations under execution.
         */ this.completed = 0;
        /**
         * Offset of next operation to be executed.
         */ this.offset = 0;
        /**
         * Operation array to be executed.
         */ this.operations = [];
        /**
         * States of Batch. When an error happens, state will turn into error.
         * Batch will stop execute left operations.
         */ this.state = $b7b5833b755847b1$var$BatchStates.Good;
        if (concurrency < 1) throw new RangeError("concurrency must be larger than 0");
        this.concurrency = concurrency;
        this.emitter = new (0, $7wJRc$events.EventEmitter)();
    }
    /**
     * Add a operation into queue.
     *
     * @param operation -
     */ addOperation(operation) {
        this.operations.push(async ()=>{
            try {
                this.actives++;
                await operation();
                this.actives--;
                this.completed++;
                this.parallelExecute();
            } catch (error) {
                this.emitter.emit("error", error);
            }
        });
    }
    /**
     * Start execute operations in the queue.
     *
     */ async do() {
        if (this.operations.length === 0) return Promise.resolve();
        this.parallelExecute();
        return new Promise((resolve, reject)=>{
            this.emitter.on("finish", resolve);
            this.emitter.on("error", (error)=>{
                this.state = $b7b5833b755847b1$var$BatchStates.Error;
                reject(error);
            });
        });
    }
    /**
     * Get next operation to be executed. Return null when reaching ends.
     *
     */ nextOperation() {
        if (this.offset < this.operations.length) return this.operations[this.offset++];
        return null;
    }
    /**
     * Start execute operations. One one the most important difference between
     * this method with do() is that do() wraps as an sync method.
     *
     */ parallelExecute() {
        if (this.state === $b7b5833b755847b1$var$BatchStates.Error) return;
        if (this.completed >= this.operations.length) {
            this.emitter.emit("finish");
            return;
        }
        while(this.actives < this.concurrency){
            const operation = this.nextOperation();
            if (operation) operation();
            else return;
        }
    }
}


