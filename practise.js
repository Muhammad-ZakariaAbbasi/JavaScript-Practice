// Shoping Cart Practise Project:
// Topics:variacles,functions,Arrow Functions,objects:

console.log("*************Your Shoping Cart************")
let cycle =
{type:
    "Mountain Bike",
    Model:2025,
    Make:"Ferrari",
    Variant:"SK Bike",
    cyclePrice:10000,
}
let MicrowaveOven =
{
    type:"Oven",
    Model:2025,
    Make:"Dawlence",
    Variant:"Premium",
    MicrowaveOvenPrice:20000,
}
let WallDecor=
{type:"Paintings",
    Model:2025,
    Make:"Elegant Decor",
    Variant:"Handmade art",
    WallDecorPrice:30000,
}

function calculateTotal(){
    let totalBill=cycle.cyclePrice+MicrowaveOven.MicrowaveOvenPrice+WallDecor.WallDecorPrice;
 console.log("Your Total Bill is"+ " " + totalBill);

}
calculateTotal();
 function applyDiscount(percent){
      let totalBill=cycle.cyclePrice+MicrowaveOven.MicrowaveOvenPrice+WallDecor.WallDecorPrice;
     discount=totalBill*percent/100;
     billAfterDiscount = totalBill-discount;
     console.log("Your Bill After Discount is "+" "+billAfterDiscount);
}
applyDiscount(20);

let Discount=(percent) =>{
 let totalBill=cycle.cyclePrice+MicrowaveOven.MicrowaveOvenPrice+WallDecor.WallDecorPrice;
      discount=totalBill*percent/100;
      billAfterDiscount = totalBill-discount;
      console.log("Your Bill After Discount is "+" "+ billAfterDiscount);
}
Discount(50);