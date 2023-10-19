let changeColor = document.getElementById("change");

const randonColor = () =>{
    let val = "0123456789ABCDEF";
    let cins = "#";
    for(let i = 0; i < 6; i++){
        cins = cins + val[Math.floor(Math.random () * 16)];
    }
    return cins;
}

console.log(randonColor());

function ChangerandomColor() {
    document.body.style.backgroundColor = randonColor();
    
}

changeColor.addEventListener("dblclick", ChangerandomColor);