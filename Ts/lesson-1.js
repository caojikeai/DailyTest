// 数据类型
//number
// string
// boolean
// null
// undefined
// void
// symbol
// bigint
const tutureSlogan = '图雀社区，汇聚精彩的免费实战教程';
console.log(tutureSlogan);
function furry(data) {
    console.log(data);
}
furry([{
        path: '/',
        num: 1
    }]);
// 组合类型
let strNum;
let b;
let c;
c = 'on';
// void代表没有返回值
function noReturn() {
    console.log('yes');
}
const todoListData = [
    {
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "mRcfps",
        time: "2020年3月2日 19:34",
        isCompleted: false
    },
];
const intData = {
    content: '1',
    user: 'arr',
    time: '1',
    isCompleted: true
};
// 枚举
var UserId;
(function (UserId) {
    UserId[UserId["tuture"] = 0] = "tuture";
    UserId[UserId["mRcfps"] = 1] = "mRcfps";
    UserId[UserId["crxk"] = 2] = "crxk";
    UserId[UserId["pftom"] = 3] = "pftom";
    UserId[UserId["holy"] = 4] = "holy";
})(UserId || (UserId = {}));
// @ts-ignore
const data = {
    user: 0
};
console.log('枚举', data);
// 注解参数 和 返回值
function add(x, y, lable) {
    console.log(lable);
    return x + y;
}
// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
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
const handleArtistsResponse = (response) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
