// static keyword will prevent inheritance/inherit if we are using inheritance  

class User{
    constructor(username, email){
        this.username = username
        this.email = email
    }

    

   static createId(){   //it will not inherit after using static keyword!!!
        console.log("I am static method");///static method will call bye only its own parent class not inherited class
        
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username, email)

        this.password = password
       
        // super.createId()

    }
}
const data = new Teacher("shashank", "st@gmail.com", 56464)
// console.log(data.createId())
console.log(data.username)
console.log(data.email)
console.log(data.password)

User.createId()