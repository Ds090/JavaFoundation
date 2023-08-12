// const prompt = require("prompt-sync")();
function Calculater() {
    let myText1 =+ document.getElementById("mytext1").value;
    let OpreationStart = document.getElementById("Operation").value;
    let myText2 =+ document.getElementById("mytext2").value;

    console.log (parseInt(myText1,myText2));

    console.log(OpreationStart);

    let result = document.getElementById("Answer");

    switch (OpreationStart) {
        case "+":
            result.textContent = myText1 + myText2;
            break;
        case "-":
            result.textContent = myText1 - myText2;
            break;
        case "*":
            result.textContent = myText1 * myText2;
            break;
        case "/":
            result.textContent = myText1 / myText2;
            break;            
    
        default:
            alert("Invalid Opration!");
            break;
    }
}