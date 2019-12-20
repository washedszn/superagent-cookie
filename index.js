const Save = require('./src/save');
const Use = require('./src/use');

const store = {};

const save = (newCookies, name) => {
    let existingStore = store[`${name}`] || [];
    let data = {
        [`${name}`]: Save(newCookies, existingStore)
    }
    Object.assign(store, data);
}

const use = (name) => {
    return Use(store[`${name}`]);
}

// const saveReplace = (cookies, name) => {

// }

module.exports = { save, use };