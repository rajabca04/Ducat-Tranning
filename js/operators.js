/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Category: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */
// var a = 10*3%20*5/25*50%70/10*7%30+45%55/9*5*(5*2**5)%20*3
// console.log(a)

/*
10*3%20*5/25*50%70/10*7%30+45%55/9*5*(5*2**5)%20*3
10*3%20*5/25*50%70/10*7%30+45%55/9*5*(5*32)%20*3
10*3%20*5/25*50%70/10*7%30+45%55/9*5*160%20*3
30%20*5/25*50%70/10*7%30+45%55/9*5*160%20*3
10*5/25*50%70/10*7%30+45%55/9*5*160%20*3
50/25*50%70/10*7%30+45%55/9*5*160%20*3
2*50%70/10*7%30+45%55/9*5*160%20*3
100%70/10*7%30+45%55/9*5*160%20*3
30/10*7%30+45%55/9*5*160%20*3
3*7%30+45%55/9*5*160%20*3
21%30+45%55/9*5*160%20*3
21+45%55/9*5*160%20*3
21+45/9*5*160%20*3
21+5*5*160%20*3
21+25*160%20*3
21+4000%20*3
21+0*3
21+0
21
*/

// var a = 15*4/20*15%25/5%7*10%15*3-55%75/3*10*(6*2**6)
// console.log(a)


// var a = 15*4/20*15%25/5%7*10%15-55%75/3*(6*2**4)
// console.log(a)


// console.log(15+6)
// console.log(15+"6")
// console.log("15"+6)
// console.log("15"+"6")
// console.log(15+"Hello World")


// console.log(15-6)
// console.log(15-"6")
// console.log("15"-6)
// console.log("15"-"6")
// console.log(15-"Hello World")

// console.log(15*6)
// console.log(15*"6")
// console.log("15"*6)
// console.log("15"*"6")
// console.log(15*"Hello World")

// console.log(15/6)
// console.log(15/"6")
// console.log("15"/6)
// console.log("15"/"6")
// console.log(15/"Hello World")

// console.log(15%6)
// console.log(15%"6")
// console.log("15"%6)
// console.log("15"%"6")
// console.log(15%"Hello World")

// console.log(15**6)
// console.log(15**"6")
// console.log("15"**6)
// console.log("15"**"6")
// console.log(15**"Hello World")
/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

Category: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check value and data type both)
 */
// console.log(10<20)
// console.log(10<2)
// console.log(10<10)

// console.log(10<=20)
// console.log(10<=2)
// console.log(10<=10)


// console.log(10>20)
// console.log(10>2)
// console.log(10>10)

// console.log(10>=20)
// console.log(10>=2)
// console.log(10>=10)

// console.log(10!=10)
// console.log(10!="10")
// console.log(10!=20)


// console.log(10!==10)
// console.log(10!=="10")
// console.log(10!==20)


// console.log(10==10)
// console.log(10=="10")
// console.log(10==20)


// console.log(10===10)
// console.log(10==="10")
// console.log(10===20)

/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true
 */


/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
 */

// var a = 59
// var b = 83
// var c = a&b
// var d = a|b
// var e = a^b
// console.log(c,d,e)

/*
a = 35  :   0   1   0   0   0   1   1   
b = 73  :   1   0   0   1   0   0   1
-------------------------------------------
c=a&b   :   0   0   0   0   0   0   1
            64  32  16  8   4   2   1
            -------------------------------
            0   0   0   0   0   0   1=>1
-------------------------------------------
d=a|b   :   1   1   0   1   0   1   1
            64  32  16  8   4   2   1
            -------------------------------
            64  32  0   8   0   2   1=>107
--------------------------------------------
e = a^b :   1   1   0   1   0   1   0
            64  32  16  8   4   2   1
            -------------------------------
            64  32  0   8   0   2   0=>106
 */


/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */
// console.log(10<<6)      //640
// console.log(15<<6)      //960
// console.log(150<<3)     //1200
// console.log(1500<<4)    //24000

// console.log(1500>>5)       //46
// console.log(2500>>10)         //2




/*
Bitwise Negation Operator:
                    ~
                    (-x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/
// var a  = 20
// var b = -30
// console.log(~a)
// console.log(~b)
// console.log(-a)
// console.log(-b)




/*

Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */

// var a = Number(prompt("Enter the Number : "))
// a%2==0?document.write(`${a} is Even`):document.write(`${a} is Odd`)

// var num = Number(prompt("Enter the Number : "))
// var n = parseInt(Math.sqrt(num))
// n*n==num?document.write(`${num} is Perfect Square Number`):document.write(`${num} is not a Perfect Square Number`)

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// a^b?document.write("Both are Not Same"):document.write("Both are Same")

// var num = Number(prompt("Enter the Number : "))
// num&1?document.write(`${num} is Odd`):document.write(`${num} is Event`)

/*
Math.pow()  :   used to get Power Of any Number
                eg. Math.pow(2,3)   i.e 8
Math.sqrt() :   used to get sqrt of any number
                eg. Math.sqrt(25)   i.e 5
                eg. Math.sqrt(10)   i.e 3.33
 */ 

/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */

// var a = 10
// var b = a++     //b=10  a=11
// var c = ++a     //a=12  c=12
// var d = --a     //a=11  d=11
// var e = a--     //e=11  a=10
// --a             //9
// a--             //8
// console.log(a,b,c,d,e)

// var a = 10
// var b = a++ + ++a
// console.log(a,b)


// var a = 10
// var b = a-- - a--
// var c = a-- + --a - b++ - ++b
// console.log(a,b,c)


// var a = 10
// var b = --a + --a
// var c = ++a - a-- + b-- - b--
// console.log(a,b,c)


var a = 10
var b = ++a - a - a--
var c = a++ - ++a -a  - b++ - b-- + b
var d = a--  - b++ + c-- 
console.log(a,b,c,d)
