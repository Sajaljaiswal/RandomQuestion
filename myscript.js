

function twoDigit() {

    let num1 = Math.trunc(Math.random() * 99);
    let num2 = Math.trunc(Math.random() * 99);
    document.querySelector('.num1').textContent = num1;
    document.querySelector('.num2').textContent = num2;
    const td = num1 * num2;
    document.querySelector('.td').textContent = td;

}

function tww() {
    console.log(num1)
}

function threeDigit() {

    const num3 = Math.trunc(Math.random() * 999);
    const num4 = Math.trunc(Math.random() * 999);

    document.querySelector('.num3').textContent = num3;
    document.querySelector('.num4').textContent = num4;
}

function fiveDigit() {

    const num5 = Math.trunc(Math.random() * 99999);
    const num6 = Math.trunc(Math.random() * 99999);

    document.querySelector('.num5').textContent = num5;
    document.querySelector('.num6').textContent = num6;
}
function sixDigit() {

    const num7 = Math.trunc(Math.random() * 999999);
    const num8 = Math.trunc(Math.random() * 999999);

    document.querySelector('.num7').textContent = num7;
    document.querySelector('.num8').textContent = num8;
}

function fourSub() {

    const num9 = Math.trunc(Math.random() * 99999);
    const num10 = Math.trunc(Math.random() * 9999);

    document.querySelector('.num9').textContent = num9;
    document.querySelector('.num10').textContent = num10;
}