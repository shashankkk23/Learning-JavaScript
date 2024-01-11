// literal objects


// const user = {
    // username : 'shashank',
    // loginCount : 5,
    // signedIn : true,

    // getUserDetails: function(){
        // console.log("got the user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



//new keyword is a constructor function, it allows to make multiple instance from one object literal
//new keyword is use to make new context. and its called constructer function

// const promiseOne = new Promise()

function user(username, loginCount, isLoggedIn){
      this.username = username;
      this.loginCount = loginCount;
      this.isLoggedIn = true

      this.greetings = function(){
        console.log(`welcome: ${username}`)
      }
      return this

}


// new keyword  = whenever we are using new keyword the empty object will create we call it instance 
// step 1 = new object will be created 
// step 2 = constructor function calls,it will wrap all arguments  
// step 3 = wrapped arguments inject in this KEYWORD 
 
// console.log(user("shashank", 21, true));
const userOne = new user("shashank", 21, true)
const userTwo = new user("Gaurav", 45, false)//if we are not using new keyword userTwo will overwrite the userone's value if we print user one
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor); // constructor will give reference of user function // read more about operator instanceof in google
