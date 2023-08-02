/*
objects store information in pair of keys and values
Keys Must be unique
Values May be Duplicate
Objects are Mutable
*/

//object literal 
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 98500,
    city: "Faridabad",
    state: "Haryana"
}
// console.log(emp)


//Empty object literal 
// var emp = {}
// emp.id = 1001
// emp['name']="Nitin Chauhan"
// emp['dsg']="Trainer"
// emp.salary= 98500
// emp.city="Faridabad"
// emp.state = "Harayana"
// console.log(emp)

//new Object() 
// var emp = new Object()
// emp.id = 1001
// emp['name']="Nitin Chauhan"
// emp['dsg']="Trainer"
// emp.salary= 98500
// emp.city="Faridabad"
// emp.state = "Harayana"
// console.log(emp)


//Accessing Object Values with help of keys
// console.log(emp)
// console.log(emp.id)
// console.log(emp["name"])

//Accessing Object values through Loop 
// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`);
// }

//adding an item to existing object
// emp.email = "vishankchauhan@gmail.com"
// emp['phone'] = "9873848046"
// console.log(emp)

//deleting object item
// console.log(emp)
// delete emp.name
// delete emp['salary']
// console.log(emp)

//Nesting of Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     subject:["Mern Stack","Mean Stack","PHP","Python Full Stack"],
//     address : {
//         house:100,
//         street:5,
//         locality:"Village XYZ",
//         pin:121002,
//         city:"Faridabad",
//         state:"Haryana"
//     }
// }
// console.log(emp)
// console.log(emp.subject)
// console.log(emp.subject[0])

// console.log(emp.address)
// console.log(emp.address.city)



//function in Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     display:function display(){      //regular
//         console.log(`
//             Id          =   ${this.id}
//             Name        =   ${emp.name}
//             Designation =   ${this['dsg']}
//             Salary      =   ${emp['salary']}
//         `)
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     display:function(){             //annonymous
//         console.log(`
//             Id          =   ${this.id}
//             Name        =   ${emp.name}
//             Designation =   ${this['dsg']}
//             Salary      =   ${emp['salary']}
//         `)
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     display:()=>{             //fat Arrow
//         console.log(`
//             Id          =   ${emp.id}
//             Name        =   ${emp.name}
//             Designation =   ${emp['dsg']}
//             Salary      =   ${emp['salary']}
//         `)
//     }
// }
// emp.display()


// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     basic:75000,
//     calculate : ()=>{
//         emp.ta = emp.basic*5/100
//         emp.da = emp.basic*8/100
//         emp.hra = emp.basic*7/100
//         emp.ma = emp.basic*10/100
//         emp.gross = emp.basic + emp.ta + emp.da + emp.hra + emp.ma
//         if(emp.gross<60000)
//         emp.itax = 0
//         else 
//         emp.itax = (emp.gross-60000)*10/100 
//         emp.net = emp.gross-emp.itax
//     },
//     display: ()=>{
//         console.log(`
//             Id              :       ${emp.id}
//             Name            :       ${emp.name}
//             Designation     :       ${emp.dsg}
//             Basic Salary    :       ${emp.basic}
//             Ta              :       ${emp.ta}
//             Da              :       ${emp.da}
//             Hra             :       ${emp.hra}
//             Ma              :       ${emp.ma}
//             Gross Salary    :       ${emp.gross}
//             Income Tax      :       ${emp.itax}
//             Net Salary      :       ${emp.net}
//         `);
//     }
// }
// emp.calculate()
// emp.display()


//getter and setter
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     set setSalary(num){
//         this.salary = num
//     },
//     get display(){
//         console.log(
//             `
//                 Id          :       ${this.id}
//                 Name        :       ${this.name}
//                 Designation :       ${this.dsg}
//                 Salary      :       ${this.salary}  
//             `
//         )
//     }
// }
// emp.setSalary = 98500
// emp.display



//object destructuring
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:98500,
//     city:"Faridabad",
//     state:"Haryana"
// }
// console.log(`Employee Id = ${emp.id}`)
// console.log(`Name        = ${emp.name}`)
// console.log(`Designation = ${emp.dsg}`)
// console.log(`Salary      = ${emp.salary}`)
// console.log(`City        = ${emp.city}`)
// console.log(`State       = ${emp.state}`)

// var {id,name,dsg,salary,city,state} = emp
// console.log(`Employee Id = ${id}`)
// console.log(`Name        = ${name}`)
// console.log(`Designation = ${dsg}`)
// console.log(`Salary      = ${salary}`)
// console.log(`City        = ${city}`)
// console.log(`State       = ${state}`)


//object constructor/object prototype

var Employee = function (id, name, dsg, salary, city, state) {
    this.id = id
    this.name = name
    this.dsg = dsg
    this.salary = salary
    this.city = city
    this.state = state
}
var emp1 = new Employee(1001,"Nitin Chauhan","Trainer",98500,"Faridabad","Haryana")
var emp2 = new Employee(1002,"Deepak Singh","Trainer",75500,"Ghaziabad","UP")
var emp3 = new Employee(1003,"Mamta Jain","Trainer",55500,"Noida","UP")
console.log(emp1)
console.log(emp2)
console.log(emp3)



