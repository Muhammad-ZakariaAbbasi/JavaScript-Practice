// // //Call Back ...........
// function greeting(){
// console.log("Assalam o Alaikum");
// };
// console.log("Zakaria Abbasi here,")
// setTimeout(greeting,2000);

// //Promises............
// let myPromise=new Promise((resolve, reject) => {
//     let x="Muhammad";
//     if(x=="Muhammad"){
//         resolve("Yes it is Muhammad");
//     }
//     else{
//         reject("Error");
//     }
// });

// myPromise.then((result)=>{
//     console.log(result);
// })
// myPromise.catch((Error)=>{
// console.log(error);
// })
// Closure in JavaScript
// function start(){
//     var content="Hello World";
//     function company(){
//         console.log(content);
//  console.log("Aoa");

//     }
//     company();
// }
// start();
//async await..
async function getData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "GeeksforGeeks"});
    }, 200);
  });

  let Data = await promise;
  console.log(Data);
}

getData();
//opp.....
