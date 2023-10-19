let num = [12, 14, 15, 10, 48, 50];

for(let i = 0; i < num.length; i++){
    if (num[i]%3===0 && num[i]%2 !== 0) {
        console.log(num[i]);
    }else{
        continue;
    }
}


