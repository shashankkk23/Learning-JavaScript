// inheritance

class User {
  constructor(username) {
    this.username = username;
   
  }
  logMe() {
    console.log(`is loggedIn: ${this.username}`);
    
  }
  someText(){
    console.log(`Hey There my name is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);  //super keyword taking instance/reference of CLASS USER - USERNAME
    // super(email); //same goes here
    this.email =email
    this.password = password;

    
  }
  someText(){
    super.someText() // to take parent class's whole method/fn use super. and then method name
    console.log("im second method");
  }

}
const data = new Teacher("Shashank","tecaher@gmail.com", 12345)
console.log(data.username);
data.logMe()
data.someText()