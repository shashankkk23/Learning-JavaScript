function user(username = "gaurav"){
     if(!username){
        console.log("please enter username");
        
     }
    return `${username} just logged in`

}

console.log(user())