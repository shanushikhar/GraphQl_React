// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += '*';
  }
  string += "\n";
  //console.log(string)
}
console.log(string);