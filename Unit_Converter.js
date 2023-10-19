function ConvertCel() {
let fahrInput = document.getElementById("Fahrenheitinput").value;
let resultCels = document.getElementById("resultCel");




   let c = (fahrInput - 32) * 5/9;
    resultCels.value = c;
}

function ConvertFah() {
let CelsiusInput = document.getElementById("Celsiusinput").value;
let resultFahre = document.getElementById("resultFahr");

let f = (CelsiusInput * 9/5) + 32;
resultFahre.value = f;
}

function Reset(){
let fahrInput = document.getElementById("Fahrenheitinput");
let resultCels = document.getElementById("resultCel");


        fahrInput.value = "";
        resultCels.value = "";
       

}

function Reset2() {
    let CelsiusInput = document.getElementById("Celsiusinput");
    let resultFahre = document.getElementById("resultFahr");

    CelsiusInput.value = "";
    resultFahre.value = "";
}