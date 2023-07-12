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


// Classroom notes here..

//console.log("Hello World");

/*
JavaScript Basics:
    1. Keywords
    2. Identifier
    3. Data Types
    4. Variables
    5. Constant/Literals
    6. Tokens
    7. Input/Output
    8. Operator

    keywords: reserved words
    abstract	arguments	await*	boolean
    break	byte	case	catch
    char	class*	const	continue
    debugger	default	delete	do
    double	else	enum*	eval
    export*	extends*	false	final
    finally	float	for	function
    goto	if	implements	import*
    in	instanceof	int	interface
    let*	long	native	new
    null	package	private	protected
    public	return	short	static
    super*	switch	synchronized	this
    throw	throws	transient	true
    try	typeof	var	void
    volatile	while	with	yield

    Identifiers:
        name of programming entities like variables,functions,
        objects,classes etc
    
    Rules of Identifiers:
        1. we can't use any keywords
        2. we can't use any digit as prefix of identifier
           but we can use digit in postix
        3. We can't use any special character except underscore
        4. We can't use same name for more the one item of same
           Statement block
    
    Data Types:
    Number : any whole or fractional number like 
             10 25.36 -25.35 -50 +25.36 +25
    String : Collection of Characters
             like 'sample' "example" `hjghfhgfhg`
    boolean : true false
    --------------------------------------------
    null
    undefined
    object
    bigint
    array

    Data Representation:
    1. Variable:
        used when data is not fixed
        variables are names of memory locations in RAM which 
        contains some informations
        or
        variables are placeholder for data in RAM
        or 
        variables are data containers
        syntax:
            var variableName=value;     //function level
            let variableName=value;     //block level
            const variableName=value;   //block level and read
                                        // only
    2. Constant\Literals:
        used when data is fixed
        boolean: true false
        number : 10 +20 -25 15.36 +25.25 -65.25
        string : 'sample' "sample" 
                    `fdfdf
                    fdfdfdf
                    `
 */


/*
    Tokens:
    smallest Entity of any program like identifiers,
    constants,keywords, operators, punctuators(, space
        : ; [] () {} etc)
    
    var a=10;
    var     =>  keyword
    a       =>  identifier(variable)
    =       =>  operator
    10      =>  constant
    ;       =>  punctuator
 */

/*
Output Instrucions:
console.log(): used as output instructions
*/

// var a = 10
// var b = 15.36
// var c = 'Hello World'
// var d = "Ducat Education Noida"
// var e = `
//         Hi
//             My name is Nitin Chauhan
//         `
// var f = true
// var g = false
// console.log(a,typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// console.log(e,typeof(e))
// console.log(f,typeof(f))
// console.log(g,typeof(g))


// var a = 10
// var b = 20
// var sum = a+b
// console.log(a,"+",b,"=",sum)
// console.log(a+" + "+b+" = "+sum)
// console.log(`${a} + ${b} = ${sum}`)  //string template literal
 
// var p = 535555
// var r = 12.36
// var t = 5
// var si = p*r*t/100
// var total = p+si
// var emi = total/(t*12)
// console.log("Principal Amount "+p)
// console.log("Rate             "+r)
// console.log("Time             "+t)
// console.log("Simple Interest  "+si.toFixed(2))
// console.log("Total Amount     "+total.toFixed(2))
// console.log("EMI Amount       "+emi.toFixed(2))


// var p = 535555
// var r = 12.36
// var t = 5
// var si = p*r*t/100
// var total = p+si
// var emi = total/(t*12)
// console.log(`
//              Principal Amount = ${p}
//              Rate             = ${r}
//              Time             = ${t}
//              Simple Interest  = ${si.toFixed(2)}
//              Total Amount     = ${total.toFixed(2)}
//              EMI Amount       = ${emi.toFixed(2)}`)

/*
Math.floor()    :   it return floor value
                    eg. Math.floor(1.2) i.e 1
                    eg. Math.floor(1.99999) i.e 1
Math.ceil()     :   it return ceil value
                    eg. Math.ceil(1.2) i.e 2
                    eg. Math.ceil(1.99999) i.e 2
Math.round()    :   it return round off value
                    eg. Math.round(1.2) i.e 1
                    eg. Math.round(1.99999) i.e 2
                    
Number()        :   it convert input value into number
parseInt()      :   it convert input value into int
parseFloat()    :   it convert input value into float
 */

// console.log(Math.floor(1.2))
// console.log(Math.floor(1.999999))
// console.log(Math.floor(-1.999999))

// console.log(Math.ceil(1.2))
// console.log(Math.ceil(1.999999))
// console.log(Math.ceil(-1.999999))

// console.log(Math.round(1.2))
// console.log(Math.round(1.999999))
// console.log(Math.round(-1.999999))


/*
WAP to print area of circle     :   area=3.14*r*r
WAP to print area of Rectangle  :   area=l*b
WAP to print area of cuboid     :   2*(l*b + b*h + h*l)
WAP to print area of Right Angle Triangle   :   area =(base*height)/2
WAP to print area of Square     :   area = side*side
WAP to swap value of two variables
WAP to calculate temp. in F from C i.e f =  c*9/5+32
WAP to calculate temp. in C from F i.e c =  (f-32)*5/9
 */


// var l = 25
// var b = 12
// var h = 10
// var area = 2*(l*b + b*h + h*l)
// console.log("Area of Cuboid = "+area)

// var a = 25
// var b = 75
// console.log(`Before Swapping a = ${a} and b = ${b}`)
//                 //a=25  b=75
// var temp = a    //a=25  b=75    temp=25
// a=b             //a=75  b=75    temp=25
// b=temp          //a=75  b=25    temp=25
// console.log(`After Swapping a = ${a} and b = ${b}`)

// var a = 25
// var b = 75
// console.log(`Before Swapping a = ${a} and b = ${b}`)
//             //a=25  b=75
// a=a+b       //a=100 b=75
// b=a-b       //a=100 b=25
// a=a-b       //a=75 b=25

// console.log(`After Swapping a = ${a} and b = ${b}`)

// console.log("Hello World!!!")
// console.warn("Hello World!!!")
// console.error("Hello World!!!")
// document.write("<h1>Hello World!!!</h1>")

//Input Instruction

// var a = Number(prompt("Enter the First Number : "))
// document.write(`a = ${a} and typeof a = ${typeof(a)}`)

var p = Number(prompt("Enter the Principal Amount : "))
var r = Number(prompt("Enter the Rate : "))
var t = Number(prompt("Enter the Total Time in Years : "))
var si = p*r*t/100
var total = p+si
var emi = total/(t*12)
document.write(`
             Principal Amount = ${p}<br>
             Rate             = ${r}<br>
             Time             = ${t}<br>
             Simple Interest  = ${si.toFixed(2)}<br>
             Total Amount     = ${total.toFixed(2)}<br>
             EMI Amount       = ${emi.toFixed(2)}`)