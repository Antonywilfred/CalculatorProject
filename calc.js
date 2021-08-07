
function clr() {
    return document.getElementById("output-value").innerHTML="";
}

function printOutput(num1) {
    document.getElementById("output-value").innerHTML=document.getElementById("output-value").innerHTML+(document.getElementById("output-value").innerHTML=num1)    
    
    return document.getElementById("output-value").innerHTML;
}

function equal() {
    var exp=document.getElementById("output-value").innerHTML;
    if(exp){
        return document.getElementById("output-value").innerHTML=eval(exp);
    }    
}