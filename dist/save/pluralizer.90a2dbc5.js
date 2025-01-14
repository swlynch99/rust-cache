'use strict';
const $b06fc817d754b354$var$singulars = {
    pronoun: 'it',
    is: 'is',
    was: 'was',
    this: 'this'
};
const $b06fc817d754b354$var$plurals = {
    pronoun: 'they',
    is: 'are',
    was: 'were',
    this: 'these'
};
module.exports = class Pluralizer {
    constructor(singular, plural){
        this.singular = singular;
        this.plural = plural;
    }
    pluralize(count) {
        const one = count === 1;
        const keys = one ? $b06fc817d754b354$var$singulars : $b06fc817d754b354$var$plurals;
        const noun = one ? this.singular : this.plural;
        return {
            ...keys,
            count: count,
            noun: noun
        };
    }
};


//# sourceMappingURL=pluralizer.90a2dbc5.js.map
