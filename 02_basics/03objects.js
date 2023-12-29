// OBJECTS 

// singleton - when we make object using constructor it will make singleton

// when we create/declare  object using literal  then that will  not make like singalton 

// object constructor 👇🏽
// Object.create

const mySym = Symbol("key1")
// object literal EX👇🏽
const JsUser = {
    name: "shashank",
    "fullname": "shasahank tiwari",
    [mySym]: "mykey1",
    age: 22,
    location: "mumbai",
    email: "shashank@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.name); //there are two types of accesing the object this is FIRST ONE
// console.log(JsUser["fullname"]); // this is SECOND method sqaure notation of accesing the object it is used when object's KEY is given in STRING form in this case u can't access with .KEY(name)
// console.log(JsUser[mySym]);

JsUser.email = "gaurav@gpt.com"
//Object.freeze(JsUser) //it will freeze the object JsUser we cant change values in that object after making objtct freeze
// JsUser.email = "frereze@gmail.com"
// console.log(JsUser);

JsUser.greeeting = function(){
    console.log("Hello js user");
}
JsUser.greeetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeeting());
console.log(JsUser.greeetingtwo());








