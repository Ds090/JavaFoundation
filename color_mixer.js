function ColorMixer() {
    let color1 = document.getElementById("Color1").value;
    let color2 = document.getElementById("Color2").value;
    
    console.log(color1,color2);

    let OutPutColor = document.getElementById("otput_color");

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                OutPutColor.style.backgroundColor = "purple";
                break;
            case "yellow":
                OutPutColor.style.backgroundColor = "orange";
                break;  
                default : alert("Invalid Color Combination!");       
            }
            break;

            case "blue":
                switch (color2) {
                    case "yellow":
                        OutPutColor.style.backgroundColor = "green";
                        break;
                
                    default: alert("Invalid Color Combination!");
                        break;
                }
    }


}