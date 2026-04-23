function readFile(callback){
    setTimeout(() => {
        const fileData = "This is file content.";
        callback(fileData);
    }, 1500);
}

readFile((data) => {
    console.log("File Read :", data);
});