//Q1
// let i = 11;
// i = i++ + ++i;
// console.log(i);

//Q2
// let a = 11, b = 22, c;
// c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);
// Output: qa=13 , b=24 , c=103

//Q3
// let i = 0;
// i = i++ - --i + ++i - i--;
// console.log(i);
// Output:0

//Q4
// let b = true;
// b++;
// console.log(b);
// Output:2

//Q5
// let i = 1, j = 2, k = 3;
// let m = i-- - j-- - k--;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);
// console.log("m=" + m);
// Output: i=0
// j=1
// k=2
// m=-4

//Q6
// let a = 1, b = 2;
// console.log(--b - ++a + ++b - --a);
// Output: 0

//Q7
// let i = 19, j = 29, k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);
// Output: i=19
//         j=29
//         k=-20

//Q8
// let i = 11;
// let j = --(i++);
// Uncaught SyntaxError: Invalid left-hand side expression in prefix operation (at testfile.js:43:11)

//Q9
// let m = 0, n = 0;
// let p = --m * --n * n-- * m--;
// console.log(p);
//Output : 1

//Q10
// let a = 1;
// a = a++ + ++a * --a - a--;
// console.log(a);
// Output : 5

//Q11
// let a = 11++;
// console.log(a);
// Uncaught SyntaxError: Invalid left-hand side expression in postfix operation (at testfile.js:59:9)

//@12
// let i = 0, j = 0;
// console.log(--i * i++ * ++j * j++);
// Output : 1

//@13
// let year = Number(prompt("Enter Year"));
// let isLeap = false;
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       isLeap = true;
//     } else {
//       isLeap = false;
//     }
//   } else {
//     isLeap = true;
//   }
// }else{
//         isLeap = false;
// }
// console.log(isLeap);

// let rating = Number(prompt("Enter Number"));
// let moviename = prompt("Enter Movie name");
// if(rating > 0 && rating <= 2){
//   alert(`${moviename} is a Flop`);
// }
// if(rating > 2 && rating <= 3.4){
//   alert(`${moviename} is a Semi-hit`);
// }
// if(rating > 3.4 && rating <= 4.5){
//   alert(`${moviename} is a Hit`);
// }
// if(rating > 4.5 && rating <= 5){
//   alert(`${moviename} is a Super Hit`);
// }

// let ISBN = Number(prompt("Enter ISBN Number"));
// let Sum = 0;
// for (var i = 9; i >= 0; i--) {
//   var oneDigit = ISBN % 10 ;
//   Sum = Sum + (i * oneDigit);
//   ISBN = Math.floor(ISBN / 10) ;
//   console.log("last digit = "+oneDigit);
//   console.log("sum digit = "+Sum);
//   console.log("remove last digit = "+ISBN);
// }
// if(Sum % 11 == 0){
//     console.log("Valid ISBN Number");
// }
// else{
//     console.log("Invalid ISBN Number")
// }




// do {
//     let menu = prompt("Enter Name / Choose a Number - 1.Starters , 2.Main Course , 3.Dessert").toLowerCase().replaceAll(' ', '');
//     switch (menu) {
//         case "1":
//         case "starters":
//             do {
//                 let starters = prompt("Enter Name / Choose a Number - 1.Paneer pakoda , 2.Samosa , 3.Garlic bread").toLowerCase().replaceAll(' ', '');
//                 switch (starters) {
//                     case "paneerpakoda":
//                     case "1":
//                         alert("Wait 5 min. we will serve your Paneer pakoda");
//                         break;
//                     case "samosa":
//                     case "2":
//                         alert("Wait 5 min. we will serve your Samosa");
//                         break;
//                     case "garlicbread":
//                     case "3":
//                         alert("Wait 5 min. we will serve your Garlic bread");
//                         break;
//                     default:
//                         alert("Invalid Input of starters...");
//                         break;
//                 }
//                 var UserInput = prompt("Kya aap wapas starters menu dekhna chahte ho? yes / no").toLowerCase();
//             } while (UserInput === "yes");
//             break;

//         case "2":
//         case "maincourse":
//             do {
//                 let maincourse = prompt("Enter Name / Choose a Number - 1.Pasta , 2.Rice , 3.Burgers").toLowerCase().replaceAll(' ', '');
//                 switch (maincourse) {
//                     case "pasta":
//                     case "1":
//                         alert("Wait 5 min. we will serve your Pasta");
//                         break;
//                     case "rice":
//                     case "2":
//                         alert("Wait 5 min. we will serve your Rice");
//                         break;
//                     case "burgers":
//                     case "3":
//                         alert("Wait 5 min. we will serve your Burgers");
//                         break;
//                     default:
//                         alert("Invalid Input of maincourse...");
//                         break;
//                 }
//                 var UserInput = prompt("Kya aap wapas maincourse menu dekhna chahte ho? yes / no").toLowerCase();
//             } while (UserInput === "yes");
//             break;

//         case "3":
//         case "dessert":
//             do {
//                 let dessert = prompt("Enter Name / Choose a Number - 1.Cheesecake, 2.Ice Cream , 3.Custards").toLowerCase().replaceAll(' ', '');
//                 switch (dessert) {
//                     case "cheesecake":
//                     case "1":
//                         alert("Wait 5 min. we will serve your Cheesecake");
//                         break;
//                     case "icecream":
//                     case "2":
//                         alert("Wait 5 min. we will serve your Ice Cream");
//                         break;
//                     case "custards":
//                     case "3":
//                         alert("Wait 5 min. we will serve your Custards");
//                         break;
//                     default:
//                         alert("Invalid Input of dessert...");
//                         break;
//                 }
//                 var UserInput = prompt("Kya aap wapas dessert menu dekhna chahte ho? yes / no").toLowerCase();
//             } while (UserInput === "yes");
//             break;

//         default:
//             alert("Invalid Input...");
//             break;
//     }
//     var UserInput = prompt("Kya aap wapas main menu dekhna chahte ho? yes / no").toLowerCase();
// } while (UserInput === "yes");

