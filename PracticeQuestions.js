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
