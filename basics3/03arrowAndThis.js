

const user = {
username : "shashank",
price : 599,

welComeMEssage : function(){
   console.log(`${this.username} welcome to website you have paid ${this.price} for registration`);  
   console.log(this);
}
}
// user.welComeMEssage()
// user.username = "gaurav"
// user.welComeMEssage()
//console.log(this); // when we print this keyword in brower it will show window as global object


// function Demo(){
//    const name = "shashank"
//    console.log(this.name);
// }
// Demo()

// const name =function(){
//    let username = "shashank"
//    console.log(this.name);
// }
// name()

// Arrow function +++++++++++++++++

// const chai = () => {   //aRROW Function
//    let username = "shashank"
//    console.log(this);
// }
// chai()

const add = (num1, num2) => {
   return num1 + num2  // explicit return when we use curly braces{} we've to give return keyword
}

// console.log(add(2,5))

const Demo = (num1, num2) => num1 + num2 //we can use without any braces as well in arrow function

// console.log(Demo(5, 5));

const Demo2 = (num1, num2) => (num1 + num2) // implicit return, assumes, we dont have to write return keyword when we dont use curly braces{}

// console.log(Demo2(5,6));

const Demo3 = () => ({username: "shashank"}) // we can only declare objects in arrow function only inside parenthesis()

console.log(Demo3());
