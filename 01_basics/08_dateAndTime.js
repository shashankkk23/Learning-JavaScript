const myDate = new Date()
//console.log(typeof myDate);

//console.log(myDate.toString());//output will be [Fri Dec 15 2023 15:38:40 GMT+0530 (India Standard Time)]

//console.log(myDate.toDateString());  //out put will be [FRI Dec 15 2023]

//console.log(myDate.toISOString());  //out put will be [2023-12-15T10:00:35.958Z]

//console.log(myDate.toLocaleString());  //out put will be [15/12/2023, 3:31:32 pm]

//console.log(myDate.toJSON());  //out put will be [2023-12-15T10:07:01.844Z]

//console.log(myDate.toLocaleDateString());  //out put will be [15/12/2023]

// let myCreatedDate = new Date(2023 , 0 , 23) 
// let myCreatedDate = new Date(2023 , 0 , 23, 2 , 6) 
// let myCreatedDate = new Date("2023-03-15")   
let myCreatedDate = new Date("01-15-2024")  //this formate use in india 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp.toString);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate =new Date()
// console.log(newDate.getMonth()); 
// console.log(`the month is ${newDate.toDateString()} and the time is ${myTimeStamp}`);

newDate.toLocaleTimeString('default', {
    weekday:"long",
     
})

  