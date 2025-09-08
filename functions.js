// let person1_num1=2;
// let person1_num2=4;

// let sum;
// sum=person1_num1+person1_num2;

// let person2_num1=90;
// let person2_num2=77;
// let person2_sum=person2_num1+person2_num2;

//Functions

// function sum(a,b){
//     let add=a+b;
//     console.log(add);
// }

// sum(2,3);
// sum(56,89);

// //Types of Functions
//     //Non Parameterized and Parameterized

//     function details(){
//         console.log("details");
//     }

//     details(); //function call


// //arrow functions
// const add=()=>{
//     console.log("ECMA script Function");
// }

// add();


// (function Show(){
//     console.log("show function in javascript");
// })()

// const data=()=>{
//     console.log("Hello from data function");
// }

// const newData=data();
// console.log(newData);
// //newData();

//Nested Function
function parent(){
    let a=8;
    function child(){
        let b=10;
        console.log(a,b);
    }
    //child();
    return child;
}

parent()();

function data(){
    let b=10;
    let c=89;
    function innerFunction(){
        let c=100;
        console.log(b,c);
    }
    innerFunction();
}
data();


function counterData(){
    let counter=0;
    return function(){
        counter++;
        console.log(counter);
        return counter;
    }
}
const add=counterData();
add();
add();
add();

function bill(units){
    let price;
    if(units<100){
        price=units;
        console.log(price);
    }
    else if(units<=200){
        price=100+2*(units-100);
        console.log(price);
    }
    else{
        price=100+100*2+(units-200)*3;
        console.log(price);
    }
}
bill(300);
bill(150);
bill(85);

//High Order Function

function message(name){
    return `Hello ${name}, how are you`
}

function datab(callack){
    const username="Hari";
    return message(username);
}

console.log(datab(message));