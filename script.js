
let result = document.getElementById('display');

function appendToDisplay(value){
    if( result.value === "0"){
        result.value = value;
    }else{
        result.value += value;
    }
}
function clearDisplay(){
    result.value = "";
}
function deleteLast(){
    result.value = result.value.slice(0, -1);
}
function  calculate(){
    try{
        result.value = eval(result.value);
    }
    catch{
        result.value = "Error";
    }
}