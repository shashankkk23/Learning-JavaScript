const  user = {
_name : 'shashank',
_add : "virar",


get name(){
return this._name.toUpperCase()
},

set add(val){
this._name = val
}
}
const data = Object.create(user) // this is how we can call getter setter using object
console.log(data.name);