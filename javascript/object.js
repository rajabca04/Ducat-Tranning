// Function in Object 

// var emp = {
//     id : 1,
//     name : "Nitin",
//     dsg : "Trainer",
//     salary : 98500,
//     display: function display(){
//         console.log(`
//             Id          =   ${this.id}
//             Name        =   ${this.name}
//             Designation =   ${this.dsg}
//             Salary      =   ${this.salary}
//         `);
//     }
// }

// emp.display()


// var emp = {
//     id : 1001,
//     name : "Nitin",
//     dsg : "Trainer",
//     salary : 98500,
//     display:()=>{
//         console.log(`
//             Id          =   ${emp.id}
//             Name        =   ${emp.name}
//             Designation =   ${emp.dsg}
//             Salary      =   ${emp.salary}
//         `);
//     }
// }


// emp.display()


var emp = {
    id : 1001,
    name : "Nitin",
    dsg : "Trainer",
    basic : 98500,
   
    /**
     * Calculates the gross and net salary of an employee based on their basic salary.
     *
     * @param {object} emp - An object representing the employee with the following properties:
     *   - basic: number - The employee's basic salary.
     * @return {undefined}
     */
    calculate: ()=>{
        emp.ta = emp.basic*5/100
        emp.da = emp.basic*8/100
        emp.hra = emp.basic*7/100
        emp.ma = emp.basic*10/100
        emp.gross = emp.basic + emp.ta + emp.da + emp.hra + emp.ma
        if(emp.gross<60000)
        emp.itax = 0
        else{
            emp.itax = (emp.gross-60000)*10/100
            emp.net = emp.gross-emp.itax
        }
        
    },
    /**
        Display the employee details.
     */
    display(){
        console.log(`
            Id          =   ${emp.id}
            Name        =   ${emp.name}
            Designation =   ${emp.dsg}
            Salary      =   ${emp.salary}
            TA          =   ${emp.ta}
            DA          =   ${emp.da}
            HRA         =   ${emp.hra}
            MA          =   ${emp.ma}
            Gross       =   ${emp.gross}
            ITax        =   ${emp.itax}
            Net         =   ${emp.net}
        `);
    }
}

emp.calculate()
emp.display()