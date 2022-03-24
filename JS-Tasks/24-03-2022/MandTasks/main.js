document.write("Here is : ", "Object");
document.write("<br>");

// Task1
// let me = {
//     firstName: "Abdallah",
//     lastName: "Alhasan",
//     DOB:"17-06-1998",
//     favFood: ["food1", "food2", "food3"],
//     favMovie: ["intersteller", "inseption", "identity"]
// }

// Task2

// var persons = [
//   { name: { first: "John", last: "Hob" }, age: 35 },
//   { name: { first: "Alex", last: "Mercer" }, age: 25 },
//   { name: { first: "Alice", last: "Zaheer" }, age: 24 },
//   { name: { first: "Zues", last: "Odin" }, age: 55 },
//   { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
// ];

// function firstName(arr) {
//     let fullName=[];
//     for(i=0 ; i<arr.length;i++){
//     fullName += (`${arr[i].name.first} `)
//     }
//     return fullName.split(" ");
// }
// document.write(firstName(persons))

// Task3

// var persons = [
//   { name: { first: "John", last: "Hob" }, age: 35 },
//   { name: { first: "Alex", last: "Mercer" }, age: 25 },
//   { name: { first: "Alice", last: "Zaheer" }, age: 24 },
//   { name: { first: "Zues", last: "Odin" }, age: 55 },
//   { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
// ];
// function getAvgAge(arr) {
//         let avgAge=0;
//         for(i=0 ; i<arr.length;i++){
//             avgAge += arr[i].age
//         }
//         return avgAge / arr.length;
//     }
//     document.write(getAvgAge(persons))

// Task4

// var persons = [
//   { name: { first: "John", last: "Hob" }, age: 35 },
//   { name: { first: "Alex", last: "Mercer" }, age: 25 },
//   { name: { first: "Alice", last: "Zaheer" }, age: 24 },
//   { name: { first: "Zues", last: "Odin" }, age: 50 },
//   { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
// ];
// function olderPerson(arr) {
//   let index = 1;
//   for (i = 0; i < arr.length ; i++) {;
//     if (arr[i].age > arr[index].age ){
//         index = i
//     }
//   }
//   return `${arr[index].name.first} ${arr[index].name.last}`;
// }
// document.write(olderPerson(persons));

// Task5

// var persons = [
//       { name: { first: "John", last: "Hob" }, age: 35 },
//       { name: { first: "Alex", last: "Mercer" }, age: 25 },
//       { name: { first: "Alice", last: "Zaheer" }, age: 24 },
//       { name: { first: "Zues", last: "Odin" }, age: 50 },
//       { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
//     ];
//     function longestName(arr) {
//       let index = 1;
//       for (i = 0; i < arr.length ; i++) {;
//         if ((arr[i].name.first + arr[i].name.last).length > (arr[index].name.first + arr[index].name.last).length ){
//             index = i
//         }
//       }
//       return `${arr[index].name.first} ${arr[index].name.last}`;
//     }
//     document.write(longestName(persons));

let testString ="My name is alex mercer class name B baba mama hello Hello HELLO";
function repeatWord(string) {
document.write("{");

  let arr = string.toLowerCase().split(" ");
  let x=[];
  for (i = 0; i < arr.length; i++) {
    x+= (`${arr[i]}:, <br> `);
  }
  return x +"}"
}
document.write(repeatWord(testString));
