function getOrders(userId){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Orders for user ${userId} fetched`);
            resolve(["order1", "order2", "order3"]);
        }, 1500);
    });
}

getOrders(123).then((orders) => {
    console.log("Orders:", orders);
});