const Cart = [
    {name:"Lenovo",
     Price: 40000,
     Quantity: 2},
     {name:"Dell",
     Price: 30000,
     Quantity: 4},
     {name:"MacBook1",
     Price: 60000,
     Quantity: 3},
     {name:"Samsung",
     Price: 50000,
     Quantity: 2},
     {name:"HP",
     Price: 45000,
     Quantity: 2},
]

const calculatePrice = Cart.reduce((preval, current_Value) => {
    return preval + current_Value.Price;
}, 0)

const total_price = calculatePrice;
console.log("Sub Total Price:",total_price);

const calculateQunt = Cart.reduce((total, iteam) =>{
    return total + iteam.Quantity;
}, 0)

const total_quantity = calculateQunt;
console.log("iteam Quantity:",total_quantity);