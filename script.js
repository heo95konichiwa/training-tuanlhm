// Khai báo biến
console.log(message);
var message = "Hello, World!";
let count = 10;
console.log(count);
count = 10.5;
const CONSTANT_PI = 3.14;
var message = "Hello, World2!";
console.log(message);
message = "Hello, World3!";
console.log(message);

// TRUTHY & FALSY
// TRUTHY: true, 1, "abc", [], {}
// FALSY: false, 0, "", null, undefined, NaN
const isFalse = false;
if (!isFalse) {
  console.log("Điều kiện sai và phủ định thành đúng");
}

let arrNumber = [];
console.log("arrNumber.length", arrNumber.length);

if (arrNumber.length) {
  console.log("Điều kiện sai");
}
arrNumber = [1, 2, 3];
console.log("arrNumber.length", arrNumber.length);
if (arrNumber.length) {
  console.log("Điều kiện đúng");
}

const string1 = "";
if (!string1) {
  console.log("Điều kiện sai");
}
if (null) {
  console.log("Điều kiện sai");
}
if (undefined) {
  console.log("Điều kiện sai");
}
if (NaN) {
  console.log("Điều kiện sai");
}

// Toán tử so sánh
// ==: so sánh giá trị
// ===: so sánh giá trị và kiểu dữ liệu
// !=: so sánh giá trị không bằng
// !==: so sánh giá trị và kiểu dữ liệu không bằng
// ||: hoặc
// &&: và
// <=: nhỏ hơn hoặc bằng
// >=: lớn hơn hoặc bằng
// <: nhỏ hơn
// >: lớn hơn
// !: phủ định
// ?: toán tử 3 ngôi

const a = 5;
const b = "5";
if (a == b) {
  console.log("So sánh giá trị a bằng b");
}
if (a != b) {
  console.log("So sánh giá trị a không bằng b");
}
if (a === b) {
  console.log("So sánh giá trị và dữ liệu a bằng b");
}
if (a !== b) {
  console.log("So sánh giá trị và dữ liệu a không bằng b");
}
const value1 = 5;

if (value1) {
  console.log("value1 đúng", value1);
} else {
  console.log("value1 sai", value1);
}

const checkValue1 = value1 > 5 ? "Đúng" : value1 > 4 ? "Đúng Đúng" : "Sai";
console.log("checkValue1", checkValue1);

// Hàm

// Regular function
function sum1(a, b) {
  return a + b;
}

// Arrow function
const sum2 = (a, b) => {
  return a + b;
};

const sum3 = (a, b) => a + b;
console.log("sum1", sum1(1, 2));
console.log("sum2", sum2(1, 2));
console.log("sum3", sum3(1, 2));

// Anonymous function
document.addEventListener("click", () => {
  console.log("Click me");
});

// Callback function
const handleClick = (callback) => {
  console.log("Handle click");
  callback();
};
handleClick(() => {
  console.log("Callback function");
});

// Rest parameter
const restParamFunction = (a, b, ...rest) => {
  // console.log("a", a);
  // console.log("b", b);
  console.log("rest", rest);
  return rest.reduce((total, current) => total + current, 0);
};
const restValue = restParamFunction(1, 2, 6, 2, 4, 8);
console.log(restValue);

// Spread operator
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9];
const arr3 = [arr1, arr2];
console.log("arr3", arr3);
const obj1 = { name: "John", age: 30 };
const obj2 = { address: "New York", job: "Developer" };
const obj3 = { ...obj1, ...obj2, email: "son@fpt.com", phone: "012345678" };
console.log("obj3", obj3);

// Destructuring
const { address, age, email, phone } = obj3;
console.log("address", address, "obj4", obj4);
console.log("phone", phone, "age", age);

for (let i = 0; i < 4; i++) {
  console.log("arr1[i]", arr1[i]);
}

for (const value of arr1) {
  console.log("value", value);
}

for (const key in obj3) {
  console.log("key", key, "obj3[key]", obj3[key]);
}

const forEachValue = arr1.forEach((value, index) => {
  console.log("value", value, "index", index);
});

console.log("forEachValue", forEachValue); // undefined

const mapValue = arr1.map((value, index) => {
  console.log("value", value, "index", index);
  return value * 2;
});

console.log("mapValue", mapValue); // [2, 4, 6, 8, 10, 12]

const arrEvenNumber = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    arrEvenNumber.push(arr1[i]);
  }
}
console.log("arrEvenNumber", arrEvenNumber);

const arrEvenNumber2 = arr1
  .filter((value) => value % 2 === 0)
  .concat([8, 15, 16, 9, 10, 11, 17, 12, 18, 13, 14])
  .filter((value3) => value3 > 4);
console.log("arrEvenNumber2", arrEvenNumber2);
const sortArr = arrEvenNumber2.sort((a, b) => b - a);
console.log("sortArr", sortArr);

const reduceValue = arr1.reduce((total, current) => total + current, 0);
console.log("reduceValue", reduceValue); // 21

const arrObj = [
  { name: "John", age: 30, weight: 50, phone: "131231231" },
  { name: "Johanchua", age: 30, weight: 56, phone: "4354654567" },
  { name: "Jane", age: 25, weight: 45, phone: "0987654321" },
  { name: "Jack", age: 35, weight: 124, phone: "0123456789" },
  { name: "Kuro", age: 35, weight: 77, phone: "787945678" },
];

const data = [];

const abcd = Object.entries(arrObj)

const arrObjAgeNumber = abcd.forEach(([_, obj]) => {
  data.push(obj.age);
});

console.log("abcd", abcd, "data",  [...new Set(data)]);

const dulicateValue = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 7];
const uniqueValues = [...new Set(dulicateValue)];
console.log("uniqueValues", uniqueValues); // [1, 2, 3, 4, 5, 6, 7]

const allValues = arrObj.flatMap(Object.values); // ["John", 30, "131231231", "Jane", 25, "0987654321", "Jack", 35, "0123456789"]

const numbers = arrObj.filter(
  (item) => typeof item.age === "number" && item.age
);
const strings = arrObj.filter((item) => typeof item === "string");

console.log("Numbers:", numbers); // [30, 25, 35]
console.log("Strings:", strings); // ["John", "131231231", "Jane", "0987654321", "Jack", "0123456789"]
const obj5 = {
  name: "John",
  age: 30,
  address: "New York",
  job: "Developer",
  gender: true,
};
const entries = Object.entries(obj5);
console.log("entries", entries);
const objKeys = Object.keys(obj5);
console.log("objKeys", objKeys);
const objValues = Object.values(obj5);
console.log("objValues", objValues);
