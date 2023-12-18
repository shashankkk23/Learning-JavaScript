// singleton/constructor objects

// const tinderUser = new Object() //singleton object
const tinderUser = {}; //non singleton object
tinderUser.id = "1234abc";
tinderUser.name = "shashank";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "shashank@gmail.com",
  fullName: {
    UserFullName: {
      FirstName: "gaurav",
      LastName: "Tiwari",
    }
  }
}

// console.log(regularUser.fullName.UserFullName.FirstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2) //merging object in obj3 
const obj3 ={...obj1, ...obj2}  //this is spread operator 
// console.log(obj3);

const user = [
    {
        Name: "shashank",
        Email: "gaurav@gmail.com"
    },
    {
        Name: "shashank",
        Email: "gaurav@gmail.com"
    },
    {
        Name: "shashank",
        Email: "gaurav@gmail.com"
    },
    {
        Name: "shashank",
        Email: "gaurav@gmail.com"
    }
]
user[1].Name
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));//VERY IMPORTANT it will give outpur as array 
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser)); //IMP
//console.log(tinderUser.hasOwnProperty('isLogged'));//Determines whether an object has a property with the specified name



// ========DESTRUCTURE IN OBJECT ++++++++++

const course = {
    Name: "JsHindi",
    price: "999",
    courseInstructor: "shashank"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);



// jsos syntax = {}
