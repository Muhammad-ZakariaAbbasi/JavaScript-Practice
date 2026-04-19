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




//   **********************************************Desrutctrueing in JS...........****************************************
//*************************************************Arrays Destructring............****************************************
//********************************without Destructring***************************:
 let arr=[10,20,30,40,50,60,70,80,90,100];
 let a = arr[0];
 let b = arr[4];
 let c = arr[5];
 console.log(a,b,c);

let Cars = ["Yaris","Corolla","Civic"];
 let First = Cars[0];
 let Second = Cars[1];
let Third = Cars[2];
 console.log(First,Second,Third);
//***************************************************with Destructring*******************************************************:
let arr=[10,20,30];
let[a,b,c,d]=arr
console.log(a,b,c);

let Cars = ["Yaris","Corolla","Civic"];
let[First,Second, Third] =Cars;
console.log(First,Third);

// let x=3; 
let y=5;
 [x,y]=[y,x]
 console.log(x,y);
//**********************************************Object Destructring**************************************** */
let car={
    Make:"Toyota",
    Model:2025,
    Variant:"Yaris",
}
 let {Make:MakeOfCar,Model,Variant} = car;
console.log(MakeOfCar,Model,Variant);


let user={
name:"Zakaria",
addres:{
    city:"Islamabad",
}
}
let {addres:{city}}=user;
console.log(city);
//without:

function printUser(user){
console.log(user.name);
}

printUser(user);


//With:
function printUser({name}){
    console.log(name);
}
//Real-Life Example (API style)
let response = {
  status: 200,
  data: {
    username: "zakaria",
    email: "test@gmail.com"
  }
};

let { data: { username, email } } = response;

console.log(username);
