document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("cash_form");
    form.addEventListener("send",(event)=>{
        event.preventDefault();
        Withdrawal();
    });

});

function Withdrawal(){
    let balance = parseInt(document.getElementById("balance").value);
    let withdraw = parseInt(document.getElementById("withdraw").value);

    if(withdraw<=balance){
        let remainingBalance = balance-withdraw;
        alert("You have successfully withdrawn "+ withdraw + " from your account.");
        document.getElementById("balance").value = remainingBalance;
    }else{
        document.getElementById("error").innerHTML = "insufficent fund";
    }
}