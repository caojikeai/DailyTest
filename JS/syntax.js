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

// for ( let {name} of json ) {asdas
// }
// function iteration() {
//     for ( let i of  arguments ) {
//         console.log(i)
//     }
// }
// let word = Array(10).join('1').split('')
//
// word.map((e,index) => {
//     // let text = String.fromCharCode()
//     console.log(e,index)
//     word[index] = ( e > 400 + Math.random() * 484 ? 0 : e + 5)
// })
//     word.map((e,index) => {
//     console.log(e,index)
//     word[index] = ( e > 400 + Math.random() * 484 ? 0 : e + 5)
// })
// word.map((e,index) => {
//     console.log(e,index)
//     word[index] = ( e > 400 + Math.random() * 484 ? 0 : e + 5)
// })


// var willSort = [
//     {
//         name:'shangwenhe',
//         age:25,
//         height:170
//     },
//     {
//         name:'zhangsan',
//         age:31,
//         height:169
//     },
//     {
//         name:'lisi',
//         age:31,
//         height:167
//     },
//     {
//         name:'zhaowu',
//         age:22,
//         height:160
//     },
//     {
//         name:'wangliu',
//         age:23,
//         height:159
//     }
// ];
// let data = [
//     {
//         "name": "豫A6219D",
//         "id": 9,
//         "totalDis": 289.57
//     },
//     {
//         "name": "豫A1795T",
//         "id": 6,
//         "totalDis": 244.74
//     },
//     {
//         "name": "豫A5659E",
//         "id": 7,
//         "totalDis": 236
//     },
//     {
//         "name": "豫A1751T",
//         "id": 4,
//         "totalDis": 226.25
//     },
//     {
//         "name": "豫A1725T",
//         "id": 1,
//         "totalDis": 222.8
//     }
// ]
// /*
//     @function     JsonSort 对json排序
//     @param        json     用来排序的json
//     @param        key      排序的键值
// */
//
// function JsonSort(json,key){
//     for(let j=1,jl=json.length;j < jl;j++){
//         let temp = json[j],
//             val = temp[key],
//             i = j-1;
//         while(i >=0 && json[i][key]>val){
//             json[i+1] = json[i];
//             i = i-1;
//         }
//         json[i+1] = temp;
//
//     }
//     return json;
// }
// let json = JsonSort(willSort,'age');
// let json2 = JsonSort(data,'totalDis')
// console.log(json);
//
// console.log(json2)

// function PrefixInteger(num, length) {
//     return (Array(length).join('0') + num).slice(-length);
// }
// let num = 10
// console.log(PrefixInteger(num,7))



var geoCoordMap = {
    "东城区": [116.418757, 39.937544],
    "西城区": [116.366794, 39.910309],
    "朝阳区": [116.486409, 39.991489],
    "丰台区": [116.286968, 39.863642],
    "石景山区": [116.170445, 39.974601],
    "海淀区": [116.280316, 40.039074],
    "门头沟区": [115.905381, 40.009183],
    "房山区": [115.701157, 39.735535],
    "通州区": [116.758603, 39.802486],
    "顺义区": [116.753525, 40.128936],
    "昌平区": [116.235906, 40.318085],
    "大兴区": [116.338033, 39.658908],
    "怀柔区": [116.607122, 40.524272],
    "平谷区": [117.112335, 40.244783],
    "密云区": [116.943352, 40.477362],
    "延庆区": [115.985006, 40.465325]
};
//
// var rawData = [
//     // ["东城区",10,20,30],
//     // ["西城区",10,20,30],
//     ["朝阳区",10,20,30],
//     ["丰台区",10,20,30],
//     ["石景山区",10,20,30],
//     ["海淀区",10,20,30],
//     ["门头沟区",10,20,30],
//     ["房山区",10,20,30],
//     ["通州区",10,20,30],
//     ["顺义区",10,20,30],
//     ["昌平区",10,20,30],
//     ["大兴区",10,20,30],
//     ["怀柔区",10,20,30],
//     ["平谷区",10,20,30],
//     ["密云区",10,20,30],
//     ["延庆区",10,20,30]
// ];
//
//
// function makeMapData(rawData) {
//     var mapData = [];
//     for (var i = 0; i < rawData.length; i++) {
//         var geoCoord = geoCoordMap[rawData[i][0]];
//         if (geoCoord) {
//             mapData.push({
//                 name: rawData[i][0],
//                 value: geoCoord.concat(rawData[i].slice(1))
//             });
//         }
//     }
//     return mapData;
// };
//
// console.log(makeMapData(rawData))

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res)
    return res;
};

console.log('yes',convertData([
    {
    name: "密云区",
    value: (Math.random() * 300).toFixed(2)
    },
    {
        name: "丰台区",
        value: (Math.random() * 300).toFixed(2)
    }, {
        name: "昌平区",
        value: (Math.random() * 300).toFixed(2)
    },]))
