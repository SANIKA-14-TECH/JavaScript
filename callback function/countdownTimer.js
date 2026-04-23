function countdown(seconds){
    let remaining = seconds;
    const timer = setInterval(() => {
        console.log(`${remaining} seconds remaining`);
        remaining--;
        if(remaining < 0){
            clearInterval(timer);
            console.log("Time's up!");
        }
    }, 1000);
}

countdown(5);