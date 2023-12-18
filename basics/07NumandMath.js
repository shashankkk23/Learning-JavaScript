const score  = 500
// console.log(score);

const balance = new Number(1000)   //it ill give output [Number:1000]
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

const otherNumber = 125.4456178
// console.log(otherNumber.toPrecision(4));  //it ill give precise values of output (125.4)

const thousand = 1000000
// console.log(thousand.toLocaleString('en-IN')); //it will print according to indian number system 


// ==============+++++++++MATHS++++++++++++++++++++++++++++++++++=========================
// const num = 15
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,5,8));
console.log(Math.max(40,5,45,44));


// very imp in Math


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //VERY IMPORTANT FORMULA 