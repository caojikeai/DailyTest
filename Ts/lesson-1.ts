// 数据类型
//number
// string
// boolean
// null
// undefined
// void
// symbol
// bigint
const tutureSlogan: string = '图雀社区，汇聚精彩的免费实战教程';
console.log(tutureSlogan)
function furry(data:object[]) {
    console.log(data)
}
furry([{
    path: '/',
    num: 1
}])

// 组合类型
let strNum : number | string;

type NumStr = number | string;
let b:NumStr;

let c : 'on' | 'off';
c = 'on'

// void代表没有返回值
function noReturn():void {
    console.log('yes')
}

// 注解 接口
interface Todo {
    // 只读
    readonly user: string;
    time: string;
    content: string;
    isCompleted: boolean;
    // 可选
    data?: object[];
    // 动态增加属性检查
    [propName: string]: any;
}
const todoListData: Todo[] = [
    {
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "mRcfps",
        time: "2020年3月2日 19:34",
        isCompleted: false
    },
    // ...
];

const intData: Todo = {
    content: '1',
    user: 'arr',
    time: '1',
    isCompleted: true
}

// 枚举
enum UserId {
    tuture,
    mRcfps,
    crxk,
    pftom,
    holy
}

interface  Tode {
    user: UserId
}

// @ts-ignore
const data:Tode = {
    user: 0
}
console.log('枚举',data)

// 注解参数 和 返回值
function add(x: number, y: number,lable ?: string): number {
    console.log(lable)
    return x + y;
}

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x): any {
    // 如果 x 是 `object` 类型，那么我们返回 pickCard 从 myDeck 里面取出 pickCard1 数据
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 如果 x 是 `number` 类型，那么直接返回一个可以取数据的 pickCard2
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}


let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);


// 交叉类型
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtistsData {
    artists: { name: string }[];
}

const handleArtistsResponse = (response: ArtistsData & ErrorHandling) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};
