
//  *  oops:
//  *  -> designed by Bjarne Stroustroup(C++ Founder)
//  *  -> object oriented programming Structure
//     oops is a computer science term which defines a well
//     structured series or steps to construct a computer
//     application which composed of multiple objects,
//     each object can handle data, get and transfer 
//     messages to each other, since objects are not
//     dependent on each other oops is seen as being
//     more flexible then procedural approach

//     OOPS Approachs:
//     1. Abstraction  :   Data Hiding
//     2. Encapsulation:   Binding data and function in a single unit
//     3. Polymorphism :   Many forms of Single Entity
//     4. Inheritance   :   Code Reusability

//     class is required to implement oops

//     class: class is a technique by which we can define a new
//            data type as we required

//            class is a blue print of objects

//            class is a collection of properties and behaviours
//            where properties means variables of different-different
//            data types also known as data members and behaviors
//            means various functions also known as member methods
//            or member functions
//     syntax:
//     class ClassName{
//         method1(){
//             ----
//         }
//         method2(){
//             ----
//         }
//         --
//     }
 
//class without constructor
// class Sample{
//     show(){
//         console.log("In show function of Sample Class")
//     }
//     display(){
//         console.log("In display function of Sample Class")
//     }
// }
// var obj = new Sample()
// obj.show()
// obj.display()


// class Add{
//     get(a,b){
//         this.a = a
//         this.b = b
//         this.sum = this.a + this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Add()
// var y = new Add()
// x.get(10,20)
// y.get(100,200)
// x.display()
// y.display()


/*
OOPs Aproachs
1. Abstraction  :   Data Hiding or Hiding Complexity showing
                    functionality

                    using this approach we can hide our class
                    member to being access outside class directly

                    Note: now these days JS doesn't support
                    Abstractions
2. Encapsulation:   binding data members with member methods
                    to access indirectly

3. Polymorphism :   Many forms of single Entity
                    1. Function Overloading :   if we define
                                                more then one
                                                function in 
                                                class with same
                                                name ut with different
                                                signature(number of
                                                parameters or type of
                                                parameters)

                                                Note: JS Doesn't Support
                    2. Constructor and Desctructor
                    3. Function Overriding  :   if both parent class
                                                and child class
                                                having same named
                                                members then  child
                                                class member override
                                                parent member this concept
                                                is called function overriding

                    4. Operator Overloading :   if we provide multiple definations
                                                to an operator is called operator
                                                overloading
                                                Note: we can't overload 
                                                operator in JS

4. Inheritance
 */


/*
class with constructor
Constructor:
    -> a special member method of class which provide memory
       initialization to a class object
    -> there is no need to call constructor it called automatically
       when object is declared with help of new
    -> it can be parameterised
    -> if we not provide defination to a constructor in class
        then compiler provide defination to constructor
    -> we can't return anything from a constructor
 */

// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     show(){
//         console.log("In show() of class Sample")
//     }
//     display(){
//         console.log("In display() of class Sample")
//     }
// }
// var x = new Sample()
// x.show()
// x.display()

// class Add{
//     constructor(a=0,b=0){
//         this.a = a
//         this.b = b
//         this.sum = this.a + this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Add(10,20)
// var y = new Add()
// x.display()
// y.display()

/**
 * Inheritance:
 * oops approach provide a feature to reuse all members
 * of any previous existing class in a new class
 * 
 * eg. if a class named B inherit class A then class
 * B can reuse all member of class A so class B
 * is called child class,derived class or subclass
 * and class A is called parent class,super class
 * or base class
 * 
 * types:
 *  1. Single Inheritance
 *  2. multilevel Inheritance
 *  3. Hierarchical Inheritance
 * 
 * syntax:
 *  class Parent{
 *  ----
 *  -----
 *  }
 *  class Child extends Parent{
 *      ----
 *      ----
 * }
 * Note: a child can access only those member of class
 * parent which child doesn't have if both parent class and child
 * class having same named members then child class member override 
 * parent members this concept is known as overriding
 */

// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){
//         console.log("In display function of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         console.log("In display function of Child Class")
//     }
// }
// var x = new Child()
// x.show1()
// x.show2()
// x.display()


// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){
//         console.log("In display function of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         super.display()
//         console.log("In display function of Child Class")
//     }
// }
// var x = new Child()
// x.show1()
// x.show2()
// x.display()


// class Parent{
//     constructor(){
//         console.log("Constructing Class Parent")
//     }
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){
//         console.log("In display function of Parent Class")
//     }
// }
// class Child extends Parent{
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         console.log("In display function of Child Class")
//     }
// }
// var x = new Child()
// x.show1()
// x.show2()
// x.display()


// class Parent{
//     show1(){
//         console.log("In show1() of Parent Class")
//     }
//     display(){
//         console.log("In display function of Parent Class")
//     }
// }
// class Child extends Parent{
//     constructor(){
//         super()
//         console.log("Constructing Class Parent")
//     }
//     show2(){
//         console.log("In show2() of Child Class")
//     }
//     display(){
//         console.log("In display function of Child Class")
//     }
// }
// var x = new Child()
// x.show1()
// x.show2()
// x.display()

//Single Inheritance: when a single child class inherit a 
//single parent class
// class Parent{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }
// }
// class Child extends Parent{
//     display(){
//         this.sum = this.a+this.b
//         console.log(`${this.a}  + ${this.b} = ${this.sum}`)
//     }
// }
// var x = new Child(10,20)
// x.display()


//mulilevel Inheritance: when a child class inherit another child class
// class Parent{
//     constructor(){
//         this.a = [10,20,30,40,50,60,70,80,90,100]
//     }
// }
// class Child1 extends Parent{
//     display(){
//         console.log(this.a)
//     }
// }
// class Child2 extends Child1{
//     reverse(){
//         this.a.reverse()
//     }
// }
// let x = new Child2()
// x.display()
// x.reverse()
// x.display()

//Hierarchical Inheriatnce: when a single parent class inherit by
//              more then one child class

class Parent{
    constructor(a,b){
        this.a = a
        this.b = b
    }
}
class Add extends Parent{
    display(){
        console.log(`${this.a} + ${this.b} = ${this.a+this.b}`)
    }
}
class Sub extends Parent{
    display(){
        console.log(`${this.a} - ${this.b} = ${this.a-this.b}`)
    }
}
class Mul extends Parent{
    display(){
        console.log(`${this.a} * ${this.b} = ${this.a*this.b}`)
    }
}
class Div extends Parent{
    display(){
        console.log(`${this.a} / ${this.b} = ${this.a/this.b}`)
    }
}
class Mod extends Parent{
    display(){
        console.log(`${this.a} % ${this.b} = ${this.a%this.b}`)
    }
}
class Pow extends Parent{
    display(){
        console.log(`${this.a} ** ${this.b} = ${this.a**this.b}`)
    }
}
let obj1 = new Add(15,6)
let obj2 = new Sub(15,6)
let obj3 = new Mul(15,6)
let obj4 = new Div(15,6)
let obj5 = new Mod(15,6)
let obj6 = new Pow(15,6)

obj1.display()
obj2.display()
obj3.display()
obj4.display()
obj5.display()
obj6.display()