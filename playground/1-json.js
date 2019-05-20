const fs = require('fs')

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)

// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

console.log(data);

data.name = "Yuval"
data.age = 23

console.log(data);

const NewData = JSON.stringify(data) 

fs.writeFileSync('1-json.json', NewData)

console.log('call again the file');


const dataBuffer2 = fs.readFileSync('1-json.json')
const dataJson2 = dataBuffer2.toString()
const data2 = JSON.parse(dataJson2)

console.log(data2);