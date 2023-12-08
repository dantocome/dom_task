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
    let cash_form = document.getElementById("cash_form");
    let para = document.getElementById("para1");
    let para2 = document.getElementById("para2");
    let color = document.getElementById("color");
    let bala = document.getElementById("bala");
    let button = document.getElementById("send");
    let ba = document.getElementById("ba");

    if(withdraw<=balance){
        let remainingBalance = balance-withdraw;
        alert("You have successfully withdrawn "+ withdraw + " from your account.");
        document.getElementById("balance").value = remainingBalance;
        balance.classList.add("withdrawal_form");
        cash_form.classList.add("cash_form");
        para.classList.add("para1")
        para2.classList.add("para2");
        color.classList.add("color");
        bala.classList.add("bala");
        button.classList.add("send");
        ba.classList.add("ba")


    }else{
        document.getElementById("error").innerHTML =  alert("insufficeint funds");


    }
}