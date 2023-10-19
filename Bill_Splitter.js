
function BillSplitter() {
let Input_total = document.getElementById("Input_tot").value;
let NumOfPerson = document.getElementById("Num_of_person").value;
let TotalOutput = document.getElementById("Total_output");
let BellPerPerson = document.getElementById("Bill_Per_Person");


    
        // const BillAmmount = parseInt(Input_total.value);
        // const numberOfperson = parseInt(NumOfPerson.value);

        if (Input_total.length != 0) {
                const eachPersonBill = Input_total / NumOfPerson;

                TotalOutput.innerText = `₹ ${Input_total}`;
                BellPerPerson.innerText = `₹ ${eachPersonBill}`;
                
        }else{
                alert("All Box can\'t be Empty!")
                TotalOutput.value = "₹ 0.00"
                BellPerPerson.value = `₹ 0.00`
        }
                
                
    
   

}
