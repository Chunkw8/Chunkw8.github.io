function calculation() {
    var num1, num2, num3, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    num3 = document.getElementById('n3').value;
    num3 = parseInt(num3);
     
    result = num2/100*num3*num1+num2;
    document.getElementById('out').innerHTML = result;
}