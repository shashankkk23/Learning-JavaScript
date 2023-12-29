const marvelHeros = ["thor","iron-man","spiderman"]
const dcHeros= ["superman","flash","batman"]

//marvelHeros.push(dcHeros)

//console.log(marvelHeros);
//console.log(marvelHeros[3][2]);// it will give output [batman] we r accesing it through 3rd index  from frst array 

//const allHeros = marvelHeros.concat(dcHeros) //it will give new array of that  merged values properly, but everyone is not using this concat method BECAUSE IT HAS LIMITED VALUES, some user uses SPREAD OPERATOR to merged arrays  
//console.log(allHeros);

const allHeros = [...marvelHeros, ...dcHeros] //THIS IS SPREAD OPERATOR we can merge more then 2 arrays here in spread operator 
//console.log(allHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const usableArr = anotherArr.flat(Infinity) // flat will give all array in one place
// console.log(usableArr);

   
console.log(Array.isArray("shashank"));  
console.log(Array.from("shashank")); //it will convert any `object, string , numbers etc..` to array  
console.log(Array.from({name : "shashank"}));// IT COMES IN INETRVIEW, it will give empty [] when its not able to covert the value, in this case we've to give the what we want to convert to array like key: or value  

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));//off Will also can convert value into array

// LEARN MORE ABOUt `ISARRAY, FROM, OFF ` by mdn docs 
