
    let Text = document.getElementById("text");
    const words = Text.textContent.split(" ");

    for(let i = 0; i < words.length;i++){
        if (words[i].length > 8) {
            var span = document.createElement('span');
            span.textContent = words[i];
            span.style.background = "yellow"

            words[i] = span.outerHTML;
        }
    }

    Text.innerHTML = words.join(" ");

    
