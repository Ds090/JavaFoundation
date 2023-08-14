function VowelCounter() {
    let firstName = document.getElementById('name').value;

    let result = document.getElementById('output')

let  vowel = ['a', 'e', 'i', 'o', 'u'];

let count = 0;

for (const s of firstName.toLowerCase()) {
    if (vowel.includes(s)) {
        count++;
    }
}

console.log(result.innerText = count);
}