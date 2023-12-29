// ForEAch loop it contain callback function, CAllBack function means any function

const lang = ["JS", "py", "cpp", "java", "swift"]

lang.forEach( function(item) {   // regular function in forEach
    // console.log(item);          
})

lang.forEach( (item)=>{   //arrow function in for each loop
// console.log(item);
} )


function PrintMe(){
    // console.log(lang);
}
// lang.forEach(PrintMe)  //we dont have to execute function here if we are printing function

lang.forEach( (item, index, array)=>{
    // console.log(item,index, array);

} )

// objects in array 

const LanguaGes= [
    {
        LanguageName : "JavaScript",
        LanguageFileName : "js"
    },
    
    {
        LanguageName : "Ruby",
        LanguageFileName : "rb"
    },
    {
        LanguageName : "Python",
        LanguageFileName : "py"
    }

]

LanguaGes.forEach( (item, index, array)=>{
console.log(item.LanguageName, index, array);
} )

