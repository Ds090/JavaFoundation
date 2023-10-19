function Economy() {
    let EcoDay = document.getElementById('DayEco').value;
    let rentalEco = document.getElementById('EconomyCost');
    if(EcoDay.length != 0){
    rentalEco.value = EcoDay * 4000;
    }else{
        alert("Box Can't be Empty!");
    }
}

function Midsize() {
    let MidDay = document.getElementById('DayMid').value;
    let rentalMid = document.getElementById('MidsizeCost');
    if(MidDay.length != 0){
    rentalMid.value = MidDay * 10000;
    }
    else{
        alert("Box Can't be Empty!");
    }
}

function Luxury() {
    let LuxDay = document.getElementById('DayLux').value;
    let rentalLux = document.getElementById('LuxuryCost');
    if(LuxDay.length != 0){
    rentalLux.value = LuxDay * 20000;
    }
    else{
        alert("Box Can't be Empty!");
    }
}

function Reset(){
    let EcoDay = document.getElementById("DayEco");
    let rentalEco = document.getElementById("EconomyCost");
    
    
    EcoDay.value = "";
    rentalEco.value = "";
           
    
    }

    function Reset2(){
        let MidDay = document.getElementById("DayMid");
        let rentalMid = document.getElementById("MidsizeCost");
        
        
        MidDay.value = "";
        rentalMid.value = "";
               
        
        }

        function Reset3(){
            let LuxDay = document.getElementById("DayLux");
            let rentalLux = document.getElementById("LuxuryCost");
            
            
            LuxDay.value = "";
            rentalLux.value = "";
                   
            
            }

