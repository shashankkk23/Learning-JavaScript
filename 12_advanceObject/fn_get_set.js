//getter seter through properties/function

function User(email, password){
this._email = email;
this._password = password;


Object.defineProperty(this,'email',{ // it ahs 3 parameter this, email and object //defining getter and setter in function like this
  get: function(){
    return this._email.toUpperCase()
  },
  set: function(val){
    this._email = val
  }
})
Object.defineProperty(this,'password',{ // it ahs 3 parameter this, email and object //defining getter and setter in function like this
    get: function(){
       return this._password.toUpperCase( )
    },
    set: function(value){
this._password = value
    }
})
}


const data = new User("shsahnk@gmail.com", 'stas')
console.log(data.email);
console.log(data.password);