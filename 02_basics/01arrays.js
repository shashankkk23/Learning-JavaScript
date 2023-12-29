// ARRAYs

const myArr = [0,1,2,3,4,5]
// myArr.push('shashank')
// myArr.pop() // removes last value of [myArr]
//myArr.unshift(9) // it will add give value before 0 index
//myArr.shift()  // it will remove frst value of [myArr]
//console.log(myArr.includes(4)); it will show value is in array or not in boolean formate
//console.log(myArr.indexOf(1)); it will give index of values

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// ============SLICE AND SPLICE [VERY IMPORTANT]++++++++++++++++

const myn1 = myArr.slice(0,3) //slice will not manipulate orginal(myArr) value
console.log(myn1);
console.log("A", myArr);

const myn2 = myArr.splice(1,3) //splice will manipulate in original(myArr) values it will remove 1-3values from original(myArr) 
console.log(myn2);
console.log("B", myArr);