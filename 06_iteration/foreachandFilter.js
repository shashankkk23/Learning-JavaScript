// for each and filter

// const arr = ["js", "py", "java", "ruby"]

// const newarr = arr.forEach( (langs)=>{  //if we store foreach in any variable we have to give it return  keyword #
// #but it will not return any value  thats why we use filter
// # if we want we can use for each also in==with IF statement example below#+++++++++++++++++
// console.log(langs);
// return langs
// }  )
// console.log(newarr);  //it will give undefined as output

// we use filter when we have to take one or two values from array ++++++++++++++
//filter takes condition in it also takes call back function like for each loop
//filter basics

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNums = arr.filter( (num)=> (num > 5)); //if we give condition on same line or in paranthesis()  then we dont have to give return keyword
// console.log(newNums);

const NewArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SecondArr = NewArr.filter((arr) => {
  return arr < 5; //if we use scope{} then we have to give return keywords
});
//  console.log(SecondArr);

// how to use foreach to print greater values or some specific values
// it uses if statement

const NewOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondOne = [];

NewOne.forEach((greaterNums) => {
  if (greaterNums > 3) {
    secondOne.push(greaterNums);
  }
});
// console.log(secondOne);

// +++++++========== FILTER PRACTICE +++++++++++++++++================

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let newBooks = books.filter((bk) => bk.genre === "Science");

newBooks = books.filter((bk) => {
  return bk.publish >= 1999 && bk.genre === "Science" && bk.edition >= 2016;
});
// console.log(newBooks);
