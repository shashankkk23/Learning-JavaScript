// for

for(let i = 1; i <= 10; i++){
    const value = i 
    // console.log(i);
}

for(let i = 1; i <= 10; i++){
    // console.log(`outer loop ${i}`);
    for(let j = 1; j <= 10; j++){
    //console.log(`inner loop ${j} outer loop ${i}`); it will print outer loop 1 and inner loop 1-2 and soo on until outer loop reach to 10

    // console.log(i + ' * ' + j + ' = ' + i*j); table print 1-10
    }
}


// for loop for Array

const myArr = ["shashank", "Tiwari", "sandi", "Arsiya", "Bazar", "ShahGanj", "Jaunpur"]
// console.log(myArr.length);

for(let i = 0; i < myArr.length; i++){     //array in for loop
  const arrStore = myArr[i]
//   console.log(arrStore);
}

// Break and continue in for loop

for(let i = 1; i <= 20; i++){
    if(i == 13){
        // console.log('13 detected ');  //it will come out from loop after 13 if we use break statement
        break

    }
    // console.log(i);

}

// continue

for(let i = 1; i <= 20; i++){
    if(i == 13){
        // console.log('13 is detected '); 
        continue   //it will skip 1 time and continue running loop after detecting 13
    }
    // console.log(i);
}