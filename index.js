function caladd(){
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let total= Number(num1)+ Number(num2);
    document.getElementById('result').innerHTML = total;
}
function calsubtract(){
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let total= Number(num1)- Number(num2);
    document.getElementById('result').innerHTML = total;
}
function calmultiply(){
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let total= Number(num1)* Number(num2);
    document.getElementById('result').innerHTML = total;
}
function caldivide() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    if (num2 == "0"){
        document.getElementById('result').innerHTML= "Cannot divide byJavaScript Classwork 02 zero!";
    }
    else {
        let total= Number(num1) / Number(num2);
        document.getElementById('result').innerHTML = total;
    }
}

