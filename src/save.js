
const Save = (newCookies, oldCookies) => {
    let editCookies = newCookies.map(obj => {
        return {
            name: obj.split(';')[0].split('=')[0],
            value: obj.split(';')[0].split('=')[1]
        }
    })
    let temp = oldCookies.concat(editCookies);
    return [...new Map(temp.map(obj => [obj.name, obj])).values()]
}

module.exports = Save;