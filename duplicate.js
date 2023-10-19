
    const Add1 = document.querySelectorAll(`#Add`);


    
    var output1 = document.getElementById(`output`);

    const selectImg = [];


    Add1.forEach((button) => {
        button.addEventListener(`click`, () => {
            const productitem = button.parentElement;
            const productimage = productitem.querySelector(`img`);

            if (selectImg.some((img) => img.src === productimage.src)) {
                alert(`You have already selected this Product!`);
                return;
            }
            const clonedImg = productimage.cloneNode();
            output1.appendChild(clonedImg);
            selectImg.push(clonedImg);
        } )
    })



