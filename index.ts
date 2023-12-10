let hasValue: boolean = true;

if (hasValue) {
  console.log("hasValue is true");
} else {
  console.log("hasValue is false");
}

let count: number = 10;
let greeting: string = "Hello, TypeScript!";
console.log(greeting);

const person: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Jack",
  age: 21,
  isStudent: true,
};

console.log(person.name);

const fruits: string[] = ["Apple", "Banana", "Grape"];

const book: [string, number, boolean] = ["business", 1500, false];

enum coffeeSize {
  short = "SHORT",
  tall = "TALL",
  grande = "GRANDE",
  venti = "VENTI",
}
const coffee = {
  hot: true,
  size: coffeeSize.venti,
};

console.log(coffee.size);

let any: any = "banana";
console.log(any);

let unionType: number | string = 10;

unionType = "hoge";

console.log(unionType);

let unionArr: (number | string | boolean)[] = [20, "kikai", false];

if (unionArr[2] == true) {
  console.log(`${unionArr[1]}です。年齢は${unionArr[0]}歳です。学生です。`);
} else {
  console.log(
    `${unionArr[1]}です。年齢は${unionArr[0]}歳です。学生ではありません。`
  );
}

const apple: "apple" = "apple";
console.log(apple);

type ClothSize = "small" | "medium" | "large";
let clothSize: ClothSize = "large";
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "large",
};

console.log(cloth.size);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);

function sayHello(): void {
  console.log("Hello!");
}

console.log(sayHello());

let tmpNull: null = null;

const anotherAdd: (n1: number, n2: number) => number = add;

function doubleAndhandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
}

doubleAndhandle(21, (doubleNum) => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person1 = new Person("Jack");
console.log(person1);

const add1 = (num1: number, num2: number = 10) => {
  console.log(num1 + num2);
  console.log(num1 * num2);
};

add1(2);

const hobbies: string[] = ["Sports", "Cooking"];
console.log(...hobbies);
const activeHobbies: string[] = ["Hiking"];
activeHobbies.push(...hobbies);

const human = {
  name: "Jack",
  age: 21,
};
