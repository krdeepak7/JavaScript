// let name = 'ram';
// console.log(name);
// let age = 28;
// console.log(age);
// let interstRate = 0.3;
// console.log(interstRate);
// interstRate=1;
// document.write(interstRate);
// const name1 = 'dpk';
// document.write(name1);
// we use null where we want explicitly to clear the value of a variable
//Primitive - String,boolean,number,undefined,null
//JS is dynamic language

// let name = 'Deepak';
// let age = 24;
// let isApproved = true;
// let firstname = null;
// let selectedColor = undefined;

//reference type - object,array,Function
//Objects- in JS is an object in real life .think about the person
//when we are dealing with multiple variables ..we will put those inside an object

// let person = {
//     name: "Deepak",
//     age: 24
// }
// console.log(person);
// //Dot notation
// person.name = 'john';
// console.log(person);
// //Bracket Notation
// person['name'] = 'Marry';
// console.log(person);

//Arrays - stores list of objects
//it is a data structure that stores list of items
// let selectedColors = [ 'red','blue'];
// selectedColors[2] = 25;
// console.log(selectedColors);
// console.log(selectedColors.length)

//Functions - one of major building block of javascript
//basically a set of statements that performs a task or calculate a value

//Performain a task
// function greet(name, lastname) {
//  console.log("Hello" + ' ' + name + ' ' + lastname);
// }
// greet('Deepak','kumar');

//A parameter is what we have @ time of declaration
//A argument is the actual value we supply to parameter

// greet('Merry','Johan');

//calculate a value
// function square(number) {
//     return number * number;
// }
// console.log(square(2));

//Operator - > use this along with variable and constants to create expressions
// and implements logic and algorithm

//Arithmetic
// let a = 10;
// let b = 2;
//console.log(a ** b);
 //Increment and Decrement
// console.log(++a);
// console.log(a--);
// console.log(a);

//Assignment
// let x=10;
// x++;
// x= x+1;
// console.log(x);
// console.log(x = x*4);

//Comparision and relational
//  let x= '1';
// console.log(x >= 0);
// console.log(x < 0);
// console.log(x !== 1);
// console.log(x === 1);
// console.log(x == 1);
// console.log(true === 1);
//strict equality '===' compares both types and value
//loose equality '=='   compares value only

//ternary operator
//If a customer has more than 100 points,
//they are a gold customers
//else they are silver customers
//    let points = 110;
//    let type = points > 100 ? 'gold' : 'silver';
//    console.log(type); 

 //Logical
//we use this operator to make decision based on multiple condition
// logical And(&&)  -  - not
// console.log(true && false);
// let highIncome= false;
// let goodCreditScore = true;
// console.log(highIncome && goodCreditScore);

//Logical Or ||
//   let highIncome= false;
//   let goodCreditScore = false;
//   let eligibleforLoan = highIncome || goodCreditScore;
//   console.log(highIncome || goodCreditScore);
//   console.log('Eligible', eligibleforLoan)

//not operator !
// let applicationRefused = !eligibleforLoan;
// console.log(applicationRefused);

// false || true      -> true
// false || 'deepak'  -> 'deepak'
// false || 1         -> 1
// false || 1 || 2    -> 1(short-circuiting)

//below are falsy value in JS (false) (Kind of boolean false but not exactly the same)
//undefined
//null
//0
//false
//''
//NaN

//realworld where to use it
//  let userColor  = undefined;
//  let defaultColor = 'blue';
//  let currentColor = userColor || defaultColor;
//  console.log(currentColor);

//Bitwise
//we use the decimal system to represent system (1,2,3,4,5)
//In computer these number are stored in the binary format which is the conbination 
//of 0s and 1s
 // 1 represented in binary as 00000001 [8 bit represents 1 byte of information]
 // 2 represented as 00000010
 //1 = 00000001
 //2 = 00000010
 //R = 00000011  results will be 3  Bitwise OR
 //R = 00000000  results will be 0  Bitwise AND
// console.log(1 | 2); //Bitwise OR
// console.log(1 & 2); //Bitwise AND

//When we can use BITWISE operator in real world

//Read,write,Execute
//00000100
//00000010
//00000111

//Operator Precedence
// let x = (2 + 3) * 4;
// console.log(x);

//Program swapping
// let a = 'red';
// let b = 'blue';
// let c = a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);

//Conditional Statements   (If..else    and    Switch case)

//If n else
//Hours
//If hour is between 6am and 12pm : Good Morning
//If it is between 12pm and 6pm : Good Afternoon
//Otherwise : Good Evening
// let hour = 23;
// if (hour >=6 && hour < 12) {
//     console.log('Good Morning');
// } else if(hour >= 12 && hour < 18){
//     console.log("Good Afternoon");
// } else {
//     console.log('Good Evening');
// }

//switch case
// let role = 'guest';
//whether role is guest/moderator/admin
// switch(role){
//     case 'guest':
//     console.log('Guest User');
//     break;

//     case 'moderator' :
//     console.log('Moderator user');
//     break;

//     default:
//     console.log('Unknown User');
// }
//with switch case we can compare value of a variable with other values

//For Loop - While Loop - Do..While loop - For..in loop - For..of loop

//for loop
// for(let i = 1 ; i <= 5 ; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
//      //console.log('Deepak',i);
// }

//while loop
// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

//do..while loop - very much similar to while loop
// always executes atleast once
// let i = 9;
// do  {
//     if (i % 2 !== 0) {
//         console.log(i);
//         i++
//     } 
// } while (i <= 5);

//infinite loop
//  let i = 0;
// while (i<5) {   
//      console.log(i);
//      i++
//  }

//we can create infinite for loop - do..while loop can also be created  -> Be aware and avoid them

//For..in loop  (use to iterate over an object)
// const person ={
//     name:'Deepak',
//     age:24
// };
// for (let key in person)
// {
//     console.log(key, person[key]);
// }

// //for-of (idle way to iterate over array) 
// const colors = ['red','green','blue'];
// for (let color of colors)
// console.log(color);

//Break and continue
/*for (i=0; i<=10;i++){
    // if (i === 5 ){
    //     break;
    // }
    // if (i % 2 === 0) {
    //     continue;
    // }
    console.log(i);
} */

//return max of two number
// function maxNumber(a,b) {
//     //return (a > b) ? a : b;
//     if (a > b) {
//         return a;
//     } else 
//      return b;
// }
// console.log(maxNumber(1000,104560));

//example for T or F
// function isLandscape (width,height) {
//     if (width > height) {
//         return true;
//     } else {
//         return false;
//     }
// } 
// console.log(isLandscape(100,90));

//alternative
// function isLandscape (width,height) {
//     return(width > height)
// }
// console.log(isLandscape(100,90));

//fizzBuzz Algorithm
//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by 3 and 5 =>FizzBuzz
//not divisible by 3 and 5 => input
//not a number = 'NaN 

// function fizzBuzz(input){
//     if (typeof input !== 'number'){
//         return 'NaN';
//     }
//     if ((input % 3 === 0) && (input % 5 === 0)){
//     return 'FizzBuzz'   
//     }
//     if (input % 3 === 0 ){
//     return 'Fizz'
//     }
//     if (input % 5 === 0 ){
//         return 'Buzz';
//     }
//     return input;
//    }
//    const output = fizzBuzz(true);
//    console.log(output);

//Program Example
// Speed limit  = 70  -> ok
// every 5 km we give 1 point
//math.floor = 1.3 = 1
// more than 12 points license suspended

// function checkSpeed(speed){
//     const speedlimit = 70;
//     const kmPerPoint = 5;
//      if (typeof speed !== 'number'){
//          console.log ('Nan');
//      } 
//      if (speed < speedlimit + kmPerPoint) {
//         console.log('ok'); 
//         } else {
//         const points = Math.floor((speed - speedlimit) / kmPerPoint);
//         if (points>=12) {
//             console.log('License Suspended');
//         } else {
//             console.log('points', points);
//         }
//      }
// }
// checkSpeed(130);

//Program Example
// display 1-10 number with even odd
// function showNumbers(limit){
//    for (i=0; i <= limit; i++){
//     if (i % 2 === 0){
//        console.log(i,'EVEN');
//    } else {
//        console.log(i,'ODD');
//    }
// }
// }
// showNumbers(10);

//Program Example 
//find truthy value on array
// let array = [0, null,undefined , '',2,23,12,82,null];
// function truthyValue(array) {
//  let count = 0;
//  for (let value of array) 
//      if (value)
//          count++
//          return count;
// }
// console.log(truthyValue(array));

//Program Example
//display the property of an object of type String
// var movie = {
//     name:'Deepak',
//     age:24,
//     sex:'male',
//     isActive: true
// };

// function printString(obj) {
//     for (let str in obj)
//     if (typeof obj[str] == 'string'){
//         console.log(str, obj[str]);   
//     }
// }
// printString(movie);

//Program Example
//sum of all multiples of 3 and 5 
//multiple of 3 - 3,6,9
//multiple of 5 - 5, 10
//job of function is add 3,6,9  + 5,10
// function sum(limit) {
// let totalSum = 0;
// for (let i=1; i<=10; i++) 
  
//   if (i % 3 === 0 || i % 5 === 0 ){
//     console.log(i);
//     totalSum = totalSum +i;
//   }
//     return totalSum;
// }
// console.log(sum(10));

//program Exaqmple Grade
//Average of array
//1-59 :F
//60-69 :D
//70-79 : C
//80-89:B
//90-100: A
// const marks = [95,90,100];
// function calculateGrade(marks){
//     let totalMarks = 0;
//     for (let mark of marks) {
//    totalMarks = totalMarks + mark;
//    average = totalMarks / marks.length;
//     }
//     if (average < 60)
//     return 'F';
//     if (average <70)
//     return 'D';
//     if (average <70)
//     return 'C';
//     if (average <70)
//     return 'B';
//     return 'A';
// }
// console.log(calculateGrade(marks));

//Program example of printing stars(*)
//What we have below is called nested loop
// function stars(num){
//    for (i = 1; i <= num ; i++){
//        let pattern ='';                                                               
//        for(let j = 0;j<i ;j++)
//        pattern += '*';
//        console.log(pattern);
//    }
// }
// stars(10);

//Show prime numbers upto 20 
//prime - numbers whose factors are only 1 and itself
//composite - having many factors
//Excercise not working

//OBJECT are collection of Key Value pair
// let  circle = {
// radius:1,
//   location: {
//       z:1,
//       y:1
//   },
//   isVisible:true,
//   draw : function() {
//       console.log('function inside object');
//   },
//   move : function() {}
// };
// circle.draw();
//above is refereed as object oriented style of programing
//OOP is basically a style of programming where we see collection of objects talks to each other
//and performs some functionality
//If a function are part of object we call that function a method

//Factory Function
//Imagine we need 2 circle objects - we will copy above object and change the name 
//what if we want to create 10 circle object .. we wont duplicate the object each time
//thats  when we use factory or constructor function
//Just like a factory producing functions
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function(){
//             console.log('ert');
//            }
//         };
// }
// const circle1 = createCircle(3);
// console.log(circle1.draw);
// const circle2 = createCircle(2);
// console.log(circle2);
//In modern JavaScript if a key and value are same then we can remove the value and add the key.
//radius.radius === radius
//shorter method for draw method
// draw() {
// }
//the beauty of factory function is we define our logic at one place
//we can create as many circle object as we want
// We use camel Notation "oneTwoThreeFour"

//Another Pattern of creating objects
//Constructor Function
//We use pascal Notation "OneTwoThreeFour"
//this is a reference to the object executing this piece of code
//by using new operator 3 things happens 
 // 1 - creates an empty JS object
 // 2 - set this to point new empty object
 // 3 - return the new object from this function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
//     // we are adding a new property to an empty object
// }
// const circle1 = new Circle(1);
// console.log(circle1);

//Difference between factory and constructor Function
//In factory we simply call a function and return a new object(camel notation)
//In constructor we use a new operator and instead of returning an object we use this keyword(Pascal naming convention)

//Objects are dynamic - once we create them we can always add new properties and methods
//or remove existing once
// const circle = {
//     radius : 1
// }
// circle.color='red';
// circle.draw = function() {}
// delete circle.radius;
// console.log(circle);
//when we use const to declare an object that means we cannot reassign the value

//Constructor Property
// function Circle(radius){
//         this.radius = radius;
//         this.draw = function(){
//             console.log('draw');
//          }
//      }
//      const circle1 = new Circle(1);
//      console.log(circle1);
     //console - circle1.constructor
//Every object is JS has property called constructor and that references the function that was used to construct/create 
//that object
//JS built in constructor are -> new String();  - new Boolean(); - new Number(); - but we dont use these

// In JS functions are objects - a built in JS constructor called Function Constructor created it
// function abc(a,b,v){
//     console.log('check')
// }
// abc();
// console.log(abc.length);
// console.log(abc.name);
// console.log(abc.prototype);

//Methods that are available in our functions
//Call method - by this we can call a function
// function Circle(radius){
//      this.radius = radius;
//      this.draw = function(){
//      console.log('draw');
//       }
//     }
//     Circle.call({}, 1); //calling function and passing and empty object which point to this this keyword
//     Circle.apply({}, [1,2,3]); // we pass the value in array
//     const circle1 = new Circle(1);

//Value vs Reference type
//Value type - number,string,boolean,undefined,null,symbol
//Reference type - Object,Function,Array

//Primitive are copied by their value
// let x = 10;
// let y = x;
// x = 20;
// console.log(x);
// console.log(y);
//When we use object both x and y points to same memory (ojects are copied by their reference)
// let x = { value:10 }
// let y = x;
// x.value = 50;
// console.log(x);
// console.log(y);

//Another Example
// let number = 10;
// function increase(number) {
//     number++;
// }
// increase(number);
// console.log(number);

// let number = {value:10};
// function increase(number) {
//     number.value++;
// }
// increase(number);
// console.log(number);

//Loop revision
// const circle = {
//     radius:1,
//     draw:function(){
//         console.log('draw');
//     }
// };
// //console.log(circle);
// for (let cir in circle)
//     console.log(cir, circle[cir]);
// if ( 'radius' in circle)
//    console.log('available');
//FOR..OF LOOP can only be used for iterable like arrays and map

//Cloning an Object - we get all property of object and copy them into another object
// const circle = {
//          radius:1,
//          draw:function(){
//              console.log('draw');
//         }
//     };
 //old way   
// const another = {};
// for (let key in circle)
//   another[key] = circle[key];
//   console.log(another);
//modern way
// const another = Object.assign({},circle);
// console.log(another);
//another modern way
// const another = {... circle };
// console.log(another);

 //In low level languages - 'C' and 'C++' we have to allocate memory to it and when we are done
 //to deallocate memory
 //but in JS we dont have this concept we can easily create object and memory is automatically 
 //allocated to this object so our JS engine is have "Garbage Collector"
 //the job of this garbage collector is to find variables and constants that are no longer use
 //and then deallocate the memory that has been allocated to them earlier (happens automatically behind the scenes)

 //Few Built in Objects
 
 //(1) Math Objects - has methods and property for mathematical constants and function
     // Properties - Math.PI,sqrt,log
     // Methods - math.abs(x) - returns absolute value of number 
                  //acos(x),asin(x),floor(),random(),ceil()
//     function rando(max){
//     let abc =  Math.random((max));
//     return abc;    
// }
//     console.log(rando(10));
    
// console.log(Math.log10);
// console.log(Math.PI);
// console.log(Math.max(1,2,3,4,5,6,7));
// console.log(Math.min(12,4,7,87,43,1));

//(2) String Objects - 

//In JS we have 2 types of String
// String Primitive
// const message = 'hi';
// console.log(typeof message); // answer - string
// console.log(message.length); // methods -length,includes,startswith,endswith,indexOf,replace,uppercase,lowercase,trim - these are case sensitive
// //String object
// const another = new String('hi')
// console.log(typeof another);   // answer - object

//Escape Notation (MDN) - \n ,'

//all literals 
//Object {}
//Boolean true,false
//String ',""

//Template Literals - indicated by bad tick characters
// const another = `this 'is' my 
// statement`;
// console.log(another);
//we can format our string the way we want it to look like,there is no need for class or backslash n.
//another benefit of using template literals is - we can add placeholders - we can add name dynamically
//const name = 'kumar'
//old way - const name = 'John' + name + ',/n';  --ugly
// template literal  `Hi ${name}` 

//(3) Date object (built in object in JS)
// const date1 = new Date();
// console.log(date1);
// //all date object has bunch of get and set method
// const years  =  date1.getFullYear();
// const year  =  date1.toDateString();
// const yea  =  date1.toTimeString();
// console.log(years);
// console.log(year);
// console.log(yea);

//Program Example
//create object with property -street,city,zipCode
//showAddress(address) function
// const address = {
//     street: 'elcot',
//     city:'Chennai',
//     zipCode: 600119,
// };
//      function showAddress(address){
//         for (let key in address){
//         console.log(key,address[key]);
//     }
// }
// console.log(showAddress(address));

//initialize the object address using factory function and constructor function

//factory Function
// function address(street,city,zipCode)  {
//     return {
//      street,
//      city,
//      zipCode
//  };
// }
// let address1 = address('elcot','chennai',600119);
// console.log(address1);

//Constructor Function
// function Address (street,city,zipCode) {
//     this.street =street;
//     this.city=city;
//     this.zipCode = zipCode
// }
// let address2 = new Address('elcot','chennai',600119);
// console.log(address2);

//Object Equality
// function Address(street,city) {
//     this.street = street;
//     this.city = city;
// }
// const address1 = new Address('elcot','chennai');
// const address2 = new Address('elcot','chennai');

// function areEqual(address1,address2) {
//     return address1.street === address2.street && address1.city === address2.city;
//     }
//  function areSame(add1,add2) {
//      return address1 === address2;
//  }
// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));

//Blog Post Object  propert - title,body,author,views,comments(author,body),isLive
// let myBlog = {
//     title:'myCreation',
//     bidy: `story about 
//            my portfolio`,
//     author:'dpk kumar',
//     views: 20000,
//     comments : [
//         {author: 'good'},
//         {body : `very much modular`}
//     ],
//     isLive : true
// }
// console.log(myBlog);

//blogging engine 
//aim to have fewer parameter in function
// function Post(title, body, author){
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   isLive : false;
// }
// let post = new Post('Deepak','flexible', 'self');
// console.log(post);

//Example to think and write as object
// const priceRange = [
// { range:'low' , quantity: 10, allAccessible: false},
// { range:'medium' , quantity: 25, allAccessible: false},
// { range:'high' ,quantity: 50, allAccessible: true}
// ];
// console.log(priceRange[2]);

//Arrays 
//adding new elements-Finding elements-removing elements-splitting arrays-combining arrays
// const numbers = [3,4];
// numbers.push(5,6);
// numbers.unshift(1,2);
// numbers.splice(2, 0,'a','b'); 
// console.log(numbers);

//finding elements in an array (primitive type)
// const num = [1,2,3,4];
// num.indexOf(4);
// console.log(num.indexOf(3));
// console.log(num.lastIndexOf(4));
// console.log(num.includes(1));

//Finding elements in Reference type
// const courses = [
//   { id: 1, name:'a'},
//   { id: 2, name:'b'}
// ];
// const course = courses.find(function(course){
//    return course.name === 'a';
// });
// console.log(course);
//find method returns the first method that matches our criteria

// const course = courses.findIndex(function(course){
//     return course.name === 'a';
//  });
//  console.log(course);

//Arrow Function - whenever we want to pass the function as a callback function or 
//as a argument to different method we use arrow function syntax
// const course = courses.find((course) => course.name === 0);

//Removing elements from an array
// const numbers = [1,2,3,4];
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.splice(0,1);
// console.log(numbers);

//Emptying an Array  -> solution 1 and solution 2 recommended
// let numbers = [1,2,3,4,5,6];
//solution 1
// numbers = [];
// console.log(numbers);
//solution 2 
// numbers.length = 0;
// console.log(numbers);
//solution 3 
// numbers.splice(0,numbers.length);
// console.log(numbers);
//solution 4
// while (numbers.length > 0)
//      numbers.pop();
//      console.log(numbers);

//Combine 2 arrays or slice an array into 2 parts
// const first = [1,2,3];
// const second = [4,5,6];
// //to combine we use concat method
// const combined = first.concat(second);
// console.log(combined);
// //slice method
// const slice = combined.slice(2,4);
// console.log(slice); //we extracted 3 and 4 from array with slice method

//Spread Operator
// const first = [1,2,3];
// const second = [4,5,6];
// const combine = [...first,'a', ...second];
// console.log(combine);
// const copy = [...combine];
// console.log(copy);

//for each function and iteration
// const number = [1,2,3,4,5];
//  for (let key of number){
//      console.log(key);
//  }
// number.forEach(function(number){
//     console.log(number);
// })
// number.forEach(number => 
//     console.log(number)) 

//Joining array 
// const numbers = [1,2,3,4,5];
// const join = numbers.join('-');
// console.log(join);

//Sorting array
// const numbers = [2,4,1];
// const num = numbers.sort();
// console.log(num);
// const num1 = numbers.reverse();
// console.log(num1);

//sorting of array of objects
// const courses = [
//     { id:1, name: 'Node.js' },
//     { id:2, name: 'Javascript'}
// ]
// const sorted = courses.sort(function(a,b){
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) 
//     return -1;
//     if (nameA > nameB)
//     return 1;
//     return 0;
    
// })
// console.log(sorted);

//Testing the elements of an array
//every() - searches and checks all value in array
//some() - searches for atleast one matches
// const numbers = [1,4,7,5,70, -4];
// const allPositive = numbers.every(function(value){
//     return value >=0;
// })
// console.log(allPositive);

//Filtering an array
//filter an array based on search criteria
// const numbers = [1,3,6,-8,4];
// //if we want only the positive number
// const filtered = numbers.filter(function(value){
//     return value >=0;
// })
// console.log(filtered);

//Mapping an array
//use to map each elements into something else
// const numbers = [1,3,6,-8,4];
// const filtered = numbers.filter(function(value){
//          return value >=0;
//     })
// const items = filtered.map(function(value){
//         return '<li>' + value + '</li>';
//     })
//     console.log(items);

//Reducing an Array
// const numbers = [1,-1,2,3];
//sum
// let sum = 0;
// for (let n of numbers){
//       sum = sum + n;
// }
// console.log(sum);

//better way with reduce method
// const sum = numbers.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue;
// }, 0)
// console.log(sum);

//function array from range (min max)
//[1,4] -> [1,2,3,4];
//  function arr(min,max) {
//      const output = [];
//      for(let i = min; i <= max; i++)
//          output.push(i);
//          return output;
     
//  }
//  const range = arr(-3,4);
//  console.log(range);

//Program Example  searching of element in array
// const number = [1,2,3,4,5];
// function searchArray(array,value) {
//     for (let element of array)
//     if (element === value)
//     return true;
//     return false;
// }
// const result = searchArray(number,10);
// console.log(result);

//Program Example - removing the value
// const numbers = [1,2,3,4,5,6,7,8];
// const exclude = function(array, excluded){
//      let some = [];
//      for (let element of array)
//      if (!excluded.includes(element))
//      some.push(element);
//      return some;

// };
// let another = exclude(numbers,[7,5,8]);
// // console.log(another);
// const numbers = [1,2,3,4];
// const swapElement = function(array,index,offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0){
//         console.error('Invalid offset');
//         return;
//     }
//      const another =[...numbers];
//      const element = another.splice(index, 1)[0];
//      another.splice(position, 0 ,element);
//      return another;
//     }
//    const output = swapElement(numbers,0,1); 
//    console.log(output);

// Program Example 
//Searching the element occurance in array
// const numbers = [1,2,3,3,4,1,2,2,2,];
// const alterna = function(array,i){
//     let count = 0;
//     for( let element of array)
//         if (element === i)
//         count++
//         return count;
// }
// const result = alterna(numbers,2);
// console.log(result);

//Program Example
//search the highest element in an array
//  const number = [2,46,3,1,7,567];
//  const maxi = function(array){
//     if (array.length === 0)
//     return undefined;
//     const max = Math.max(...array);
//     return max;
//   }
// const result = maxi(number);
// console.log(result);

//Program Example
//array of objects (movies)
//all the movies in 2018 with rating > 4
//sort them by their rating
//Descending order
//pick their title

// const movies = [
//     { title:'a', year:2018, rating:4.3 },
//     { title:'b', year:2016, rating:4.7 },
//     { title:'c', year:2018, rating:4.8 },
//     { title:'d', year:2017, rating:3.5 }
//  ];
// const newMovies = movies
//   .filter(m => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map(m => m.title)
//   console.log(newMovies);

//Functions

//function declaration
// we can call the function before declaring the function
// function walk(){
//     console.log('I am walking');
// }
// walk();
// //Named function expression 
// //we cant call it before declaring the function
// let run = function running(){
//   console.log('I am running');
// };
// run();
// //anonymous
// let row = function (){
//     console.log('I am row');
//   };
//   row();
//   let column = row;
//   column();

// Hoisting is the process of moving function declaration to the top of the file
//this is done automatically by the javascript engine who is executing the code

// function sum(a,b){
//     console.log(arguments);
//     return a + b;
// }
// console.log(sum(12,2));

//argument object
//we can pass as much value as we want in function
// function sum(){
//     let total = 0;
//     for (let value of arguments)
//       total = total + value;
//       return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));

//better way to implement above argument function
//rest operator

//Default Parameter
// function interest(principal,rate = 3.5,years = 5){
//     return principal * rate / 100 * years;
// }
// const final = interest(100, 4 ,1);
// console.log(final);

//Getters and Setters object
// const person = {
//     firstname: 'Deepak',
//     lastname : 'Kumar',
//     fullname: function(){
//       return `${person.firstname} ${person.lastname}`
//     }
// }
// const result = person.fullname();
// console.log(result);
// there are few problems with this approach
// first problem is this is read only - we cant set the persons fullname from outside
//it would be nice if we do this - we want to set first name and last name by passing the value 
//it would be nicer If we treat this as a property 
//to overcome this issue Getters and setters come into picture
//we use getters to access property in an object
//we use setters to change and mutate them
//In above function we can use getter to set the property
// const person = {
//     firstname: 'Deepak',
//     lastname : 'Kumar',
//     get fullname(){
//       return `${person.firstname} ${person.lastname}`
//     },
//     set fullname(value){
//     const parts = value.split(' ');
//     this.firstname = parts[0];
//     this.lastname = parts[1];
//     }
// }
// person.fullname = 'John Doe';
// const result = person;
// console.log(result);

//Try and Catch
// const person = {
//     firstname: 'Deepak',
//     lastname : 'Kumar',
//     get fullname(){
//       return `${person.firstname} ${person.lastname}`
//       if ( typeof value !== string)
//       throw new Error('Value is not a string.');
//     },
//     set fullname(value){
//     const parts = value.split(' ');
//     if (parts.length !== 2)
//     throw new Error('Enter a first and last name');
//     this.firstname = parts[0];
//     this.lastname = parts[1];
//     }
// }
// try {
// person.fullname = 'Pankaj Kumar';
// }
// catch (e){
//     alert(e);
// }
// const result = person;
// console.log(result);

//local and global scope
// {
// var message = 'Hi';
// console.log(message);
// }
// //local variable takes precedence over global variable
// const messages = 'Hi I am global';
// function test(){
//     console.log(messages);
// }
// test();

//let vs var
//when we declare 'var' it is not limited to scope it is limited to function
// var is getting added to wondoe object .we should avoid adding variable in window object
//window object is something central - any variable can override your variable
// var color = 'red';
// let age = 30;
// console.log(window.color);
//avoid using var keywords

//this keywod
//this references the object executing the current function
//If that function is part of object we call that method - this refers to object itself
//If it is a regular function(not part of object) this refers to global object which is window object in browser
// const video = {
//     title:'a',
//     play(){
//         console.log(this);
//     }
// }
// video.play();

// function playVideo(){
//     console.log(this);
// }
// playVideo();
//If we call a function with new operator which is in case of Constructor function this refers to empty object
//Example
// const video = {
//     title:'a',
//     tags: ['a','b','c'],
//     showTags(){
//         const that = this;
//         this.tags.forEach(function(tags){
//             console.log(that.title,tags);
//         });
//     }
// };
// video.showTags();

// function playVideo(){
//     console.log(this);
// }
// playVideo();
// playVideo.call({name : 'Deepak'},10);
// playVideo.apply({name : 'Deepak'});
// playVideo.bind({name : 'Deepak'})();
//with call apply and bind we can set the this argument of given function

//Best solution - using arrow function it inherits the this keyword so no need to initialize inside the function
// const video = {
//     title:'a',
//     tags: ['a','b','c'],
//     draw(){
//         this.tags.forEach(tags => {
//             console.log(this.title,tags);
//         });
//     }
// };
// video.draw();

//Program Exercise
//sun takes arugument and returns sum
//Array.isArray()
// function Addition(){
//     let total = 0;
//     for (let value of arguments)
//     total = total + value;
//     return total;
// }
// console.log(Addition(2,1,4,8,10,20));

//Program Example
//we need to implement getter to have readonly property
// const circle = {
//     radius:2,
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     }    
// }
// console.log(circle.area);
// circle.radius = 3;
// console.log(circle.area);
// console.log(circle.radius);