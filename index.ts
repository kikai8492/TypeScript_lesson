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
