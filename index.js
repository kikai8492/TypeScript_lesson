var hasValue = true;
if (hasValue) {
    console.log("hasValue is true");
}
else {
    console.log("hasValue is false");
}
var count = 10;
var greeting = "Hello, TypeScript!";
console.log(greeting);
var person = {
    name: "Jack",
    age: 21,
    isStudent: true,
};
console.log(person.name);
var fruits = ["Apple", "Banana", "Grape"];
var book = ["business", 1500, false];
var coffeeSize;
(function (coffeeSize) {
    coffeeSize["short"] = "SHORT";
    coffeeSize["tall"] = "TALL";
    coffeeSize["grande"] = "GRANDE";
    coffeeSize["venti"] = "VENTI";
})(coffeeSize || (coffeeSize = {}));
var coffee = {
    hot: true,
    size: coffeeSize.venti,
};
console.log(coffee.size);
var any = "banana";
console.log(any);
var unionType = 10;
unionType = "hoge";
console.log(unionType);
var unionArr = [20, "kikai", false];
if (unionArr[2] == true) {
    console.log("".concat(unionArr[1], "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(unionArr[0], "\u6B73\u3067\u3059\u3002\u5B66\u751F\u3067\u3059\u3002"));
}
else {
    console.log("".concat(unionArr[1], "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(unionArr[0], "\u6B73\u3067\u3059\u3002\u5B66\u751F\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"));
}
var apple = "apple";
console.log(apple);
var clothSize = "large";
var cloth = {
    color: "white",
    size: "large",
};
console.log(cloth.size);
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function sayHello() {
    console.log("Hello!");
}
console.log(sayHello());
var tmpNull = null;
var anotherAdd = add;
function doubleAndhandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndhandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name);
    }
    return Person;
}());
var person1 = new Person("Jack");
