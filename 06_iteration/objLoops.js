// forin loops for OBJECTS it will work in ARRAYS[] as well! 

const myObj = {
    js : "JavaScript",
    py : "python",
    cpp : "C++",
    swift : "Swift by Apple"
}

for (const key in myObj){  //for in loops syntax
    // console.log(`${key} is a shortform of ${myObj[key]}`);
}

const myArr= ["js", "py", "cpp", "java", "php", "rd"]

for(const arr  in myArr){ 
    // console.log(arr);//it will print index value of array
    // console.log(myArr[arr]);  //it will print value of keys
}



// for in loop in Map
// const  map = new Map()
// map.set('IN',  "India")
// map.set('US', "United State Of America") 
// map.set('Fr', "France")


// for(const key in Map){   //map will not iterate, maps iteration is has different syntax 
//     console.log(key);
// }