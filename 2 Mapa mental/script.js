document.addEventListener("DOMContentLoaded", function () {
    // Genera un número aleatorio entre 1 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // Inicializa las variables de juego
    let intentosRestantes = 10;
    let intentosTomados = 0;
    const numerosUsados = [];
    let pista = "";

    // Obtén los elementos del DOM
    const inputNumero = document.getElementById("amountInput");
    const intentosRestantesElement = document.getElementById("intentos_restantes");
    const numerosUsadosElement = document.getElementById("Numeros_usados");
    const intentosTomadosElement = document.getElementById("Intentos");
    const pistaElement = document.getElementById("pista");

    // Maneja la presentación inicial
    intentosRestantesElement.textContent = intentosRestantes;

    // Maneja el envío del formulario
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const numeroElegido = parseInt(inputNumero.value);

        if (numerosUsados.includes(numeroElegido)) {
            alert("Ya has usado ese numero. Intentalo de nuevo.");
            return;
        }

        numerosUsados.push(numeroElegido);
        intentosTomados++;
        intentosRestantes--;

        if (numeroElegido === numeroAleatorio) {
            alert(`Felicidades, Adivinaste el numero en ${intentosTomados} intentos.`);
            reiniciarJuego();
        } else if (intentosRestantes === 0) {
            alert(`Perdiste, El Numero era ${numeroAleatorio}.`);
            reiniciarJuego();
        } else {
            intentosRestantesElement.textContent = intentosRestantes;
            intentosTomadosElement.textContent = intentosTomados;
            numerosUsadosElement.textContent = numerosUsados.join(", ");

            // Proporciona pistas sobre si el número es mayor o menor
            if (numeroElegido < numeroAleatorio) {
                pista = "El numero es mayor.";
            } else {
                pista = "El numero es menor.";
            }

            pistaElement.textContent = pista;
        }
    });

    // Función para reiniciar el juego
    function reiniciarJuego() {
        intentosRestantes = 10;
        intentosTomados = 0;
        numerosUsados.length = 0;
        intentosRestantesElement.textContent = intentosRestantes;
        intentosTomadosElement.textContent = intentosTomados;
        numerosUsadosElement.textContent = "";
        pistaElement.textContent = "";
        inputNumero.value = "";
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }
});