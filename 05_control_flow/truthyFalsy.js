const  userEmail = ""
// if(userEmail){
//     console.log("got UserEmail");
// }else{
//     console.log("don't have user email");
// }
// Falsy values 
// 1- false
// 2- 0, -0, 
// 3- BigInt 0n
// 4- "" empty String
// 5- null
// 6- undefined
// 7- NaN             these are FALSY values

// Truthy Values 
// 1- "0"
// 2-  'false'
// 3-  " " this is empty String
// 4- []
// 5- {}
// 6- function(){}  these are TRUTHY values


const myArr = []
// how to check array is empty or not 
if(myArr.length === 0 ){
    // console.log("array is empty");
}

// this is how we check objects is empty or not 

const obj = {}
if(Object.keys(obj).length === 0){ //this condition will return object as a array
// console.log("object is empty");
}


// nullish coalescing operator(??) Null, Undefined

let val1;
// val1= 5 ?? 20
// val1= null ?? 20
// val1= null ?? undefined
// val1= 15 ?? undefined
// val1= undefined ?? 45

// console.log(val1);

// Ternary /operator

// condition ? true : false Ternary operator in if

// const teaPrice = 100

// teaPrice <= 10 ?  console.log("Less the Ten") : console.log("more then 10");  //ternary operator in if 

function teaPrice(price){
    return price ? '45' : '50';   //ternary operator in function
}
console.log(teaPrice());

