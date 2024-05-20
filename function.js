// ********** REST OPRATOR, AND SPREAD OPERATOR   ****************************8

// function sum (first,second,...elements){
//     let sum =0;
//     for (let ele of elements){
//         sum+=ele;
//     }
//     console.log(sum)
// }
// sum(2,3,4,5,6,7)

// let name = "pinki";
// let lastName= "Kumari"
// let obj1 = {
//     name,lastName
// }
// console.log(obj1);

// let n = 'student';

// let obj1 = {
//     [n+'Name']:'pinki kumari'
// }
// console.log(obj1)


// let users =['pinki Kumari',21,'Delhi',['BA',50000]];
// let [name,age,city,[course,salary]]=users;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(course);
// console.log(salary);/

// let users ={
//     names:'pinki',
//     age:21,
//     city:'delhi'
// }

// let {age:a,city:c}=users;
// // console.log(names);
// console.log(a);
// console.log(c);


// class hello{
//     message(){
//         console.log(`this is the message!`)
//     }
// }
// let obj1 = new hello();
// console.log(obj1);
// obj1.message()


// class student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     message(){
//         console.log(`Hello ${this.name} and your ${this.age}`);
//     }

//     static details(){
//         console.log(`Your details with statick methods.`);
//     }
// }

// let a = new student('pinki',21);
// let b = new student('rinki',22);

// console.log(a.name,b.age)
// a.message();
// b.message();
// student.details();


// class car{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }

//     age(){
//         let date = new Date();
//         return date.getFullYear()-this.year
//     }
// }

// let myCar = new car('Ford',2002);
// let y = myCar.age()
// console.log(`My car is ${y} years old`);

// class Person{
//     constructor(name,age,contry){
//         this.Name = name;
//         this.Age = age;
//         this.Contry = contry;
//     }
//     display(){
//         console.log(`Name: ${this.Name} Age: ${this.Age} Contry: ${this.Contry}`);
//     }
// }

// const per1 = new Person('pinki',21,'India');
// const per2 = new Person('rinki',22,"USA");
// per1.display()
// per2.display()

// class Rectangle{
//     constructor(width,height){
//         this.Width = width;
//         this.Height = height;
//     }

//     area(){
//         console.log(this.Height * this.Width);
//     }

//     perimeter(){
//         console.log(2*(this.Height+this.Width));
//     }
// }

// let rec1 = new Rectangle(2,4);
// rec1.area()
// rec1.perimeter()

// class Vehicle{
//     constructor(model,year){
//         this.Model = model;
//         this.Year = year;
//     }
//     displayDetails(){
//         console.log(`Model: ${this.Model} Year: ${this.Year}`);
//     }
// }

// class Car extends Vehicle{
//     constructor(model,year,door){
//         super(model,year)
//         this.Doors = door;
//     }
//     displayDetails(){
//         super.displayDetails()
//         console.log(`Number of Doors: ${this.Doors}`);
//     }
// }

// const obj1 = new Car('Fortuner',2002,12);
// console.log(obj1)
// obj1.displayDetails()


// class BankAccount{
//     constructor(ac,bal){
//         this.Ac = ac;
//         this.Balance = bal; 
//     }
//     Deposit(a_money){
//         console.log(`Your last amount: ${this.Balance} Credit: ${a_money}`)
//         this.Balance = this.Balance + a_money;
//         console.log(`Your total balance: ${this.Balance}`)
//     }
//     Withdeaw(w_money){
//         if(this.Balance > w_money){
//             console.log("Successfully Debit");
//             this.Balance = this.Balance - w_money;
//             console.log(`Your Total Balance: ${this.Balance}`);
//         }
//         else{
//             console.log(`You can't withdraw ${w_money} Rupies`)
//         }
//     }
// }

// let account1 = new BankAccount(34567890,1000);
// account1.Deposit(200)
// account1.Withdeaw(200)

// class Shape{
//     Area(){
//         throw new Error ("Method 'calculateArea()' must be overridden in subclasses.")
//     }
// }
// class Circle extends Shape{
//     constructor(r){
//         super()
//         this.Redius = r;
//         this.pi = (Math.PI).toFixed(2);
//     }
//     Area(){
//         console.log("Circle Area:",this.pi * this.Redius**2)
//     }
// }
// class Triangle extends Shape{
//     constructor(w,h){
//         super()
//         this.Width = w;
//         this.Height = h;
//     }
//     Area(){
//         console.log("Triangle Area:",this.Height * this.Width);
//     }
// }

// let cir1 = new Circle(2);
// cir1.Area()
// let tri1 = new Triangle(23,5);
// tri1.Area()



// class Employee{
//     constructor(name,salary){
//         this.Name = name;
//         this.Salary = salary;
//     }
//     AnualSalary(){
//         return (this.Salary*12)
//     }
// }
// class Manager extends Employee{
//     constructor(name,salary,dep){
//         super(name,salary)
//         this.Department = dep;
//     }
//     AnualSalary(){
//         let baseSalary = super.AnualSalary()
//         let bonus = 1000;
//         console.log("Anual Salary:",baseSalary + bonus)
//     }
// }

// let man1 = new Manager('Anita',60000,"Marketing");
// console.log(man1);
// man1.AnualSalary()


// class Book{
//     constructor(title,author,year){
//         this.title = title;
//         this.author = author;
//         this.publication_year = year; 
//     }
//     displayDetails(){
//         return `Title: ${this.title}   Author: ${this.author}   Publication Year: ${this.publication_year}`
//     }
// }
// class Ebook extends Book{
//     constructor(title,author,year,price){
//         super(title,author,year)
//         this.price = price;
//     }
//     displayDetails(){
//         let details = super.displayDetails() + `  Price: ${this.price}`
//         console.log(details)
//     }
// }

// let book1 = new Ebook('A Girl','Pinki',2002,200)
// book1.displayDetails()



// class Animal{
//     constructor(species,sound){
//         this.species = species;
//         this.sound = sound;
//     }
//     makeSound(){
//         console.log(this.sound);
//     }
// }
// class Dog extends Animal{
//     constructor(species,sound,color){
//         super(species,sound)
//         this.color = color;
//     }
//     makeSound(){
//         super.makeSound()
//         console.log(this.color);
//     }
// }

// let ani1 = new Dog('tillu','woof woof!','black')
// ani1.makeSound()


// class Bank{
//     constructor(){
//         this.bank_name = '';
//         this.bank_branch = [];
//     }
//     addBranch(branch){
//         this.bank_branch.push(branch);
//         console.log(`Add ${branch} sucessfully!`);
//     }
//     removeBranch(branch){
//         let ind = this.bank_branch.indexOf(branch);
//         if(ind>=0){
//             this.bank_branch.splice(ind,1);
//             console.log(`Remove ${branch} Sucessfully!`);
//         }
//         else{
//             console.log(`${branch} Branch name doesn't exited`);
//         }
//     }
//     displayAllBranch(){
//         if(this.bank_branch.length>0){
//             // for(let ele of this.bank_branch){
//             //     console.log(ele);
//             // }
//             console.log(this.bank_branch)
//         }
//         else{
//             console.log("It's Empty!");
//         }
//     }
// }
// let bank = new Bank();
// bank.addBranch('Branch A')
// bank.addBranch('Branch B')
// bank.addBranch('Branch C')
// bank.addBranch('Branch D')
// bank.addBranch('Branch E')
// bank.removeBranch('Branch D')
// bank.displayAllBranch()


// class Product{
//     constructor(id,name,price){
//         this.productID = id;
//         this.productName = name;
//         this.productPrice = price;
//     }
//     totalPrice(count){
//         return (this.productPrice*count)
//     }
// }
// class PersonalCareProduct extends Product{
//     constructor(id,name,price,warranty){
//         super(id,name,price)
//         this.productWarranty = warranty;
//     }
//     totalPrice(count){
//         let amt = super.totalPrice(count) + this.productWarranty;
//         console.log(`Total Amount: ${amt}`);
//     }
// }
// let pro1 = new PersonalCareProduct(1,'saboon',10,2);
// pro1.totalPrice(5)


// class BankAccount{
//     constructor(ac,name,bal){
//         this.AC_No = ac;
//         this.Account_holder = name;
//         this.Balance = bal;
//     }
//     Deposit(money){
//         console.log(`Deposite Sucessfully ${money} in A/C ${this.AC_No}`);
//         this.Balance += money;
//         console.log(`Total Balance: ${this.Balance}`);
//     }
//     Withdraw(money){
//         if(this.Balance > money){
//             console.log(`Debit Sucessfully ${money} in A/C ${this.AC_No}`);
//             this.Balance -= money;
//             console.log(`Total Balance: ${this.Balance}`);
//         }
//         else{
//             console.log(`You can't Withdraw ${money} Total Balance: ${this.Balance}`);
//         }
        
        
//     }
//     Transfer(receve_ac,money){
//         if(this.Balance > money){
//             console.log(`Transffer Sucessfully ${money} in A/C ${receve_ac.AC_No}`);
//             this.Balance -= money;
//             console.log(`Total Balance: ${this.Balance}`);
//             receve_ac.Deposit(money)
//         }
//         else{
//             console.log(`You can't Transffer ${money} Total Balance: ${this.Balance}`);
//         }
        
//     }

// }

// let acount1 = new BankAccount(1234,'Pinki',1000);
// let acount2 = new BankAccount(9987,'Anita',3000)
// acount1.Deposit(100)
// acount1.Withdraw(200)
// acount1.Transfer(acount2,500)


// class University {
//     constructor(name){
//         this.name = name;
//         this.department = [];
//     }
//     addDepartment(dep){
//         this.department.push(dep);
//     }
//     removeDepartment(dep){
//         let ind = this.department.indexOf(dep);
//         if(ind>=0){
//             this.department.splice(ind,1)
//         }
//         else{
//             console.log(`${dep} doesn't exited`);
//         }
//     }
//     displayAll(){
//         if(this.department.length>0){
//             console.log(this.department);
//         }
//         else{
//             console.log(`Empty Department List`);
//         }
//     }
// }

// let uni1 = new University('MAC');
// uni1.addDepartment('HR')
// uni1.addDepartment('front-end')
// uni1.addDepartment('accountend')
// uni1.addDepartment('Backend')
// uni1.addDepartment('marketing')
// uni1.displayAll()
// uni1.removeDepartment('marketing')
// uni1.displayAll()

