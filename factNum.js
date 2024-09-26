//Qué dolor de cabeza;((
document.getElementById('calculateButton').addEventListener('click', function () {
    let input = document.getElementById('numberInput').value;
    let number = parseInt(input, 10);

    if (isNaN(number) || number < 0) {
        document.getElementById('resultado').innerText = "Ingrese un número entero positivo.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = `El factorial de ${number} es ${factorial}. Buen trabajo, mailov muak `;
});