// Constant\Literals:
//     used when data is fixed
//     boolean: ture false
//     number: 10 , +10, -30, 34.54, +45.42, -45.53
//     string: 'sample' , "sample", `raja
//                                      kumar`
                                    
// Output Instruction: 
//     console.log


// var a = 10;
// var b = 10.45
// var c = 'Hello world'
// var d = "Ducat Education Noida"
// var e = `
//         Hi i am
//         raja kumar
//         `
// var f = false
// var t = true

// console.log(a,typeof(a));
// console.log(b,typeof(b));
// console.log(c,typeof(c));
// console.log(d,typeof(d));
// console.log(e,typeof(e));
// console.log(f,typeof(f));
// console.log(t,typeof(t));

// var a = 23
// var b = 48

// var sum = a + b

// console.log(a,"+",b,"=",sum)

// console.log(a+"+"+b+"="+sum)
// // Sting template litrals
// console.log(`${a} + ${b} = ${sum}`) // backtiks(``)

// WAP to print

// var p = 535555
// var r = 12.36
// var t = 5 
// var si = p*r*t/100
// var total = p +si
// var emi = total/(t*12)
// console.log("Principal Amount "+p)
// console.log("Rate             "+r)
// console.log("Time             "+t)
// console.log("Simple Interest  "+si.toFixed(2))
// console.log("Total Amount     "+total.toFixed(2))
// console.log("EMI              "+emi.toFixed(2))



// var l = 25
// var b = 12
// var h = 10
// var area = 2*(l*b + b*h + h*l)

// console.log("Area of Cuboid = " + area)

// var a = 25 
// var b = 75
// console.log(`Before swapping a = ${a} and b = ${b}`)
// var temp = a
// a = b
// b = temp
// console.log(`After swapping a = ${a} and b = ${b}`)

// a = a+b
// b = a-b
// a = a-b
// console.log(`Swapping without 3rd variable a = ${a} and b = ${b}`)
// console.log("Success!!!")
// console.warn("warnning !!!")
// console.error("Error here !!!")

// var a = prompt("Enter the first no.")
// document.write(`<h2>a = ${a} and typeof = ${typeof(a)}</h2>`)


// var p = Number(prompt("Enter the Priciple amount : "))
// var r = Number(prompt("Enter the Rate :"))
// var t = Number(prompt("Enter the Total time in years :"))
// var si = p*r*t/100
// var total = p+si
// var emi = total/(t*12)

// document.write(`
// <h2>Principle Amount = ${p} <br>
//     Rate = ${r} <br>
//     Time = ${t} <br>
//     si = ${si}  <br>
//     total = ${total} <br>
//     EMI = ${emi}</h2>`) 

// var a = 15*4/20*15%25/5%7*10%15*3-55%75/3*10*(6*2**6)
// console.log(a)
// console.log(15+5)
// console.log(15+"5")
// console.log(15+"Hello world")
// console.log("5"+15)
// console.log("5"-15)
// console.log(5-"15")
// console.log("5"-"15")
// console.log(5-"Hello world") // NaN
// console.log("Hello I am raja kumar sharma form Noida...");



// Logical operators:

// 0 , null , undefined , " "  these all are false and remaining is true..

// console.log(10 && 20)  // true i.e 20
// console.log(10 && 0)    // false i.e 0
// console.log(0 && 20)    // false i.e 20
// console.log(0 && 0)    // false i.e 0
// console.log(" " && " ")    // false i.e empty string

// console.log(10 || 20); // true i.e 20
// console.log(10 || 0);  // true i.e 10
// console.log(0 || 20 ); // true i.e 20
// console.log(0 || 0);  // false  i.e 0
// console.log(10 || " "); // false i.e empty
// console.log(0 || " "); // false i.e 0

// console.log(!10);  // false -> oposite
// console.log(!0);    // true

// Bitewise Operator 

// let no = 10
// if(no%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }


// Q1. Wap to check whether no. equal or not.

// var a = Number(prompt("Enter your 1st no."))
// var b = Number(prompt("Enter 2nd no."))

// if(a==b)
//     document.write(`${a} And ${b} is equal.`)
// else
//     document.write("No. is not equal")

// Q2. Wap to check no. is parfact squre or not.

// var a = 2.55

// // var psqr = Math.sqrt(a)

// console.log(a,typeof(a));

// // console.log(psqr);

// Q3. WAP to check whether a parson can be vote or not

        // var parsonAge = Number(prompt("Enter your age.."))

        // if(parsonAge >= 18){
        //         document.write(`Congretulation..! 
        //         You can vote`)
        // }
        // else{
        //         document.write("Sorry you can't vote...!")
        // }

// Q4. WAP to check whether a Entered charactor is LowerCase vovel, UperCase vovel, LowerCase consonent, UperCase consonent , digits , space and spacial chractor.



var a = Numbar(prompt("ENter the 1st Number"))
var b = Numbar(prompt("ENter the 2nd Number"))
var ch = prompt("Press + for Addition \n Press - for Subtraction \n press * for multiplication \n press / for Division \n press ** for squre ")

switch(ch){
    case "+":
        document.write(`${a} + ${b} = ${a+b}`)
        break
    case "-":
        document.write(`${a} - ${b} = ${a-b}`)
    case "*":
        document.write(`${a} * ${b} = ${a*b}`)
    case "/":
        document.write(`${a} / ${b} = ${a/b}`)
    case "**":
        document.write(`${a} ** ${b} = ${a**b}`)
    default:
        document.write("Invalid choice..")
}

