const accountId = 144553
let accountEmail = "shasshnk@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;


// accountId = 2 now allowed to change const value

accountEmail = "gaurav@gmail.com"
accountPassword = "64565"
accountCity = "uttarpradesh"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])