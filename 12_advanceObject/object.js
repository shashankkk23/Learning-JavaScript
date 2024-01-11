//advance objects properties
//fi we are not getting key value in loop then we have to check it's Object.getOwnPropertyDescriptor() value 

// const obj =  Object.getOwnPropertyDescriptor(Math, 'PI')
// //getOwnPropertyDescriptor is used to check in detail property
// console.log(obj);

// const myNew = Object.create({
//     name: 'shashank'
// })// it used to create a object its bydefault value in null if we want we can inject object
// console.log(obj);

// const chai = {
//     name : 'ginger chai',
//     price: 500,
//     isAvailable: true
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));//like this we can check our own object's default properties like = writable: true,enumerable: true,configurable: true and we can change the value of these properties also in some limited place 👇🏽 using Object.defineProperty()

// Object.defineProperty(chai, 'name', {
//     writable:false ,
//   enumerable: false,
//   configurable:false
// })//here we are changing the values of the properties

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// console.log(chai);//no it will give output as { price: 500, isAvailable: true } because we changed the va;ues of theier property

// for (const [key,value] of chai) { //this is not iterable //objects are iterable in some situation

// }
// console.log(`${key} : ${value}`);

// for(const [key, value] of Object.entries(chai)){
// console.log(`${key} : ${value}`);  //this is how we can iterate value's of object
// }

// code fatnaa++++++

const chai = {
  name: "ginger chai",
  price: 500, 
  isAvailable: true,

  orderChai: function () {
    console.log("code fat gya (not all) ");
  },
};

//in getOwnPRopertyDescriptor's enumerable  is is set to false we can not apply loop

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function")
    //handling code fatna in real world like this
    console.log(`${key} : ${value}`);
}

// this is the output of code after:-name : ginger chai
// price : 500
// isAvailable : true
// orderChai : function(){
//         console.log("code fat gya (not all) ");
