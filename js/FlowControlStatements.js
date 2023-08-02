/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */
// if(10){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if(!10){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

/*
if else Statement: used when execution of one Statement Block out of two Statement block depend on a condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */

// var num = Number(prompt("Enter the Number : "))
// if(num%2==0)
// document.write(`${num} is Even`)
// else
// document.write(`${num} is Odd`)

/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */
// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// if(a<b){
//     if(a<c)
//     document.write(`${a} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }
// else{
//     if(b<c)
//     document.write(`${b} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }



/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var c = Number(prompt("Enter the Third Number : "))
// var d = Number(prompt("Enter the Fourth Number : "))
// var e = Number(prompt("Enter the Fifth Number : "))
// if(a>=b && a>=c && a>=d && a>=e)
// document.write(`${a} is Greatest`)
// else if(b>=c && b>=d && b>=e)
// document.write(`${b} is Greatest`)
// else if(c>=d && c>=e)
// document.write(`${c} is Greatest`)
// else if(d>=e)
// document.write(`${d} is Greatest`)
// else
// document.write(`${e} is Greatest`)


// var ch = prompt("Enter the Character : ")
// if(ch.length!=1)
// document.write(`'${ch}' is not Valid Character`)
// else{
//     if(ch>='a' && ch<='z'){
//         if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
//         document.write(`'${ch}' is Lower Case Vowel`)
//         else
//         document.write(`'${ch}' is Lower Case Consonant`)
//     }
//     else if(ch>='A' && ch<='Z'){
//         if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
//         document.write(`'${ch}' is Upper Case Vowel`)
//         else
//         document.write(`'${ch}' is Upper Case Consonant`)
//     }
//     else if(ch>='0' && ch<='9')
//     document.write(`'${ch}' is Digit`)    
//     else if(ch==' ')
//     document.write(`Space`)
//     else 
//     document.write(`'${ch}' is Special Character`)
// }



/*
Switch Case Statement:
    used to make a menu based program
syntax:
    switch(input){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */

// var num = Number(prompt("Enter the Day Number : "))
// switch (num) {
//     case 1:
//         document.write("Monday")
//         break
//     case 2:
//         document.write("Tuesday")
//         break
//     case 3:
//         document.write("Wednesday")
//         break
//     case 4:
//         document.write("Thursday")
//         break
//     case 5:
//         document.write("Friday")
//         break
//     case 6:
//         document.write("Saturday")
//         break
//     case 7:
//         document.write("Sunday")
//         break
//     default:
//         document.write("Invalid Choice")
// }


// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// var ch = prompt("Press + for Additiion\nPress - for Subtraction\nPress * for Multiplication\nPress % for Remainder\nPress / for Divison\nPress ** for Power\nEnter Your Choice : ")
// switch (ch) {
//     case "+":
//         document.write(`${a} + ${b} = ${a + b}`)
//         break
//     case "-":
//         document.write(`${a} - ${b} = ${a - b}`)
//         break
//     case "*":
//         document.write(`${a} * ${b} = ${a * b}`)
//         break
//     case "/":
//         document.write(`${a} / ${b} = ${a / b}`)
//         break
//     case "%":
//         document.write(`${a} % ${b} = ${a % b}`)
//         break
//     case "**":
//         document.write(`${a} ** ${b} = ${a ** b}`)
//         break
//     default:
//         document.write("Invalid Choice")
// }


/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation)
    {
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */

// for(var i=1;i<=10;i++){
//     console.log(`Hello World ${i}`)
// }

// for(var i=1;i<=10;++i){
//     console.log(`Hello World ${i}`)
// }


// for(var i=1;i<=10;i=++i){
//     console.log(`Hello World ${i}`)
// }


// for(var i=1;i<=10;i=i++){
//     console.log(`Hello World ${i}`)
// }

// for(var i=1;i<=10;i++);
// {
//     console.log(`Hello World ${i}`)
// }

// for(let i=1;i<=10;i++);
// {
//     console.log(`Hello World ${i}`)
// }

// var i=1
// for(;;)
// {
//     if(i>10)
//     break
//     console.log(`Hello World ${i}`)
//     i++
// }

// var num = Number(prompt("Enter the Number : "))
// for(let i=1;i<=10;i++){
//     document.write(`<p>${num} * ${i} = ${num*i}</p>`)
// }

// var start = Number(prompt("Enter the Range Start From : "))
// var end = Number(prompt("End : "))
// var sum = 0
// for(let i=start;i<=end;i++){
//     sum = sum+i
// }
// document.write(`sum = ${sum}`)

/* 
start = 10
end = 20
i           =   10  11  12  13  14  15
sum = 0     =   10  21  33  46  60  75.......
*/


/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// for(let i=1;i<=num/2;i++){
//     if(num%i==0)
//     sum = sum+i
// }
// if(sum==num)
// document.write(`${num} is Perfect Number`)
// else
// document.write(`${num} is not a Perfect Number`)

/*
num = 28
i           =1      2       3       4       5       6       7       8       9       10      11      12      13      14      15(loop end)
num%i==0    =True   True    False   True    False   False   True    False   False   False   False   False   False   True
sum=0       =0+1=1  1+2=3           3+4=7                   7+7=14                                                  14+14=28
*/

// var num = Number(prompt("Enter the Number : "))
// var flag = false
// for(let i=2;i<=num**0.5;i++){
//     if(num%i==0){
//         flag=true
//         break
//     }
// } 
// if(flag==false && num>=2)
// document.write(`${num} is Prime`)
// else
// document.write(`${num} is not Prime`)



/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */

// var i = 1
// while(i<=10){
//     console.log(`Hello World ${i}`)
//     i++
// }

//fibonacci Series
//0 1 1 2   3   5   8   13  21  34  55  89  144....

// var a = 0
// var b = 1
// var num = Number(prompt("Enter the Last Term Range of Fibonacci Series : "))
// var sum = a+b
// document.write(`${a} ${b} `)
// while(sum<=num){
//     document.write(`${sum} `)
//     a = b
//     b = sum
//     sum = a+b
// }
/*
num = 100   
a       =0  1   1   2   3   5   8   13  21  34  55
b       =1  1   2   3   5   8   13  21  34  55  89
sum     =1  2   3   5   8   13  21  34  55  89  144
op:0 1  1   2   3   5   8   13  21  34  55  89
 */
// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// while(num!=0){              //12345 1234    123     12      1       0
//     let r = num%10          //5     4       3       2       1
//     sum = sum+r             //0+5=5 5+4=9   9+3=12  12+2=14 14+1=15
//     num = parseInt(num/10)  //1234  123     12      1       0
// }
// document.write(`sum = ${sum}`)

// var num = Number(prompt("Enter the Number : "))
// var rev = 0
// while (num != 0) {              //124       12          1           0
//     let r = num % 10          //4         2           1
//     rev = rev * 10 + r          //0*10+4=4  4*10+2=42   42*10+1=421
//     num = parseInt(num / 10)  //12        1           0
// }
// document.write(`Reverse = ${rev}`)


/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
*/

// var n = Number(prompt("Enter the Number : "))//9
// var num = n * n           //81
// var sum = 0
// while (num != 0) {        //81      8       0
//     let r = num % 10      //1       8
//     sum = sum + r         //0+1=1   1+8=9
//     num = parseInt(num/10)//8       0
// }
// if(n==sum)
// document.write(`${n} is Neon Number`)
// else
// document.write(`${n} is not a Neon Number`)

// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// var n = num             //407       
// while(num!=0){          //407       40              4           0
//     let r = num%10      //7         0               4
//     sum = sum+r**3      //0+343=343 343+0**3=343    343+4**3=407
//     num = parseInt(num/10)//40      4               0
// }     
// if(n==sum)
// document.write(`${n} is Armstrong Number`)
// else
// document.write(`${n} is not Armstrong Number`)


// var num = Number(prompt("Enter the Number : "))
// var sum = 0
// var rev = 0
// var n = num 
// while(num!=0){          //1729  172     17      1       0
//     let r = num%10      //9     2       7       1
//     sum = sum + r       //0+9=9 9+2=11  11+7=18 18+1=19
//     num = parseInt(num/10)//172 17      1       0
// }
// num = sum               //19
// while(num!=0){          //19        1           0
//     let r = num%10      //9         1
//     rev = rev*10+r      //0*10+9=9  9*10+1=91
//     num = parseInt(num/10)//1       0
// }
// if(sum*rev==n)
// document.write(`${n} is Magical Number`)
// else
// document.write(`${n} is not a Magical Number`)



/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
*/

// var i = 1
// do{
//     console.log(`Hello World ${i}`)
//     i++
// }while(i<=10)

// do {
//     let a = Number(prompt("Enter the First Number : "))
//     let b = Number(prompt("Enter the Second Number : "))
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
//     switch (ch) {
//         case "+":
//             console.log(`${a} + ${b} = ${a + b}`)
//             break
//         case "-":
//             console.log(`${a} - ${b} = ${a - b}`)
//             break
//         case "*":
//             console.log(`${a} * ${b} = ${a * b}`)
//             break
//         case "/":
//             console.log(`${a} / ${b} = ${a / b}`)
//             break
//         case "%":
//             console.log(`${a} % ${b} = ${a % b}`)
//             break
//         case "**":
//             console.log(`${a} ** ${b} = ${a ** b}`)
//             break
//         default:
//             console.log(`Invalid Choice`)
//     }
//     ch = prompt("Press n to Exit\nPress any other key to Continue : ")
// }while(ch!='n')


/*
Nested loops:
Loops within Loops:
 */

// for(let num=1;num<=20;num++){
//     console.log(`Table of ${num} is`)
//     for(let i=1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }



//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
//5. WAP to print and count all prime Numbers in a range


// for(let num=1;num<=10000;num++){
//     let sum = 0
//     for(let i=1;i<=num/2;i++){
//         if(num%i==0)
//         sum = sum+i        
//     }
//     if(sum==num){
//         console.log(num)
//     }
// }


// var start = Number(prompt("Enter the Range\nStart From : "))
// var end = Number(prompt("To : "))
// var count = 0
// for(let num=start;num<=end;num++){
//     let flag = false
//     for(let i=2;i<=num**0.5;i++){
//         if(num%i==0){
//             flag = true
//             break
//         }
//     }
//     if(flag == false && num>=2){
//         document.write(`${num} `)
//         count++
//     }
// }
// document.write(`<br>Total Prime Numbers = ${count}`)

var start = Number(prompt("Enter the Range\nStart From : "))
var end = Number(prompt("End : "))
var count = 0
for (let i = start; i <= end; i++) {
    let num = i
    let rev = 0
    while (num != 0) {
        let r = num % 10
        rev = rev * 10 + r
        num = parseInt(num / 10)
    }
    if(i==rev){
        count++
        document.write(`${i} `)
    }
}
document.write(`<br>Total Palindrome Numbers = ${count}`)



/*
Star Paterns
*****
*****
*****
*****
*****
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// /*
// 12345
// 12345
// 12345
// 12345
// 12345
//  */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
11111
22222
33333
44444
55555

 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${i}`)
//     }
//     console.log()
// }

// /*
// 12345
// 23456
// 34567
// 45678
// 56789
//  */
// for(let i=1;i<=5;i++){
//     for(let j=i;j<=4+i;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
98765
87654
76543
65432
54321
 */
// for(let i=9;i>=5;i--){
//     for(let j=i;j>=i-4;j--){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }


// /*
// Star Paterns
// *
// **
// ***
// ****
// *****
// */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

// /*
// Star Paterns
// 1
// 12
// 123
// 1234
// 12345
// */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
Star Paterns
1
22
333
4444
55555
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i}`)
//     }
//     console.log()
// }


/*
Star Paterns
1
23
345
4567
56789
*/
// for(let i=1;i<=5;i++){
//     for(let j=i;j<=2*i-1;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }