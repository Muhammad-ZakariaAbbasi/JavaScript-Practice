//Smart Shopping Cart...........destructring+arrays Methods..........................

let cart = [
  {
    type: "Mountain Bike",
    model: 2025,
    make: "Ferrari",
    variant: "SK Bike",
    price: 10000,
    qty: 2
  },
  {
    type: "Oven",
    model: 2025,
    make: "Dawlence",
    variant: "Premium",
    price: 20000,
    qty: 2
  },
  {
    type: "Paintings",
    model: 2025,
    make: "Elegant Decor",
    variant: "Handmade art",
    price: 30000,
    qty: 2
  }
];
//🔹 1. Show All Cart Items
let cartItems=cart.map(({type,price,qty})=>{
console.log("Type is"+" "+type+" "+"Price is "+" "+price+" "+"Quantity is"+" "+qty);
});
//🔹 2. Show Total Bill
 let totalBill=cart.reduce((total,item)=>{
return total+item.price*item.qty;
},0);
console.log("Your Total bill is "+totalBill);
//3.Filter Item

let expensiveItems = cart.filter(({price}) => price > 20000);

console.log("Most Expensive Items" , expensiveItems);

