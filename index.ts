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

let unionArr: (number | string | boolean)[] = [21, "kikai", false];

if (unionArr[2] == true) {
  console.log(`${unionArr[1]}です。年齢は${unionArr[0]}歳です。学生です。`);
} else {
  console.log(
    `${unionArr[1]}です。年齢は${unionArr[0]}歳です。学生ではありません。`
  );
}

const apple: "apple" = "apple";
console.log(apple);
