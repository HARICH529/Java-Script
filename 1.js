// console.log("Hello")

// document.write("Hello")
// //document.getElementById("demo").innerHTML="<h1>Hello Again</h1>"

// //document.getElementById("demo").textContent="<h1>Hello Again</h1>"

// //alert(" Game is going to end in 15min")

//var let const
// a="Hari"
// b=9
// console.log(typeof(a))
// console.log(typeof(b))

var a=9;
let b=10;
const c=11;

console.log(a,b,c)

{
    let fname="Hari";
    let contact="hari@example.com";
    const mobile="1234567890";
    //mobile="3456789012";
    console.table([fname,contact,mobile]);
}

//Conditional Statements

let number1=9;
if(number1==9){
    console.log("yes it is true");
}
else{
    console.log("its not true");
}

//Movie tickect price based on age

let age=14;
let price;

if(age<5){
    price="free";
}
else if(age<=12){
    price="$12";
}
else if(age<=60){
    price="$15";
}
else{
    price="$5";
}

console.log(price);

