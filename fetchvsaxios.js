const axios = require("axios");


async function main(){
    const response =await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response.data.length)
}
main();
main();
main(); 

async function main(){
    const response =await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response.data.length)
}



async function main(){
    const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response.data.length)
}
main();


main();
// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const json = await response.json();
//     console.log(json.length)
// }
// main();

// // function main(){
// //     fetch("https://jsonplaceholder.typicode.com/posts")
// //     .then(async response => {
// //       const json= await response.json()
// //       console.log(json.length);
// //     })
// // }
// // main();


// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const json= await response.json();
//     console.log(json.length);

// }

// main();


// async function main(){
//     const response= await fetch("https://jsonplaceholder.typicode.com/posts")
//     const json = await response.json();
//     console.log(json);
// }
