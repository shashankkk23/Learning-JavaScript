// maps 

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = num.map( (n) => n + 10 )
// const newNums = num.map( (n) => { return n + 10} ) //if we are opening scope  the we have to give return keyword like filter method
// console.log(newNums);


// const fil = num.filter( (n) => n > 5 )
// console.log(fil);

// map chaining 


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNum = num
.map( (n) => n * 10 )   //map return all values explicit or conditional based
.map( (n) => n + 2)      //this is chaining
.filter( (n) => n >= 40 ) //filter return true condition     //this is chaining
console.log(myNum);

