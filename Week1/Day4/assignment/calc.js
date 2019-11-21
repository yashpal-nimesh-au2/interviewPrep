function Plus(){
    let val= document.getElementById("input");
let newVal=(val.value+"+");
val.value=newVal;
}
function Minus(){
    let val= document.getElementById("input");
let newVal=(val.value+"-");
val.value=newVal;
}
function Multiply(){
    let val= document.getElementById("input");
let newVal=(val.value+"*");
val.value=newVal;
}
function Divide(){
    let val= document.getElementById("input");
let newVal=(val.value+"/");
val.value=newVal;
}
function Calc(){
    let val= document.getElementById("input").value;
    // console.log(val)
let result= eval(val);
document.getElementById("res").innerText=result;
localStorage.setItem("expression",val)
// console.log(result)
}
function useHistory(){
    let exp=localStorage.getItem("expression");
    document.getElementById("input").value=exp;
    // console.log(exp)
}