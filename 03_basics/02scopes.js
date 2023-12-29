// global scope and block scope

let a = 5
const b = 10   //this lines 3 to 5 are global scope 
var c = 15

if(true){
    let a = 50
    const b = 1   //this lines 8 to 10 are block scope we can access global scope variable in block scope
    var c = 100
// console.log("inner: ", b);
}

// console.log(a);
// console.log(b);
// console.log(c);


// nested scope +++++++++++++++

function one(){
    const name = "shashank"
    function two(){
        const website = " youtube"
        // console.log(name + website);
    }
    // two()
}
// one()



if(true){
  const  Username = "shashank"
    if(Username === "shashank"){
        const website = " youtube"  //in nested function child function can access variables from parent functions
        //console.log(Username + website);
    }
    
    // console.log(website);
}
// console.log(Username);




// =============INTERESTING ++++++++++++++++


function addone(num){
    return num + 1
}

console.log(addone(5));

const addTwo = function(num2){  //another type of declaring Function this function is also called by expression sometimes 
        return num2 + 2
        
    }
    console.log(addTwo(5));