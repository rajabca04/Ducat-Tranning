/*
    String: collection of Characters or Sequence of Characters or
            array of Characters

            Imutable Data Type
 */
//String Constant
// var a = "JavaScript"
// var b = 'Ducat Education'
// var c = `
// Hello World1
// Hello World2
// Hello World3
//         `
// console.log(a)
// console.log(b)
// console.log(c)


//String using Loops
var a = "Javascript is a Scripting Language"

// //string using for Loop
// for(let i=0;i<a.length;i++)
// console.log(a[i])

// //string using while Loop
// let i=0
// while(i<a.length){
//     // console.log(a[i])
//     process.stdout.write(`${a[i]} `)
//     i++
// }

// //string using while Loop
// let i=0
// do{
//     // console.log(a[i])
//     process.stdout.write(`${a[i]} `)
//     i++
// }while(i<a.length);


// //string using for in loop
// for(let i in a){
//     process.stdout.write(`${a[i]} `)
// }

//string using for of loop
// for(let i of a){
//     process.stdout.write(`${i} `)
// }

//string methods
//charAt() return character at any specific index
// console.log(a[0])
// console.log(a.charAt(0))
// console.log(a[1])
// console.log(a.charAt(1))


/*
charCodeAt(): return Unicode of first character of String if no 
              argument is provided but if argument is provided it 
              return unicode of specific indexed value
// console.log(a.charCodeAt());
/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/

// for(let i in a){
//     console.log(`${a[i]} = ${a.charCodeAt(i)}`)
// }    

/*
fromCharCode(): convert a Unicode into Character
 */

// for(let i=0;i<=1112000;i++){
//     document.write(`${i} = ${String.fromCharCode(i)} `)
// }


/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not
                  it return true of false
*/

// console.log(a.indexOf("i"))
// console.log(a.indexOf("I"))

// console.log(a.lastIndexOf("i"))
// console.log(a.lastIndexOf("I"))


// console.log(a.search("i"))
// console.log(a.search("I"))

// console.log(a.includes("i"))
// console.log(a.includes("I"))


// Copy a string into another
// var b = a
// console.log(b)


//concat() : concat one or more strings in a string
// var a = "Ducat"
// var b = "Education"
// var c = "Noida"
// var d = a+b+c
// var e = a.concat(b,c)
// console.log(d)
// console.log(e)



/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/

// var a = prompt("Enter the String : ")
// if(a.startsWith("https://www."))
// document.write(`'${a}' is a Web URL`)
// else if(a.endsWith("@gmail.com"))
// document.write(`'${a}' is a Gmail Id`)
// else
// document.write(`'${a}' is a Normal String`)





//toUpperCase()
//toLocaleUpperCase()

//toLowerCase()
//toLocaleLowerCase()

// console.log(a)
// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())
// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())


//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters
//slice()

// console.log(a)
// console.log(a.substr(10,15))
// console.log(a.substring(10,15))
// console.log(a.slice(10,15))
// console.log(a.slice(15))
// console.log(a.slice(-15))




//repeat()  :   create number of copies of a string
// console.log(a.repeat(100))



//replace()
//replaceAll()
// console.log(a.replace("i","I"))
// console.log(a.replaceAll("i","I"))
// console.log(a.replaceAll(" ","_"))
// console.log(a.replaceAll(" ",""))
// console.log(a.replaceAll("",""))

//split()
// console.log(a.split(" "))
// console.log(a.split("i"))
// console.log(a.split())

//trim() remove all leading white space characters from string from both side
//trimStart() remove all leading white space characters from string from left side
//trimEnd() remove all leading white space characters from string from right side


// var a = "          Ducat Education Noida     "
// var b = a.trim()
// var c = a.trimStart()
// var d = a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)

/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
// var a = "Nitin"
// var b = "Naman"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
// console.log(b.localeCompare(b))