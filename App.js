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

// Find the Sum of Even Digits in a Number
// let inputnum = Number(prompt("Enter a number"));
// let numLength = inputnum.toString().length;
// let sum = 0 ;
// for (let i = 0; i < numLength; i++) {
//     var lastDigit = inputnum % 10 ;
//     inputnum = Math.floor(inputnum / 10) ;
//     if(lastDigit % 2 == 0) {
//         sum = sum + lastDigit;
//     }
// }
// console.log(sum);

// Find the Largest Digit in a Number
// let inputnum = Number(prompt("Enter a number"));
// let numLength = inputnum.toString().length;
// let greaterNum = 0 ;
// for (let i = 0; i < numLength; i++) {
//     var lastDigit = inputnum % 10 ;
//     inputnum = Math.floor(inputnum / 10) ;
//     if(lastDigit > greaterNum) {
//         greaterNum = lastDigit;
//     }
// }
// console.log(greaterNum);

// let inputnum = Number(prompt("Enter a number"));
// let numLength = inputnum.toString().length +1;
// let sum = 0 ;
// for (let i = numLength ; i > 0; i--) {
//     var lastDigit = inputnum % 10 ;
//     inputnum = Math.floor(inputnum / 10) ;
//     sum += (lastDigit * i);
//     console.log(sum);
// }
// if (sum % 11 == 0) console.log("Valid ISBN");
// else console.log("Invalid ISBN");

// let num = "02013145%";
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i] * (i+1);
// }
// if (sum % 11 == 0) console.log("Valid ISBN");
// else console.log("Invalid ISBN");

// Harshad Number
// let inputnum = Number(prompt("Enter a number"));
// let copy = inputnum;
// let sum  = 0;
// for (let i = 0; i < inputnum.toString().length +1 ; i++) {
//     var lastDigit = inputnum % 10 ;
//     inputnum = Math.floor(inputnum / 10) ;
//     sum += lastDigit;
// }
// if (copy % sum == 0) console.log("Harshad Number");
// else console.log("Not a Harshad Number");

//Ques 4. Perfect Square
// let inputnum = Number(prompt("Enter a number"));
// let squaredigit = Math.sqrt(inputnum); //
// let copy = Math.floor(squaredigit);
// if(squaredigit == copy) console.log("Perfect Square");
// else console.log("Not a Perfect Square");

//5. Abundant Number
// let inputnum = Number(prompt("Enter a number"));
// let sum = 0;

// for (let i = 1; i < inputnum; i++) {
//     if (inputnum % i === 0) {
//         sum += i;
//     }
// }
// if(inputnum < sum) console.log("Abundant Number");
// else console.log("Not a Abundant Number");

// 6.Fibonacci Series using Loop
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;
// let Fibonacci ='';
// for (let i = 1; i <= number; i++) {
//     Fibonacci += n1;
//     Fibonacci += " ";
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// console.log(Fibonacci);

//10. Neon Number
// let number = parseInt(prompt('Enter the number'));
// let numlenght = number.toString().length + 1;
// let sum = 0;
// let square = Math.pow(number,2);
// for (let i = 0; i <= numlenght ; i++) {
//     let lastDigit = square % 10;
//     square = Math.floor(square/10);
//     sum += lastDigit;
// }
// if(number == sum)console.log("Neon Number");
// else console.log("Not a Neon Number");

// 9.Calculate Area using Switch Statement
// let input = prompt(
// "Enter a Number / Choose Shape - (1.circle, 2.rectangle, or 3.triangle)"
// )
// .toLowerCase()
// .replaceAll(" ", "");
// switch (input) {
// case "1":
// case "circle":
//     let radius = Number(prompt("Enter circle radius"));
//     let AreaofCircle = Math.PI * Math.pow(radius, 2);
//     console.log("Area of circle = " + AreaofCircle);
//     break;
// case "2":
// case "rectangle":
//     let lenght = Number(prompt("Enter lenght of rectangle"));
//     let width = Number(prompt("Enter width of rectangle"));
//     let AreaofRectangle = lenght * width;
//     console.log("Area Of Rectangle = " + AreaofRectangle);
//     break;
// case "3":
// case "triangle":
//     let base = Number(prompt("Enter base of triangle"));
//     let height = Number(prompt("Enter height of triangle"));
//     let AreaofTriangle = (1 / 2) * (base * height);
//     break;

// default:
//     console.log("Input is Invalid");
//     break;
// }

//15. Number of Days in a Month
// let month = Number(prompt("Enter month number from 1 to 12"));
// let year = Number(prompt("Enter year in numbers"));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 11:
//   case 12:
//     console.log("There are 31 days in your select month number");
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 10:
//     console.log("There are 30 days in your select month number");
//     break;

//   case 2:
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 console.log("29 Days in your selected month number");
//             } else {
//                 console.log("28 Days in your selected month number");
//             }
//         } else {
//             console.log("29 Days in your selected month number");
//         }
//     } else {
//         console.log("28 Days in your selected month number");
//     }
//     break;

//   default:
//     console.log("Input is Invalid");
//     break;
// }

// 11.Sum of Even Indexed Fibonacci Numbers
// let number = parseInt(prompt('Enter the number of terms: '));
// let copy = 2*number;
// let n1 = 0, n2 = 1, nextTerm;
// let evenindex = 0;
// for (let i = 0; i <= 2 * number; i++) {
//     if(copy % 2 == 0){
//         evenindex += n1;
//     }
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     copy--;
// }
// console.log(evenindex);

// Q2. HCF/GCD
// let a = 12 , b = 18;
// let HCF ;
// for(let i = 1 ; i <= a && i <=b ; i++){
//     if(a % i === 0 && b % i === 0){
//         HCF = i;
//     }
// }
// console.log(HCF);

// let n = 7;
// let copy = n;
// let square = n*n;
// let counter = 0;
// while(n>0){
//     counter++;
//     n = Math.floor(n/10);
// }
// let check = square % Math.pow(10,counter)
// console.log(check);
// if(check == copy) console.log("Yes");
// else console.log("No");

// let rev = 0;
// let n = 146;
// while(n>0){
//     let rem = n % 10;
//     rev = (rev*10)+rem;
//     n = Math.floor(n / 10);
// }

// tringle print
// for(let i = 1 ; i <= n ; i++){
//     for(let j = 1 ; j <= n - i ; j++){
//       process.stdout.write(" ");
//     }
//      for(let j = 1 ; j <= i ; j++){
//       process.stdout.write(" *");
//     }
//     console.log();
// }

// let n = 5;
// for(let i = 1 ; i <= n ; i++){
//     for(let j = 1 ; j <= n - i ; j++){
//       process.stdout.write("_ ");
//     }
//      for(let j = 1 ; j <= i ; j++){
//       process.stdout.write("* ");
//     }
//     console.log();
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= (n*2)-1; j++) {
//     if (i == j || i+j == n*2 ){
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

