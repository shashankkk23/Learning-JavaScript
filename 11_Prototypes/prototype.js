// prototype section 

// let myName = "shashank     "
// let myChannel = "st vlogs   "
// we want to applly truelength property bydefault in all strings value
// console.log(myName.length); //we have to remove space from that string using Truelength


let myHeros = ["thor", "spiderMan"]

let heroPower = {
thor:"hammer",
spiderman: "slingslong",

getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
}
}
Object.prototype.shashank = function(){
    console.log("shashank is present in all methods ");
}

Array.prototype.heyShashank = function(){
    console.log("shashank here in array");
}
// heroPower.shashank()
// myHeros.shashank()
// myHeros.heyShashank()
// heroPower.heyShashank()//it not access heyShashank method



// inheritance+++
// old syntax 

const user={
    name:"shashank",
    email: "shashank@amazon.com"
}

const teacher ={
    makevideo: true
}

const TeachingSupport= {
    isAvailable: false
}

const TaSupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport //it has now access of teching support
}

// // modern syntax  of inheritance
// Object.setPrototypeOf(TeachingSupport, teacher)


// let anotherUsername = "Shashank    "

// String.prototype.truelength = function (){
//     console.log(`${this}`); // if we use only this not with ${this} it will show output as string
// console.log(`The length is: ${this.trim().length}`); //this is function to trim all the strings
// }
// anotherUsername.truelength() 
// "gaurav  ".truelength()


let myName = "shashank  "

String.prototype.truelength = function (){
    console.log(`${this}`);
    console.log(`truelengthis: ${this.trim().length}`);
}
// myName.truelength()

// let youName = "Gaurav"
// youName.truelength()

// const yourName = 'Tiwariiii       '
// yourName.truelength()

var allName = "Shashank Tiwari"
allName.truelength()