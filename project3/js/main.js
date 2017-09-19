function calculation() {
    var num1, num2, num3, num4, num5, result;
    num1 = document.getElementById('n1').value; /* Срок кредита */
    num1 = parseInt(num1); /* Позволяет отображать только числовые значения */

    num2 = document.getElementById('n2').value; /* Сумма кредита */
    num2 = parseInt(num2);

    num3 = 23.8 / 12; /* Вшитая процентная ставка в год деленая на количество месяцев в году */

    num4 = document.getElementById('n4').value; /* Первоначальный взнос */
    num4 = parseInt(num4);

    num5 = ((num2 - num4) + (num2-num4) / 100 * 20); /* расчет суммы кредита + 10% с вычитом первоначального взноса */




    result = num5 / 100 * num3 * num1 + num5; /* расчет результата */
    document.getElementById('out').innerHTML = result;
}

function out1() {
    var rng = document.getElementById('n1'); //ползунок
    var i1 = document.getElementById('i1'); // поле ввода
    i1.value = rng.value;
}

function out2() {
    var rng = document.getElementById('n1'); //ползунок
    var i1 = document.getElementById('i1'); // поле ввода
    rng.value = i1.value;
}
