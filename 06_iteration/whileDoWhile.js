// while loop

let score = 0;
while (score <= 10) {
  // console.log(score);
  score = score + 2; //incrementing by 2
}

// let myArr = ["shashank", "Tiwari"];
// let arr = 0;
// while (arr < myArr.length) {
//   // console.log(myArr[arr]);
//   arr = arr + 1;
// }

let myArr = ["Shaktimaan", "SpiderMan", "BatMan", "Ironman"]
let arr = 0
while(arr < myArr.length){
    // console.log(myArr[arr]);
    arr = arr + 1
}

let score1 = 11

do{
    // console.log(`the score is: ${score1}`);
    score1++
}while(score1 <= 10);  //in do while loop we check condition at the end


let St = 1

do{
// console.log(`my name is: ${St}`);
St++
}while(St <= 10);



// let  i, j, k;

// for(i = 1; i <= 5; i++){
//     for(k = 1; k <=(5-i); k++){
//         doucument.wrire("&nbps");
//     }
//     for(j = 1; j <= i; j++){
//         doucument.write("*");
//     }
//     document.write("")
// } 

// for(let i = 1; i <= 10; i++){
//     console.log(`${i}: Shashank \n`);
// }

for(let i = 1; i <= 5; i++){

    for(let j = 1; j <= i; j++){
        
        console.log("*");
    }
    console.log("</br>");
}