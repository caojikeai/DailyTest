// let str = 'This is the test string'
// let arr = ['小明', '小王']
// let obj = {
//     name: '小明',
//     age: 15
// }
// let json = [
//     { name: '小明' },
//     { name: '小王' }
// ]
// TODO: 对象不可迭代

// for ( let {name} of json ) {
//     console.log(name)
// }
// function iteration() {
//     for ( let i of  arguments ) {
//         console.log(i)
//     }
// }
let word = Array(10).join('1').split('')

word.map((e,index) => {
    // let text = String.fromCharCode()
    console.log(e,index)
    word[index] = ( e > 400 + Math.random() * 484 ? 0 : e + 5)
})
    word.map((e,index) => {
    console.log(e,index)
    word[index] = ( e > 400 + Math.random() * 484 ? 0 : e + 5)
})
word.map((e,index) => {
    console.log(e,index)
    word[index] = ( e > 400 + Math.random() * 484 ? 0 : e + 5)
})


