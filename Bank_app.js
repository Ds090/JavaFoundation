let DepositOutput = document.getElementById("Deposit");
let WithdrawOutput = document.getElementById("Withdraw");
let BalanceOutput = document.getElementById("Balance");
let DepositInput = document.getElementById("DepositInput");
let DepositBtn = document.getElementById("DepositBtn");
let WithdrawInput = document.getElementById("WithdrawInput");
let WithdrawBtn = document.getElementById("WithdrawBtn");


DepositBtn.addEventListener("click", () =>{
    const value = DepositInput.value;
    if (Number(value) === 0) {
        alert("You don 't have any balance to Deposit")
    }else{
 
    const Depositvalue = Number(DepositOutput.innerText) + Number(value);
    const Balancevalue = Number(BalanceOutput.innerText) + Number(value);
    DepositOutput.innerText = Depositvalue;
    BalanceOutput.innerText = Balancevalue;
    DepositInput.value = "";
    }
})

WithdrawBtn.addEventListener("click", () =>{
    const value = WithdrawInput.value;
    if (Number(value) === 0) { 
        alert("You don 't have any balance to withdraw")
    } else if(Number(value) > Number(BalanceOutput.innerText)){
        alert("You don 't have that much balance to withdraw")
    }
    else{
    const Withdrawvalue = Number(WithdrawOutput.innerText) + Number(value);
    const Balancevalue = Number(BalanceOutput.innerText) - Number(value);
    WithdrawOutput.innerText = Withdrawvalue;
    BalanceOutput.innerText = Balancevalue;
    WithdrawInput.value = "";
    }
})