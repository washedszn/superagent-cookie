
const Use = (cookies = []) => {
    return cookies.map(obj => {
        return `${obj.name}=${obj.value};`
    }).join(' ')
}

module.exports = Use;