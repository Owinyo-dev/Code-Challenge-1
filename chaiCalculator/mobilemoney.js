function mobileMoney(){
    let amountTransacted=prompt("What amount do you wish to send?");
    let amountSent=Number(amountTransacted);
    const transactionFee=(1.5/100)*amountSent;
    if (transactionFee<10){
        transactionFee=10;
    }else if (transactionFee>70){
        transactionFee=70;
    }else{
        transactionFee=transactionFee;
    }
    const totalAmount=transactionFee+amountSent;
    console.log(`Amount to be sent: KES${amountSent}\nTranscation Fee: KES${transactionFee}\nTotal Amount: KES${totalAmount}`);
}