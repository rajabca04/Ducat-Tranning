
/*
  Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value


    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style
// var a = [10,20,30,40,50,60,70,80,90,100,true,false,"Nitin Chauhan",[1,2,3,4,5]]
// console.log(a)


//2nd type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40,50,60,70,80,90,100)
// console.log(a)

// var a = []
// var num = Number(prompt("Enter the Number of Elements : "))
// for(let i=1;i<=num;i++){
//   let input = Number(prompt("Enter the Element Number "+i))
//   a.push(input)
// }
// document.write(`Array Elements are ${a}`)



//3rd type : Array constructor
// var a = Array(10,20,30,40,50,60,70,80,90,100)
// console.log(a)


//4th type : Array constructor
// var a = Array()
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50)
// a.push(60)
// a.push(70)
// a.push(80,90,100)
// console.log(a)


// var a = [10,20,30,40,50,60,70,80,90,100]

//Array using Loops
// // Array using For Loop
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

// // Array using while Loop
// let i=0
// while(i<a.length){
//   console.log(a[i])
//   i++
// }

// Array using do while Loop
// let i=0
// do{
//   console.log(a[i])
//   i++
// }while(i<a.length)


// //Array using for in Loop
// for(let i in a){
//   console.log(a[i])
// }

//Array using for of Loop
// for(let i of a){
//   console.log(i)
// }


//toString convert an array into string and use , as separator

/*
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/

// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join(" | "))



/*
array: push() pop() shift() unshift() splice() delete
push():   insert one or more then one element in last of an array
          and return updated length of array
pop()     delete an element from last of an array and return deleted
          array element
unshift() insert one or more then one element element in starting
          of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted
          array element
splice()  used to insert or delete or update elements from any
          specific position of array and return array of deleted
          elements
          syntax:
          array.splice(pos,numberOfItemToDelete,[itemstoInsert])

delete  : it delete an item from array and leave empty space
*/

// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// console.log(a.push(110));
// console.log(a)
// console.log(a.push(120,130,140,150))
// console.log(a)

// console.log(a.unshift(5));
// console.log(a)
// console.log(a.unshift(1,2,3,4))
// console.log(a)

// console.log(a.pop())
// console.log(a)
// console.log(a.shift())
// console.log(a)

// console.log(a.splice(3,0,25,26,27,28,29))
// console.log(a)
// console.log(a.splice(5,5))
// console.log(a)

// delete a[5]
// console.log(a)


//slice() return a list of items from pos to pos
// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(a)
// console.log(a.slice(5,15))
// console.log(a.slice(15))
// console.log(a.slice(-15))

//concat()
// var a = [1,2,3,4,5]
// var b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = ["Nitin","Amit","Sumit","Tarun","Varun"]
// var e = a.concat(b,c,d)
// console.log(e)

//entries() generate an iterator which contains key and value of items

//accessing array elements using entries()
// var a = [10,20,30,40,50,60,70,80,90,100]
// for(let item of a.entries()){
//   console.log(item)
// }



//find()  : return the first item from array which pass a text
//findIndex():retunn the index of item from array which pass a test
//map()   : return an array of containg result for all elements of array
//filter(): return an array of items that pass a test


//reduce()
//forEach()

// var a = [14, 12, 13, 14, 17, 18, 15, 51, 50, 55, 54, 15, 65, 45, 65, 58, 75, 84]
// function check(item){
//   return item%5==0
// }
// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))

// console.log(a.find((item)=>item%5==0))
// console.log(a.findIndex((item)=>item%5==0))
// console.log(a.map((item)=>item%5==0))
// console.log(a.filter((item)=>item%5==0))


// a.forEach((item)=>console.log(item))



// var a = [10,20,30,40,50]
// function fun(sum, next) {
//   return sum + next
// }
// console.log(a.reduce(fun,0)) //0 is optional here

console.log(a.reduce((sum,next)=>sum+next))


//includes() return true if array conatins an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array


// console.log(a.includes(50))
// console.log(a.includes(15))
// console.log(a.indexOf(15))
// console.log(a.indexOf(150))
// console.log(a.lastIndexOf(15))
// console.log(a.lastIndexOf(150))



//reverse()
// var a = [10,20,30,40,50]
// console.log(a)
// console.log(a.reverse())


//sort()

// var a = [15,5,45,1,2,3,5,1,4,5,111,20,1000,15,54,54,5,65,15,54,8,515]
// var a = ["Nitin","Amit","Sumit","Aniket","Amana","Rohit"]


// console.log(a)
// a.sort()
// console.log(a)

// console.log(a)
// a.sort((x,y)=>x-y)
// console.log(a)

// console.log(a)
// a.sort((x,y)=>y-x)
// console.log(a)

//Array Destructuring

var data =  [1001,"Nitin Chauhan","Trainer",98500,"Noida","Up"]
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])
// console.log(data[5])


var [id,name,dsg,salary,city,state] = data
console.log(id)
console.log(name)
console.log(dsg)
console.log(salary)
console.log(city)
console.log(state)
array.js
