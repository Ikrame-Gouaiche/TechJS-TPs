console.log("Program started");
const myPromise = new Promise((resolve) => {
    setTimeout(()=> resolve("Step 1 complete"), 3000)
})

console.log(myPromise);
console.log("Program in progress");

myPromise.then(res => {
    console.log(res);
    return new Promise((resolve) => {
    setTimeout(()=> resolve("Step 2 complete"), 3000)
    });
}).then(res2 =>{
    console.log(res2);
})




