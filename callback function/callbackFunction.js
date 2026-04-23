function fetchData(callback){
    setTimeout(() => {
        const data = {name : "sanika kolekar", age : 22};
        callback(data);
    }, 2000);
}

function displayData(data){
    console.log("Data :", data);
}

fetchData(displayData);