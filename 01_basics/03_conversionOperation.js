// let score = 55    (output will be number)
// let score = "33abc" (outpur will be number after coversion (output will be NaN after checking real typeof))
// let score = null (output will be 0 after coversion)
// let score = undefined  (output will be NaN )
// let score = "shashank" (output will be NaN after converion )


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 

  
// "55" => 55  when you convert this string in num it will be converted
// "55abc" => NaN    it is also convert but when we check the typeOf it will give (NaN)
// true => 1;  true value conterted to 1
// false => 0 false value converted to 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn )
// console.log(booleanIsLoggedIn)


//1=> true; 
// 0 => false
// "" => false when we convert empty string like this in boolean it will show false 
//"shashank" => true it ill show true in boolean conversion 

let someNumber = 55
let stringNumber = String (someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber);





//**********************************OPERATIONS***************************************************/

let value = 5
let anotherValue = -value
// console.log(anotherValue)

// console.log(2+2)
// console.log(2-3)
// console.log(2*5)
// console.log(2**2)
// console.log(2/6)
// console.log(2%6)

let str1 = "hello"
let str2 = " shashank   "

// console.log((3 + 4) * 8 % 3 );

// console.log(+true);
// console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 5 + 5

let gameCounter = 200
gameCounter++; //postfix it ill return the value before incrementing
 ++gameCounter; //prefix  it ill return  value after incrementing
console.log(gameCounter);
