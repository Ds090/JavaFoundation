function DescountBtn(){
let ListPrice = document.getElementById("ListPrice").value;
let SalesPrice = document.getElementById("SalesPrice").value
let Result = document.getElementById("Result");

    if (ListPrice === "" && SalesPrice === "") {
        alert("Please Enter the List Price and Sales Price")
    }else if(SalesPrice > ListPrice){
        alert("Please Enter the valid Sales Price!")
    }
    else{
    let result = ((ListPrice - SalesPrice)/ListPrice) * 100;
    result = Math.round(result);
    Result.innerHTML = `${result}% Discount`;
    }
}
