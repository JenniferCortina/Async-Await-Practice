console.log("Script is loaded!")

//To define an async function, place the async keyword in front of the function//
// async function getRandomNumber(min, max) {  
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), .0005); 
//     });
  
//     let result = await promise; // Pauses and waits for the return value
//     alert(result);
//   }
  
//   getRandomNumber();
  

//   //I want to use the Math.random to generate random numbers and min max for the elements//
//   let getRandomNum = Math.random() * (max - min) + min ;
//   return Math.round(randomNum);
//   rand(10, 20);
//   

//Fetch remote data using Async Await

async function fetchMiami () {
    // Wait for the response of the fetch call
    let response = await fetch('https://geocode.xyz/miami?json=2');
    // The promise should resolve
    let data = await response.json();
    // The second promise should resolve
    return data;
  }
  
  // trigger async function
// log response or catch error of fetch promise
fetchMiami()
.then(data => console.log(data))
.catch(reason => console.log(reason.message))
    