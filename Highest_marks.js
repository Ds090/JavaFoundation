function MaxMarks() {
    const Marks = [
        parseInt(document.querySelector('#Number1').value),
        parseInt(document.querySelector('#Number2').value),
        parseInt(document.querySelector('#Number3').value),
        parseInt(document.querySelector('#Number4').value),
        parseInt(document.querySelector('#Number5').value)
    ];

    let result = document.getElementById("output");

    result.textContent = (Marks.length > 0)?Math.max(...Marks):alert('Invalid Number');
}


