/**
 Set:   1. collection of Unique Elements
        2. It Doesn't Support Indexing
        3. It is Mutable 
*/
//how to make a set
//how to make a set using new Set()

// var a = [10,20,30,40,50,60,70,80,90,100,10,10,10,10,20,30,20,30,20,30,20,20,20,20,20,20,20,10,40,50,60,20,30,20,20,20,50,60,20,30,10]
// var b = new Set(a)
// var c = Array.from(b)
// console.log(a)
// console.log(b)
// console.log(c)

// console.log(Array.from(new Set(a)))


//add item to set
//add() used to add an item in set,do nothing if item already exist


// b.add(100)
// console.log(b)
// b.add(110)
// console.log(b)


//delete() used to delete any particular item from Set
//do nothing if delete is empty
// b.delete(50)
// console.log(b)


//clear()   //remove all items from set
// b.clear()
// console.log(b)

// console.log(b.size)

//has() return true if item exist in set else return false
// console.log(b.has(50))
// console.log(b.has(500))


/*
    values:     return an iterator containing all items of set
    keys:       return an iterator containing all items of set
    entries:    return an iterator in pair if value,value 
                containing all items of set
 */
// console.log(b.keys())
// console.log(b.values())
// console.log(b.entries())



//map: collection of item but in pair of key and value
//      keys must be unique but values may be duplicate
//if we use duplicate key in a map then only last key will used

//how to make a map
var emp = new Map([
    ["Nitin",98500],
    ["Ankit",58000],
    ["Sumit",55000],
    ["Tarun",65500],
    ["Varun",12300],
    ["Mohit",32100],
    ["Naman",85100],
    ["Aman",65500]
])
console.log(emp)


//set() of map insert an item in map and if key already exist then
//set() update keys value
// emp.set("Ankita",98500)
// emp.set("Nitin",120000)
// console.log(emp)




//delete() used to delete any particular key from Map do nothing in case of Empty
// emp.delete("Nitin")
// console.log(emp)



//clear()   //used to delete all items from Map
// emp.clear()
// console.log(emp)

//a.size  //return number of items of Map
// console.log(emp.size)


//has() : return true is map has an item else return false
// console.log(emp.has("Nitin"))
// console.log(emp.has("Vishank"))
/*
    values:     return an iterator containing all keys of map
    keys:       return an iterator containing all values of map
    entries:    return an iterator in pair if key,value 
                containing all items of map
 */
console.log(emp.keys())
console.log(emp.values())
console.log(emp.entries())