function appendNumber(num){
document.getElementById("display").value += num;
}

function appendOperator(op){
document.getElementById("display").value += op;
}

function cleanDisplay(){
document.getElementById("display").value="";
}

function deleteList(){
let d=document.getElementById("display");
d.value=d.value.slice(0,-1);
}

function calculator(){
try{
document.getElementById("display").value=
eval(document.getElementById("display").value);
}
catch{
alert("Error");
}
}