let ChangeText = document.getElementById("ChangeTxt");
let ChangeBtn = document.getElementById("ChangeBtn");

ChangeBtn.addEventListener("click", () =>{
    if (ChangeText.innerText === "The most affordable learning platform") {
        ChangeText.innerText = "PW Skills";
    }

})