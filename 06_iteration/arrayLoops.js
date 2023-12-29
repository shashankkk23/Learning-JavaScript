// forof loop directly print values and it does not work on OBJECTS


// const arr ="shashank"
// for (const array of arr) {
// console.log(array);
                            //    forOf loop specially for arrays
// }
// console.log("\n");
// for(const ar of arr){
//     console.log(ar);
// }

const Greeting =["*","*","*","*","*"]
let x=" "
for(const greet of Greeting){
     x +=  + greet ;
    // console.log(x);
    
}


// Maps 

const  map = new Map()
map.set('IN',  "India")
map.set('US', "United State Of America")   //map will print unique value only no duplicate value
map.set('Fr', "France")

// console.log(map);

for(const [key, value] of map){  //forof loop array destructuring syntax
    console.log(key, "=", value);  //for of loop in Map
}



const myobj= {
    'game' : 'NFS',       
    'game2' : 'spiderman'
}

for (const obj of myobj){   //here myobj(object is not iterable )
console.log(obj);
}
