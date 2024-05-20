// const employee = {
//     calTax(){
//         console.log("tax rate is 10% ");
//     },
//     Name: "pinki"

// }
// const pinki = {
//     salary: 30000
// }
// pinki.__proto__=employee;
// console.log(pinki);
// pinki.calTax();


// class ToyotaCar {
//     start(){
//         console.log("Start ");
//     }

//     stop(){
//         console.log("Stop ");
//     }
//     setBrand(brand){
//         this.Brand = brand;
//     }
// }
// const obt1 = new ToyotaCar();
// console.log(obt1.stop());
// obt1.setBrand('fortuner');
// console.log(obt1);


// class Navgurukul{
//     constructor(name,field){
//         this.Name = name,
//         this.Field = field;
//     }
//     doCoding(){
//         console.log("Do Coding");
//     }
//     eating(){
//         console.log("eating");
//     }
//     addAge(age){
//         this.Age = age;
//     }
// }

// const stu1 = new Navgurukul('Pinki','Arts');
// console.log(stu1);
// stu1.addAge(21);
// console.log(stu1);


// d1 = {'a': 100, 'b': 200, 'c':300};
// d2 = {'a': 300, 'b': 200, 'd':400};
// // output should be this: {'a': 400, 'b': 400, 'd': 400, 'c': 300}

// for(let key in d1){
//     console.log(d1[key]);
//     if(d2.hasOwnProperty(key)){
//         d2[key] = d2[key]+d1[key];
//     }
//     else{
//         d2[key]=d1[key];
//     }
// }
// console.log(d1,d2);


// const obj = {
//     1:1,
//     2:4,
//     3:9
// }
// console.log(obj.length);


// ************************  Q2.   ********************
// const student = {
//     name:"Pinki",
//     sclass: '15',
//     rollno: 1 
// }
// console.log(student);
// delete student.rollno
// console.log(student);

// / ***********************  Q3   *************
// const student = {
//     name: "pinki",
//     rollno: 45,
//     grad: 'A+',
//     age: 21
// }
// let k = Object.keys(student);
// console.log(Object.values(student));
// console.log(k);
// let len = 0;
// for(let i in student){
//     len++;
// }
// console.log(len);

// *******************    Q4    ********************
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];

//     const displyBooks = (item) => console.log(item)
    
//     library.forEach((item)=> displyBooks(item))

// *************************  Q5    ****************


// const findValume = (h,r,pi) =>{
//     return ((pi*r**2*h).toFixed(4))

// }

// class cylinder{
//     constructor(h,r){
//         this.height = h;
//         this.redius = r;
//         this.pi = Math.PI;
//     }
// }

// const cyl = new cylinder(4,7);
// console.log("The Valume is: ",findValume(cyl.height,cyl.redius,cyl.pi))


// ******************************   Bubble Sort    ***********************
// const arr = [6,4,0,3,-2,1];

// const bubbleShort = (arr) => {
//     for(let i=0;i<arr.length-1;i++){
//         for(let j= i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 arr[i] = arr[i]+arr[j];
//                 arr[j] = arr[i]-arr[j];
//                 arr[i] = arr[i]-arr[j];
//             }
//         }
//     }
//     return arr
// }
// console.log("Shorted Array: ",bubbleShort(arr));


// ********************************  Q10  ***************************
// var library = [ 
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];
// //  Short by libraryId  ********************
// library.sort((a,b)=> a.libraryID - b.libraryID);
// console.log(library);

// //Short by title
// library.sort((a,b)=>{
//     let as = (a.title).toString();
//     let bs = (b.title).toString();
//     if(as>bs){
//         return 1
//     }
//     else{
//         return -1
//     }
// })
// console.log(library)


// const o = new Object()
// console.log(o)
// o.constructor = null;
// console.log(o)

// const o = new Object(undefined)
// const p = new Object(null)
// console.log(o,p)

// const num = new Number(90)
// console.log(num,typeof(num))
// const obj = Object('pinki')
// console.log(obj)
// for(let i of obj){
//     console.log(i)
// }

// const symbolObj = Object(Symbol('foo'));
// console.log(symbolObj, typeof(symbolObj))
// const a = Object()
// console.log(a)

// const target = {'a':1,'b':2,'c':9};
// const source = {'c':4,'d':5};
// Object.assign(target,source);
// console.log(target)
// console.log(source);
// Object.assign(source,target);
// console.log(target);
// console.log(source);

// const obj = {a:1};
// const copy = Object.assign({},obj);
// copy['b']=9
// console.log(obj,copy)

// const obj1 = {a:1};
// const obj2 = structuredClone(obj1);
// console.log(obj1,obj2)

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };
// Object.assign(o1,o2,o3)
// console.log(o1)
// console.log(o2)
// console.log(o3)

// const v1 = "abc";
// const v2 = true;
// const v3 = 10;
// const v4 = Symbol("foo");
// const newObj = Object.assign({},v2)
// console.log(newObj);


// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
//   };

// const me = Object.create(person);
// console.log(me)
// me.name = 'pinki';
// me.isHuman = true;
// me.printIntroduction()

// const obj = {
//     name:"pinki",
//     age: 21,
//     designation: "Engineering"
// }
// console.log(Object.hasOwn(obj,'name'));
// console.log(Object.is({},{}))
// console.log(Object.is([],[]))

// let key = Object.keys(obj);
// let value = Object.values(obj);

// console.log(key)
// console.log(value)
// for(let i in obj){
//     console.log(i)
// }

// Object.seal(obj);
// console.log(Object.isSealed(obj))
// obj.age = 20;
// obj['marks'] = 90;
// obj.name = 'rinki'
// delete obj['name'];
// console.log(obj)


// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(16))
// console.log(Math.round(4.6))
// console.log(Math.floor(16.9))
// console.log(Math.ceil(16.9))
// console.log(Math.trunc(-4.4))
// console.log(Math.sign(4))
// console.log(Math.abs(-1.6))
// let a=[2,4,5,7,5,4,3,2];
// console.log(Math.max(a));
// console.log(Math.log(1))
// console.log(Math.log(2))
// console.log(Math.log(3))
// console.log(Math.log(10))
// console.log(Math.log(8,))
// console.log(Math.log10(100))

// const arr = [function(){}, new Object(), [], {}, NaN, Infinity, undefined, null, 0];
// const dic = new Object();
// for(let element of arr){
//     if(!Object.hasOwn(dic,typeof(element))){
//         dic[typeof(element)] = 0;
//     }
//     dic[typeof(element)]+=1
// }
// console.log(dic);



// const input = require('readline-sync');
// let t = Number(input.question('enter the T: '));
// console.log(t,typeof(t));
// for(let i=0; i<t;i++){

// }
// const userInput = input.question("enter the inputs").split(" ");
// let arr = userInput.map((ele)=> parseInt(ele));
// console.log(arr);


// const library = [
//     {
//         title: "The Great Gatsby",
//         author: "F.Scott Fitzgerald",
//         addedDate: new Date("2024-01-01")
//     }
// ]

// const addBook = (title,author,addedDate) =>{
//     dic = new Object();
//     dic.title = title;
//     dic.author = author;
//     dic.addedDate = new Date(addedDate);
//     library.push(dic);
// }

// const removeBook = (titleName) => {
//     for(let book of library){
//         if(book.title === titleName){
//             library.splice(library.indexOf(book),1)
//         }
//     }
// }

// const findRecentBook = () =>{
//     let curDate = new Date();

//     let lastDate30 = new Date(curDate);
//     lastDate30.setDate(curDate.getDate()-30);
//     for(let book of library){
//         if(book.addedDate>=lastDate30){
//             console.log(book);
//         }
//     }
// }

// const showAllBook = () =>{
//     console.log(library)
// }
// addBook('The First','pinki','2024-04-21');
// addBook('The Second','Rinki','2023-04-21');
// addBook('The Third','Kiran','2022-04-21');
// addBook('The Fourth','Anita','2021-04-21');
// removeBook('The Third');
// findRecentBook()
// showAllBook()


// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// let per1 = new person('pinki',21)
// console.log(per1);
// person.prototype.showDetails = function(){
//     console.log(this.name,this.age);
// }
// per1.showDetails()




// const ticketSystem = {
//     totalTickets : 1000,
//     bookTickets : 10,
//     bookedTicket : {},

//     checkAvailableTicket(){
//         console.log(this.totalTickets-this.bookTickets);
//     },

//     reserveTicket(id,ticket){
//         let ava = this.totalTickets-this.bookTickets;
//         if(ticket<=ava){
//             this.bookedTicket[id] = ticket;
//             this.bookTickets+=ticket;
//             console.log(`${ticket} Tickets Booked on this id: ${id}`);
//         }
//         else{
//             console.log('Tickets are Not Available!');
//         }
//     },

//     cencelTicket(id,ticket){
//         if(Object.hasOwn(this.bookedTicket,id)){
//             if(ticket < this.bookedTicket[id]){
//                 this.bookedTicket[id] = this.bookedTicket[id]-ticket;
//                 this.bookTickets -= ticket;
//                 console.log(`${ticket} Cenceled Rest Tickets: ${this.bookedTicket[id]}`)
//             }
//             else if(ticket === this.bookedTicket[id]){
//                 delete this.bookedTicket.id;
//                 console.log('Cenceled Successfully!')
//             }else{
//                 console.log(`Your Booked Tickets ${this.bookedTicket[id]} Not ${ticket}`)
//             }
//         }else{
//             console.log(`No Booked ticket on ${id}`)
//         }
//     }
// }

// ticketSystem.reserveTicket('pinki',10)
// ticketSystem.reserveTicket(2,80)
// ticketSystem.checkAvailableTicket();
// ticketSystem.cencelTicket('pinki',11)
// ticketSystem.checkAvailableTicket()



// const activities = ["beach activities", "adventure sports", "cultural experiences", "nature retreats", 'others'];
// const budget = ["relaxed budget", "moderate budget", "luxury budget", "limited budget",'others'];
// const suitable = [
//     "Destinations known for their beautiful beaches and affordable accommodations.",
//     "Destinations famous for adventure activities like hiking, rafting, and rock climbing, with options for budget-friendly adventure tours.",
//     "Destinations rich in history, heritage, and cultural landmarks, with luxury accommodations and exclusive guided tours.",
//     "Destinations with serene natural landscapes, national parks, and budget-friendly eco-lodges or camping options.",
//     "Destinations that offer a mix of activities and accommodations suitable for the user's preferences and budget."
// ]

// const input = require('readline-sync');
// const user_p = input.question('P: ');
// const user_b = input.question('B: ');
// let findInd = activities.indexOf(user_p);

// if(findInd>=0){
//     if(findInd === budget.indexOf(user_b)){
//         console.log(suitable[findInd]);
//     }else{
//         console.log(suitable[budget.indexOf('others')]);
//     }
// }else{
//     console.log('enter the valid activity.')
// }


// const destination =["tropical beach", "mountain hike", "city tour", "desert adventure","others"];
// const weather = ["sunny", "cloudy", "rainy", "hot","others"];
// const advising = {
//     "sunny" : "sunscreen, swimwear, sunglasses, and a beach towel.",
//     "cloudy" : "sturdy hiking boots, a waterproof jacket, a backpack, and a map.", 
//     "rainy" : "an umbrella, waterproof shoes, a raincoat, and a portable charger.", 
//     "hot" : "a wide-brimmed hat, lightweight clothing, sunscreen, and plenty of water.",
//     "others" : "appropriate clothing and accessories based on common sense."
// };

// const input = require('readline-sync');
// const user_D = input.question('D: ');
// const user_W = input.question("W: ");
// let ind = destination.indexOf(user_D);
// if(ind === weather.indexOf(user_W)){
//     console.log(advising[user_W]);
// }else{
//     console.log(advising.others);
// }




