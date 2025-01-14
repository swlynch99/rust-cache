/* eslint-disable */ 'use strict';
// Extracted from node/lib/internal/fixed_queue.js
// Currently optimal queue size, tested on V8 6.0 - 6.6. Must be power of two.
const $e2dbde911ba41039$var$kSize = 2048;
const $e2dbde911ba41039$var$kMask = $e2dbde911ba41039$var$kSize - 1;
// The FixedQueue is implemented as a singly-linked list of fixed-size
// circular buffers. It looks something like this:
//
//  head                                                       tail
//    |                                                          |
//    v                                                          v
// +-----------+ <-----\       +-----------+ <------\         +-----------+
// |  [null]   |        \----- |   next    |         \------- |   next    |
// +-----------+               +-----------+                  +-----------+
// |   item    | <-- bottom    |   item    | <-- bottom       |  [empty]  |
// |   item    |               |   item    |                  |  [empty]  |
// |   item    |               |   item    |                  |  [empty]  |
// |   item    |               |   item    |                  |  [empty]  |
// |   item    |               |   item    |       bottom --> |   item    |
// |   item    |               |   item    |                  |   item    |
// |    ...    |               |    ...    |                  |    ...    |
// |   item    |               |   item    |                  |   item    |
// |   item    |               |   item    |                  |   item    |
// |  [empty]  | <-- top       |   item    |                  |   item    |
// |  [empty]  |               |   item    |                  |   item    |
// |  [empty]  |               |  [empty]  | <-- top  top --> |  [empty]  |
// +-----------+               +-----------+                  +-----------+
//
// Or, if there is only one circular buffer, it looks something
// like either of these:
//
//  head   tail                                 head   tail
//    |     |                                     |     |
//    v     v                                     v     v
// +-----------+                               +-----------+
// |  [null]   |                               |  [null]   |
// +-----------+                               +-----------+
// |  [empty]  |                               |   item    |
// |  [empty]  |                               |   item    |
// |   item    | <-- bottom            top --> |  [empty]  |
// |   item    |                               |  [empty]  |
// |  [empty]  | <-- top            bottom --> |   item    |
// |  [empty]  |                               |   item    |
// +-----------+                               +-----------+
//
// Adding a value means moving `top` forward by one, removing means
// moving `bottom` forward by one. After reaching the end, the queue
// wraps around.
//
// When `top === bottom` the current queue is empty and when
// `top + 1 === bottom` it's full. This wastes a single space of storage
// but allows much quicker checks.
class $e2dbde911ba41039$var$FixedCircularBuffer {
    constructor(){
        this.bottom = 0;
        this.top = 0;
        this.list = new Array($e2dbde911ba41039$var$kSize);
        this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & $e2dbde911ba41039$var$kMask) === this.bottom;
    }
    push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & $e2dbde911ba41039$var$kMask;
    }
    shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === undefined) return null;
        this.list[this.bottom] = undefined;
        this.bottom = this.bottom + 1 & $e2dbde911ba41039$var$kMask;
        return nextItem;
    }
}
module.exports = class FixedQueue {
    constructor(){
        this.head = this.tail = new $e2dbde911ba41039$var$FixedCircularBuffer();
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(data) {
        if (this.head.isFull()) // Head is full: Creates a new queue, sets the old queue's `.next` to it,
        // and sets it as the new main queue.
        this.head = this.head.next = new $e2dbde911ba41039$var$FixedCircularBuffer();
        this.head.push(data);
    }
    shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) // If there is another queue, it forms the new tail.
        this.tail = tail.next;
        return next;
    }
};


//# sourceMappingURL=fixed-queue.d5e6fd6b.js.map
