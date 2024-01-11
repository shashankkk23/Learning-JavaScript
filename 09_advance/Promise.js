const promiseOne = new Promise(function (resolve,reject){
   //do an async task
   //db calls,cryptography,network
    setTimeout(function(){
    console.log("Async task is completed");
    resolve()//it connects .then and resolve
   },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("async resolved 2");
})

const promiseThree = new Promise(function(resolve,reject){
 setTimeout(function(){
    resolve({username: "shashank", email: "shashank.com"})//when we passing any parameter we have that values access in .then
 },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "shashank", pass: "1234"} )
        }else{
            reject('ERROR: 404 Not Found')
        }
    },1000)
})
//very important syntax it is chaining process
promiseFour.then((user)=>{  //here we are avoiding callback hell
console.log(user);
return user.username
}).then((myUsername) =>{
    console.log(myUsername);
}).catch(function(err){
   console.log(err); 
}).finally(() => console.log("this is finally"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
          resolve({username:"shashank", email:"shashakn@gmail.com"})  
        }else{
            reject("ERROR: JS Went Wrong")
        }
    },1000)
});


// promise handling using async await
async function consumePromiseFive(){
try{
    const response = await promiseFive
    console.log(response);
}
  catch(error){
console.log(error);
} 
}
consumePromiseFive()

async function getAllUser(){
 try{
    const response =    fetch('https://api.github.com/users/shashankkk23')
    console.log(response);
    const data = await response.json()
    console.log(data);
 }catch(err){
    console.log("E:", err);
 }
}
getAllUser()

fetch('https://api.github.com/users/shashankkk23')
.then(function(res){
return res.json()
})
.then(function(response){
    console.log(response);
})
.catch((err) => console.log(err))
    
