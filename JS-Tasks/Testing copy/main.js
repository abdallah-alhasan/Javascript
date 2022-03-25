document.write("Here is : ", "Object");
document.write("<br>");

// Task1
let me = {
    firstName: "Abdallah",
    lastName: "Alhasan",
    DOB:"17-06-1998",
    favFood: ["food1", "food2", "food3"],
    favMovie: ["intersteller", "inseption", "identity"]
}

// Task2

var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

function firstName(arr) {
    let fullName=[];
    for(i=0 ; i<arr.length;i++){
    fullName += (`${arr[i].name.first} `)
    }
    return fullName.split(" ");
}
console.log(firstName(persons))

// Task3

var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];
function getAvgAge(arr) {
        let avgAge=0;
        for(i=0 ; i<arr.length;i++){
            avgAge += arr[i].age
        }
        return avgAge / arr.length;
    }
    console.log(getAvgAge(persons))

// Task4

var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 50 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];
function olderPerson(arr) {
  let index = 1;
  for (i = 0; i < arr.length ; i++) {;
    if (arr[i].age > arr[index].age ){
        index = i
    }
  }
  return `${arr[index].name.first} ${arr[index].name.last}`;
}
console.log(olderPerson(persons));

// Task5 same as task6

var persons = [
      { name: { first: "John", last: "Hob" }, age: 35 },
      { name: { first: "Alex", last: "Mercer" }, age: 25 },
      { name: { first: "Alice", last: "Zaheer" }, age: 24 },
      { name: { first: "Zues", last: "Odin" }, age: 50 },
      { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
    ];
    function longestName(arr) {
      let index = 1;
      for (i = 0; i < arr.length ; i++) {;
        if ((arr[i].name.first + arr[i].name.last).length > (arr[index].name.first + arr[index].name.last).length ){
            index = i
        }
      }
      return `${arr[index].name.first} ${arr[index].name.last}`;
    }
    console.log(longestName(persons));

// Task7

let testString ="My name is alex mercer class name B baba mama hello Hello HELLO";

function repeatWord(string) {

  let arr = string.toLowerCase().split(" ");
  let x={};
  let count;
  for (i = 0; i < arr.length; i++) {
    count =arr.filter(function(el){
      return el === arr[i]
      }).length
    x[`${arr[i]}`]= `${count}`;
  }
  return x
}
console.log((repeatWord(testString)));

// Task8

let testChar="mamababatetacedo";

function repeatChar(string) {

  let arr = string.toLowerCase().split("");
  let x={};
  let count;
  for (i = 0; i < arr.length; i++) {
    count =arr.filter(function(el){
      return el === arr[i]
      }).length
    x[`${arr[i]}`]= `${count}`;
  }
  return x
}
console.log((repeatChar(testChar)));

// Task9

function selectFromObject(obj, arr) {
  for (i = 0; i < arr.length; i++) {
    let x = Object.getOwnPropertyNames(obj)[i];
    if (x !== arr[i]) {
      delete obj[`${x}`];
    }
  }
  return obj;
}

let obj1 = {
  a: 1,
  cat: 3,
};
let arr = ["a" , "cat" ,"d"];

console.log(selectFromObject(obj1, arr));
