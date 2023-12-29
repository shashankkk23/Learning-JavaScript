// reduce
//reduce also takes callbackfn

const myNums = [1, 2, 3, 4];
//first type of reduce in arrow function
const total = myNums.reduce((accumulator, currentValue) => {
  //current value is: ${myNums}
  // console.log(`acuumulator is: ${accumulator} and currentvalue is${currentValue}`);
  return accumulator + currentValue;
}, 5); //here 5 is accumulator's value
// console.log(total);

//second type reduceMethod in arrow function
const newNums = myNums.reduce((accumulator, currentvalue) => accumulator + currentvalue,2);
// console.log(newNums);


// reduce method in normal function 
const anotherNums = myNums.reduce(function (accumulator, currentvalue){
    // console.log(`accumulator value is: ${accumulator} and currentvalue is: ${currentvalue}`);
return accumulator + currentvalue
},1)
// console.log(anotherNums);


// reallife example of reduce 

const shoppingCart = [
    {
        CourseName : "JavaScript Course",
        CoursePrice : 2999
    },
    {
        CourseName : "Python Course",
        CoursePrice : 999
    },
    {
        CourseName : "Java Course",
        CoursePrice : 299
    },
    {
        CourseName : "Data Science Course",
        CoursePrice : 12999
    },
    {
        CourseName : "Machine Learning Course",
        CoursePrice : 29999
    },
]

const priceToPAy = shoppingCart.reduce( (accumulator, Price) => (accumulator + Price.CoursePrice ),0 )
console.log(`Total Amout To Pay: ${priceToPAy}`);