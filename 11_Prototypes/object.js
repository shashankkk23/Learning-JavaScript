// learning new keyewords through object 

function multiplyBy5(num){
    return num * 5
}
// console.log(multiplyBy5(100))
// console.log(multiplyBy5(6));
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype);

function createUser(username, score){
this.username = username
this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const shashank = new createUser("shashank", 20) //here we are transfering values from function to shashank(variable)
const gaurav =  new createUser("gaurav",30)

gaurav.increment()// invoking increment fn
gaurav.printMe() //price is 31 //it is incremented by 1


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// practice+++++++++++++++++++++

function productDes(price, name){
    this.price = price
    this.name = name
    return this
}
// product()
// console.log(productDes(25000,"laptop"));
productDes.prototype.increment=  function(){
    this.price += 5000
}

productDes.prototype.printMe  = function(){
    console.log(`Laptop brandName is: ${this.name} and the Price is: ${this.price}`);
}

const details  = new productDes(25000, "Acer")
const laptop = new productDes(35000, "Dell")
details.increment()
details.printMe()
laptop.increment()
laptop.printMe()
