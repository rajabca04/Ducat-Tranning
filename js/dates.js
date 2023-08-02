//to set date and time
//1st Style : new Date() : return Current Date and time

// var a = new Date()
// console.log(a)
// console.log(a.toString())
// console.log(a.toDateString())
// console.log(a.toTimeString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())



//2nd Style : new Date(year,month,day,hour,minute,second,milisecond)
//we have to specify atleast two items in Date
//if we pass a single argument in Date then it treat it as miliseconds
// var a = new Date(2023,7,12,9,30,30,2000)
// var b = new Date(2023,7,12,9,30,30)
// var c = new Date(2023,7,12,9,30)
// var d = new Date(2023,7,12,9)
// var e = new Date(2023,7,12)
// var f = new Date(2023,7)
// var g = new Date(2023)
// console.log(a.toString())
// console.log(b.toString())
// console.log(c.toString())
// console.log(d.toString())
// console.log(e.toString())
// console.log(f.toString())
// console.log(g.toString())





//3rd Style : new Date(miliseconds)
// var a = new Date(987384804600000)
// console.log(a.toString())


//4th Style : new Date(dateString)
// var a = new Date("2023 8 12")
// var b = new Date("2023 8 12 09:30:30")
// var c = new Date("09:30:30 2023 8 12")
// console.log(a.toString())
// console.log(b.toString())
// console.log(c.toString())




//to get date and time
var a=new Date()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());//current
console.log(a.getUTCDate());
console.log(a.getTime());//miliseconds since 1 Jan 1970
console.log(a.getDay()); //week day
console.log(Date.now());//miliseconds since 1 Jan 1970