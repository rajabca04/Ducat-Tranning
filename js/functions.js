/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block
 * 
 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability
 * 
 * types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter


Note1: a function can't access variables defined in other function
       directly to do so we have to use concept of arguments and
       return value
Note2: a function can access variables defines in global scope
       and vice versa not true

syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
    }
    functionName(arguments)
 */
//sample function

// function sample(){
//     console.log("In sample function")
// }
// console.log("In Main Outer Scope")
// sample()
// console.log("Back to Main Outer Scope")

//function call within function

// function fun1() {
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2() {
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3() {
//     console.log("In fun3 function")
// }
// console.log("In Main Outer Scope")
// fun1()
// console.log("Back to Main Outer Scope")


// 1. function without return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     add()
// }
// sample()


// 2. function with return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function sample(){
//     var s = add()
//     console.log(`sum = ${s}`)
// }
// sample()

// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function sample(){
//     console.log(`sum = ${add()}`)
// }
// sample()


// 3. function without return value with parameter
// function add(x,y){      //parameters or formal parameters
//     var sum = x+y
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     var a = 10
//     var b = 20
//     add(a,b)    //arguments or actual parameters
// }
// sample()


// 4. function with return value with parameter
// function add(x,y){      
//     var sum = x+y
//     return sum
// }
// function sample(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)    
//     console.log(`sum = ${s}`)
// }
// sample()

// function sumDigit(num){
//     var sum = 0
//     while(num!=0){
//         let r = num%10
//         sum = sum + r
//         num = parseInt(num/10)
//     }
//     return sum
// }
// console.log(sumDigit(123))
// console.log(sumDigit(12345))
// console.log(sumDigit(14785))
// console.log(sumDigit(9850))
// console.log(sumDigit(35754))
// console.log(sumDigit(15958))
// console.log(sumDigit(65258))
// console.log(sumDigit(98854))
// console.log(sumDigit(154555))


// function reverse(num){
//     var rev = 0
//     var n = num
//     while(num!=0){
//         rev = rev*10 + num%10
//         num = parseInt(num/10)
//     }
//     if(n==rev)
//     return `${n} is Pallindrome`
//     else
//     return `${n} is not Pallindrome`
// }
// console.log(reverse(121))
// console.log(reverse(12321))
// console.log(reverse(14785))
// console.log(reverse(9850))
// console.log(reverse(12421))
// console.log(reverse(15958))
// console.log(reverse(65258))
// console.log(reverse(98854))
// console.log(reverse(154555))


// function reverse(num){
//     var rev = 0
//     var n = num
//     while(num!=0){
//         rev = rev*10 + num%10
//         num = parseInt(num/10)
//     }
//     return rev
// }
// console.log(reverse(121)==121?`121 is Palindrom`:`121 is not palindrome`)



//default parameters

// function sample(a=0,b=0,c=0){
//     console.log(a,b,c)
// }
// sample(10,20,30)
// sample(10,20)
// sample(10)
// sample()


//function returing an Array
// function sample(){
//     return [10,20,30,40,50]
// }
// var arr = sample()
// console.log(arr)

//regular function
// function sample(){
//     console.log("In Regular Function sample")
// }
// sample()

// function add(x,y){
//     return x+y
// }
// console.log(add(10,20))

//anonymous function
// var sample = function(){
//     console.log("In Anonymous Function sample")
// }
// sample()

// var add = function(x,y){
//     return x+y
// }
// console.log(add(10,20))


//arrow function or fat arrow function
// var sample = ()=>console.log("In Fat Arrow Function sample")
// sample()

// var add = (x,y)=>x+y
// console.log(add(10,20))

//storage class
/**
var             function level
let             block level
const           block level
no keyword      global
 */


// function sample(){
//        if(true){
//               a  = 10       
//               var b = 20
//               let c = 30
//               const d = 40
//               console.log(`a = ${a} b = ${b} c = ${c} d = ${d}`)
//        }
//        console.log(`a = ${a} b = ${b}`)
// }
// sample()
// console.log(`a = ${a}`)
// function example(){
//        console.log(`In Example function a = ${a}`)       
// }
// example()


// let a = 10
// const b = 20
// a++
// b++
// console.log(a,b)


// var a = 10
// var a = 20
// console.log(a)

// let a = 10
// let a = 20
// console.log(a)

// var a = 10
// function sample(){
//        let a = 20
//        console.log(`In sample() a = ${a}`)
// }
// sample()
// console.log(`Outside sample a = ${a}`)


// for(var i = 1;i<=10;i++);
// console.log(`Hello World ${i}`)


// for(let i = 1;i<=10;i++);
// console.log(`Hello World ${i}`)





//Recursion: when function call itself

/*
function f(){ function f(){ function f(){ function f(){ function f(){}
       -----         -----         -----         -----         -----
       -----         -----         -----         -----         -----
       f()           f()           f()           f()
       -----         -----         -----         -----         -----
       -----         -----         -----         -----         -----
}               }            }            }             }

f()
*/
// let a = 0
// function sample(){
//        a++
//        console.log("In sample function")
//        if(a<5)
//        sample()
//        console.log("Back to sample function")
// }
// console.log("In main Global Scope")
// sample()
// console.log("Back to main Global Scope")



// function sample(a=0){
//        a++
//        console.log("In sample function")
//        if(a<5)
//        sample(a)
//        console.log("Back to sample function")
// }
// console.log("In main Global Scope")
// sample()
// console.log("Back to main Global Scope")


// function sample(a=1){
//        console.log("In sample function")
//        if(a<5)
//        sample(++a)
//        console.log("Back to sample function")
// }
// console.log("In main Global Scope")
// sample()
// console.log("Back to main Global Scope")


function fact(num){
       if(num<=1)
       return 1
       else
       return num*fact(num-1)
}
console.log(fact(5))
console.log(fact(10))
console.log(fact(15))
console.log(fact(7))
console.log(fact(9))