// boolean number string undefined null
enum UserId {
    // @ts-ignore
    holy,
}

let col = UserId[0]
console.log(col)

interface Foo {
    id: string
}

function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    } else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
//
// padding(1)
// padding(1,1)


type Name = string
type NameReslover = () => string
type NameParams = Name | NameReslover

function getName(n: NameParams):Name {
    return n + '1'
}

// function jsonSort(json,key){
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

interface json {
    id: string,
    value: number,
    [propName: string]: number | string;
}

const jsonSort = function (json: json[],key: string):json[] {
    for(let j: number=1, jl: number=json.length; j < jl; j++){
        let temp:json = json[j],

            val: string | number= temp[key],

            i: number = j-1;
        while(i >=0 && json[i][key]>val){
            json[i+1] = json[i];
            i = i-1;
        }
        json[i+1] = temp;

    }
    return json;
}
console.log(jsonSort([{
    id: '小明',
    value: 15
},{
    id: '小二',
    value: 19
},{
    id: '小三',
    value: 25
},{
    id: '小四',
    value: 1
},{
    id: '小五',
    value: 8
}],'value'))


// 二维数组
let arr: number[][];
