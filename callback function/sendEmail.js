function sendEmail(orderDetails){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Email sent for order: ${orderDetails.item}`);
            resolve("Email sent successfully!");
        }, 2000);
    });
}

async function main(){
    const message = await sendEmail({item: "Laptop"});
    console.log(message);   
}
main();