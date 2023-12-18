// +++++// Important Note and prototype++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1 = Prototype of String 
// The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

// 2 =  The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().

// to be continued +++++++++++++++=============+++++++++++++++++++++++++++++++above note

const name = "Shashank";
const repo = 1;

// console.log(name + repo + "value");

console.log(`Hello my name is ${name} and my current repo is ${repo}`);















