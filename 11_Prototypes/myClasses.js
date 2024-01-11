// this is for self practiice
// class User{
// constructor(Personname,Address,Pincode){
//     this.Personname = "shashank"
//     this.AddressAddress = "Virar"
//     this.Pincode = 401305
// }

// changePersonName(newName){
// this.Personname = newName
// return `new name is ${this.Personname}`
// }

// changeAddress(newAdd){
//     this.Address = newAdd
//     return `and the updated address is ${this.Address}`
// }

// changePinCode (newPinCode){
// this.Pincode = newPinCode
// return `pincode updated to ${this.Pincode}`
// }

// }

// const data =  new User()
// console.log(data.changePersonName("Gaurav"));
// console.log(data.changeAddress("Borivali"));
// console.log(data.changePinCode(4010101));

// ES6 classes in

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
   
  }


changeName() {
    return `My Name is: ${this.name}`;
  }
newAge(){ 
  return `And The age is: ${this.age}`;
}
increasedHeight(){
    this.height++;
    return `And the height is: ${this.name}`;
}



}
const details = new Person("Shashank", 23, 5 );// here constructor calls automatically because of NEW keyword
console.log(details.changeName());
console.log(details.newAge(22));
console.log(details.increasedHeight());




// same thing but without class BEFORE ES6

// function person(name, age, salary){
// this.name = name
// this.age = age
// this.salary = salary
// }

// person.prototype.changeName = function(){
//     return `${this.name.toUpperCase()}`
// }

// person.prototype.updatedAge = function(newAge){
// return `${this.age }`
// }

// person.prototype.increasedSalary = function(){
//     return this.salary += 5220
    
// }

// const details1 = new person("Gaurav", 23, 25000)
// console.log(details1.changeName());
// console.log(details1.updatedAge());
// console.log(details1.increasedSalary());