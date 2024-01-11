// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector("body")

// buttons.forEach( (button) => {
//     button.addEventListener('mouseover', (e) =>{
//     console.log(e);
//     console.log(e.target);
//     if(e.target.id === 'grey'){
//  body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'white'){
//  body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'blue'){
//  body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'yellow'){
//  body.style.backgroundColor = e.target.id;
//     }
//     if(e.target.id === 'green'){
//  body.style.backgroundColor = e.target.id;
//     }
//     })
// } )


const button = document.querySelectorAll('.button')
const body2 = document.querySelector("body")

button.forEach( (btn) => {
btn.addEventListener('click', (event) =>{
    console.log(event);
    console.log(event.target);
    switch (event.target.id) {
        case 'grey':
        case 'white':
        case 'blue':
        case 'yellow':
        case 'green':
        body2.style.backgroundColor = event.target.id;
        break;
} 
})})


