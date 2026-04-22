// //1)Spread Operator:
// //In Arrays........
let cart=["Cycle","Oven","Toys"];
console.log(cart);
let updatedCart=["Grocery","Laptop",...cart,"Jewelry"];
console.log(updatedCart);
// //In Object...
let ShopingCart={
    type: "Paintings",
    model: 2025,
    make: "Elegant Decor",
    variant: "Handmade art",
    price: 30000,
    qty: 2
  
}
let newShopingCart = {
...ShopingCart,
qty:3,
brand:"Zeee"
}
   console.log(newShopingCart);
//👉 Spread in array → adds values
//👉 Spread in object → copies + replaces same keys

//2)...Spread Operator.....
//In Arrays......


let arr=[1,2,3,4,5,6,7];
let [first,second,third,...others]=arr;
console.log(first,second,third,...others);

//In Object.......
let obj={
 type: "Paintings",
    model: 2025,
    make: "Elegant Decor",
    variant: "Handmade art",
    xyz:"sak",
};
let {type,model,make,...rest}=obj;


console.log(type,model,make,rest);