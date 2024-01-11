// call passes current execution context to some other context/function

function setUserName(username){
this.username = username
}
function createUser(username, email, password){
setUserName.call(this, username)

    this.email = email
this.password = password
}

const alluser = new createUser("shashank", "st@Email.com", 4567899)

console.log(alluser);