// 1) WAP to print area of circle

/*
var radius = 5
var PI = 3.14
var Area = 0

Area = PI * radius *radius
console.log("Area = " + Area)
------------------------------
Output is. Area = 78.5
*/

// 2) WAP to 


// Math

// console.log(Math.floor(1.2))

//WAP to print area cuboid 2*(l*b +b*h + h*l)

// var ch = prompt("Enter charater: ")
// if(ch.length!=1)
//     document.write(`'${ch}' is not Valid character`)
// else{
//     if(ch>='a' && ch<='z'){
//         if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
//         document.write(`'${ch}' is lowercase vovel`)
//         else
//         document.write(`'${ch}' is lowercase consonent`)
//     }
// }
// else if(ch>='A' && ch<='Z'){
//     if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
//     document.write(`'${ch}' is Upercase vovel`)
//     else
//     document.write(`'${ch}' is Upercase consonent`)

// }
// else if(ch>=0 && ch<=9){
//     document.write(`'${ch}' is Digits`)

// }
// else if(ch ==' '){
//     document.write(`SPace`)

// }
// else{
//     document.write(`'${ch}' Spacial charecters`)

// // }

// var a = Numbar(prompt("ENter the 1st Number"))
// var b = Numbar(prompt("ENter the 2nd Number"))
// var ch = prompt("Press + for Addition \n Press - for Subtraction \n press * for multiplication \n press / for Division \n press ** for squre ")

// switch(ch){
//     case "+":
//         document.write(`${a} + ${b} = ${a+b}`)
//         break
//     case "-":
//         document.write(`${a} - ${b} = ${a-b}`)
//     case "*":
//         document.write(`${a} * ${b} = ${a*b}`)
//     case "/":
//         document.write(`${a} / ${b} = ${a/b}`)
//     case "**":
//         document.write(`${a} ** ${b} = ${a**b}`)
//     default:
//         document.write("Invalid choice..")
//         ;
// }

// loop:-

// for(var i=1;i<=10;i++){
//     console.log(`Hello world ${i}`)
// }

//  for(var i=1;i<=10;++i){
    //     console.log(`Hello world ${i}`)
    // }
    // for(var i=1;i<=10;i=i++){
    //         console.log(`Hello world ${i}`)
    //     }

    // for(var i=1;i<=10;i++);
    // {
    //          console.log(`Hello world ${i}`)
    //      }

    // for(let i=1;i<=10;i++){
    //     console.log(`Hello world ${i}`)
    // }


    // var i =1
    // for(;i<=10;)
    // {
    //     console.log(i);
    //     i++
    // }

    // var i = 1
    // for(;;)
    // {
    //     console.log(i);
    //     i++
    // }

    // var i = 1
    // for(;;)
    // {
    //     if(i>10)
    //     console.log(i)
    //     break;
    //     i++ 
    // }

    // var num = Number(prompt("enter no."))
    // for(let i = 1;i<=10;i++){
    //     document.write(`<p>${num} * ${num} = ${num*i} <br></p>`)
    // }

    // var start = Number(prompt("Enter the range start from"))
    // var end = Number(prompt("Enter End :"))

    // var sum = 0
    // for(let i = start; i<=end;i++){
    //     sum = sum+i
    // }
    // document.write(`sum = ${sum}`)

    //Fibonaci series...

    // var a = 0
    // var b = 1
    // var num = Number(prompt("Enter your fbonaci no"))
    // var sum = a + b
    // document.write(`${a} ${b}`)
    // while(sum<=num){
      
    //     document.write(`${sum}`)
    //     a = b
    //     b = sum
    //     sum = a+b
    // }

// sum of number
    // var num = Number(prompt("Enter the Number:"))
    // var sum = 0
    // while(num!=0){
    //     let r = num%10
    //     sum = sum +r
    //     num = parseInt(num/10)
    // }
    // document.write(`sum = ${sum}`)

// reverse the number

    var num = Number(prompt("Enter your num.."))
    var rev = 0 
    while(num!=0){          //123
        let r = num %10     // 3
        rev = rev*10+r      // 0 *10+3
        num = parseInt(num/10)
    }
    document.write(`reverse = ${rev}`)