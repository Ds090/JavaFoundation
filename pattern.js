function star() {
    var num = document.getElementById("Number").value;

    // console.log(num);

    var result = document.getElementById("result");

    var string = "";

    for(var i = 0; i <= num; i++){
        for(var j = 0; j <= num - i; j++){
            result.textContent = string += "*";
        }
        result.innerText = string += "\n";
}
}