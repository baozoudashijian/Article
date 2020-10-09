const json = require('./city')
// const fs = require('fs')

function piple(json) {
    let result = []
    for(let i=0; i<json.length; i++) {
        if(json[i].name) {
            json[i].label = json[i].name
            delete json[i].name
        }
        if(json[i].id) {
            json[i].value = json[i].id
            delete json[i].id
        }

        if(json[i].city) {
            json[i].city = piple(json[i].city)

        }
        result.push(json[i])
    }
    return result
}
// let data = piple(json)
// fs.writeFileSync('./city1.json', data , 'utf-8', (err) => {
//     console.log('成功')
// })
let data = piple(json);
for(let i=0; i<data.length; i++) {
    data[i].value = data[i].label
}
/*
* 转中转容易出错, 不如转两次
* */
console.log(data);
console.log(JSON.stringify(data))