function SubBtn() {
    
let PassWordIn = document.getElementById("PasswordInput").value;
let messageIs = document.getElementById("message");
// let submitBtn = document.getElementById("Button");

new RegExp(PassWordIn);

let pass = PassWordIn.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);


    if (PassWordIn.length != 0) {
        
        if (pass) {
            messageIs.innerText = "Valid password."
            messageIs.style.color = "#38bdf8";
        }else{
            messageIs.innerText = "Invalid password! Please Enter the Storng Password!"
            messageIs.style.color = "#fb0001"
        }
        
    }
    else if(PassWordIn.length >= 8){
        messageIs.innerText = "Valid password.";
        messageIs.style.color = "#38bdf8"
    }
    else{
        messageIs.innerText = "Password can't be Empty!"
        messageIs.style.color = "#fb0001";
    }

}

function ConfBtn() {
    let PassWordIn = document.getElementById("PasswordInput").value;
    let ConfirPassword = document.getElementById("ConPasswordInput").value;
    let messageIs = document.getElementById("message");    
    
    if (PassWordIn===ConfirPassword) {
        if(PassWordIn.length >= 8){
            messageIs.innerText = "Password Matched.";
            messageIs.style.color = "#38bdf8"
        }
        else{
            messageIs.innerText = "Password can't be Less then 8 Digits!";
            messageIs.style.color = "red";
        }
        
    }
    else{
        messageIs.innerText = "Password didn't match.";
        messageIs.style.color = "#fb0001"; 
    }

    
}

function EmailBtn() {
    let EmailInput = document.getElementById("emailInput").value;
    let messageIs = document.getElementById("message");
// let submitBtn = document.getElementById("Button");

new RegExp(EmailInput);

let mail = EmailInput.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)


    if (EmailInput.length != 0) {
        if (mail) {
            messageIs.innerText = "Valid email."
            messageIs.style.color = "#38bdf8";
        }else{
            messageIs.innerText = "Invalid email!"
            messageIs.style.color = "#fb0001"
        }
        
    }
    else{
        messageIs.innerText = "Email can't be Empty!"
        messageIs.style.color = "#fb0001";
    }

}

