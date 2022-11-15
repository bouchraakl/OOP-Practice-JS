// Assignment One => You have the following Constructor Function to convert to Class Syntax
// Do not rely on the program and do it yourself to make sure that you know the Syntax
// Add two Methods, one named run and one named stop
// Each of them contains a message
// The first is Car Is Running Now and the second is Car Is Stopped
// Create 3 cars with this class with any data you choose
// Print the data of the first car of them in the console, as shown below
// In the next line, type the method called run .



// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }


class Car{
    constructor(name,model,price) {
        this.n = name ;
        this.m = model;
        this.p = price;
    }
    run(){
        return `Car Is Running Now`;
    }
    stop(){
        return `Car Is Stopped`;
    }
}

let CarOne = new Car("Mercedes",2022,50000);
let CarTwo = new Car("BMW",2015,40000);
let CarThree = new Car("Toyata",2014,80000);

console.log(`Car One Name Is ${CarOne.n} And Model is ${CarOne.m} And Price Is ${CarOne.p}`);
console.log(CarOne.run());

// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

//---------------------------------------------------------------------------------------------------------

// Assignment Two => We have the next class called Phone
// We need to make another class in the name of Tablet that inherits the properties of the Phone Class
// The Tablet Class contains an additional Property, which is the size
// It also contains a Method named fullDetails
// We used the class called Tablet to create more than one Tablet
// Then we used the method called fullDetails, which prints data on the tablet
// Now all you have to do is create the Tablet Class to show the data as it is below
// If the person does not type the size, the word “Unknown” should appear

class Phone {
    constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
    }
}

  // Write Tablet Class Here

class Tablet extends Phone{
    constructor(name, serial, price,size){
        super(name, serial, price);
        this.size = size || "Unknown" ;
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown

//---------------------------------------------------------------------------------------------------------

// Assignment 3 => We need to modify it as you want to implement the requirements below
// First, prevent access to Card Property directly
// When creating users, you notice that each person wrote the Card Number in a different way
// We need all the numbers to be a String and after every 4 digits a sign - as in the Output
// Do not modify the user creation lines nor the console lines

// TIP => You can search for Getters to get the method value as Property
// You can use RegExp to convert the number to Credit Card format

// Edit The Class
class User {
    #c;
    constructor(username, card) {
    this.u = username;
    this.#c = card;
    }

    renderCard(){
        return this.#c.toString().match(/\d{4}/g).join("-");;
    }

    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.renderCard()}`
    }


}

  // Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined

//---------------------------------------------------------------------------------------------------------

// Assignment 4 => You have the next String
// Then we used a method called addLove
// The result appeared as in the Output below
// What do you need to write to run this method and show the desired result?

// Write Your Code Here
String.prototype.addLove = function(value){
    return `I Love ${this} Web School`;
}
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

//---------------------------------------------------------------------------------------------------------

// Assignment 5 => We have the next Object
// Next, there is a line that changes the Score . value
// Next, there is a Loop. It prints the entire content of the object, the name of the property, and the value next to it
// After that, the content of the object is printed in the console
// It is forbidden to modify the content of the Object, the Loop, or the Print line in the Console
// In the space provided, you must write the code to do the required
// Required not to allow change of score value
// It is required not to show the id inside the loop, but it appears without any problem in the content of the object in the console
// It is required that the country not appear in the Loop, nor in the content of the Object in the Console

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

  // Write Your Code Here
    Object.defineProperty(myObj, "score", {
    writable: false,
    enumerable: true,
    configurable: true,
});

    Object.defineProperty(myObj, "id", {
    writable: true,
    enumerable: false,
    configurable: true,
});

    Object.defineProperty(myObj, "country", {
    writable: true,
    enumerable: true,
    configurable: true,
});

    delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

  // Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}