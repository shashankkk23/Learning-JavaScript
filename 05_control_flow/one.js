// control flow conditionals

// if

const isUserLoggedIn = true
const temperature = 41

// if(temperature !== 41){
// console.log("temperature is less then 40");
// }else{
//     console.log('temperatre is greater then 40');

// }
// comparison operators <, >, <=, >=, !=, ===(it checks data type also its called Strict check), !==

const score = 200

// if(score > 100){
//     const power = "fly"  //var is a global scope variable & let,Const is not a global scope variable
//     console.log(`usercan power: ${power}`);
// }



// shorthandNotation in this notation we dont use scope{}
// implicit means assume it has block scope 
const balance = 1000
// if(balance > 500) console.log(`test`),console.log("test2");

// if(balance < 500){
//     console.log('balance less then 500');
// }else if(balance < 750){
//     console.log("balance less then 750");
// }else if(balance < 950){
//     console.log("balance is less then 950");
// }else{
//     console.log("less then 1200");
// }


const userLoggedIn = true
const debitcard = true
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = true

if (userLoggedIn && debitcard) {  //and operatore && //we can use multiple condition
    console.log("allow to buy");

}
if (userLoggedInFromGoogle || userLoggedInFromEmail) {  // ||or operator //we can check multiple condition 
    console.log("allow to Purchase course");
}