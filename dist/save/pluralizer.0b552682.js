'use strict';
const $226f4e0a44603008$var$singulars = {
    pronoun: 'it',
    is: 'is',
    was: 'was',
    this: 'this'
};
const $226f4e0a44603008$var$plurals = {
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
        const keys = one ? $226f4e0a44603008$var$singulars : $226f4e0a44603008$var$plurals;
        const noun = one ? this.singular : this.plural;
        return {
            ...keys,
            count: count,
            noun: noun
        };
    }
};


