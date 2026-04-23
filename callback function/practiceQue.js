// promises, Async/Await, and practical use
let myPromise = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully!");
});

myPromise.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error("Something went wrong:", error);
});

// practice question
function getUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({id : 1, name : "sanika"});
        },1000)
});
}

getUser.then((user) => {
    console.log("User received:",user)
});