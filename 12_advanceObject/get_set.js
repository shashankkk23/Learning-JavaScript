class User {
    constructor(email, password){
        this.email= email
        this.password = password

    }
    get email(){
         return this._email  //its like a private property we cannot have access of this at outside the class
    }
    set email(value){
   this._email = value.toUpperCase()
    }

    get password(){
     return   this._password
    }
    set password (pw){
      this._password= pw.toUpperCase()
    }
}
const data = new User("sjasjaml@gmai.cpm", "shashank")
console.log(data.email);
console.log(data.password);