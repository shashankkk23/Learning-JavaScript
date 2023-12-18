
function sayMyName (){
    
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("k");
}

// const name= sayMyName

// function addTwoNumbers(number1, number2){ //this number1, number2 in paranrthesis is called parameter
//    console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 *  number2
}
//addTwoNumber(5,8) //this number 1,5 is called arguments,
const result  = addTwoNumber(5, 8)
// console.log("result: ", result);

function loginuserMessage(username){
    if(!username){
console.log("please enter username to login");
return 
    }
 return `${username} Just logged in`
}
//  console.log(loginuserMessage())


function calculateCartPrice(price1, price2,...price3){  
    return price3
}

// console.log(calculateCartPrice(200, 2330, 255, 25, 5, 5));



//OBJECT HANDLE IN FUNCTION

const user1 = {
username : "Gaurav",
price : 299
}

function handleObject(anyobject){
//  console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);

}

handleObject({
    username : "shashank",
    price: 599
 });


//  HANDLING ARRAY IN Function

const myarr = [54, 56, 884, 555]

function returnSecondValue(getarray){
    return getarray[2]
}

// console.log(returnSecondValue(myarr));
console.log(returnSecondValue([
    45,455,85
]))
