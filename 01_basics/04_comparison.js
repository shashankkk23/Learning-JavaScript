// console.log(2 >  5);
// console.log(2 <  5);
// console.log(2 ==  5);
// console.log(2 >=  5);
// console.log(2  >> 5);
// console.log(2  =! 5);

// console.log("2" > 1);avoid this type of comparison
// console.log("02" > 1);avoid this type of comparison

// console.log(null > 0);  avoid this type of comparison
// console.log(null == 0); avoid this type of comparison   (equality check works different it will use null as 0)

console.log(null >= 0); // avoid this type of comparison  (comparison works different then 'equals', comparison takes null as number bigger then 0 )


// console.log(undefined > 0);avoid this type of comparison
// console.log(undefined == 0);avoid this type of comparison
// console.log(undefined >= 0);avoid this type of comparison

// === strict check it ill strictly check wheather they are same or not
console.log("2" === 2);