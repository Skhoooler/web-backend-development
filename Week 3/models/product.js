const fs = require('fs');
const path = require('path');

module.exports = class Product{
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.dirname(process.m)
    }

    static fetchAll() {
        return products;
    }
}