document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const amountInput = document.getElementById("amount-input");
    const currencyListbox = document.getElementById("currency-listbox");
    const conversionTypeListbox = document.getElementById("conversion-type");
    const resultContainer = document.getElementById("result-container");
    const nameInput = document.getElementById("Name");



    form.addEventListener("submit", function (e) {
        e.preventDefault();


        var name = nameInput.value;

        // Obtiene la moneda actual y a que moneda
        const selectedCurrency = currencyListbox.value;
        const conversionType = conversionTypeListbox.value;

        // Obtiene el valor del monto
        const amount = parseFloat(amountInput.value);

        // Creamos los cambios
        const usdToLempiraRate = 24.70;
        const eurToLempiraRate = 28.15;
        const gbpToLempiraRate = 32.80;
        //Agregar mas conversiones

        // Switch case para cada uno de los posibles casos
        let result = 0;
        switch (selectedCurrency) {
            case "usd":
                result = amount * (conversionType === "to-lempira" ? usdToLempiraRate : 1 / usdToLempiraRate);
                break;
            case "eur":
                result = amount * (conversionType === "to-lempira" ? eurToLempiraRate : 1 / eurToLempiraRate);
                break;
            case "gbp":
                result = amount * (conversionType === "to-lempira" ? gbpToLempiraRate : 1 / gbpToLempiraRate);
                break;
            // Aqui agregar mas casos para otras monedas que se deseen
        }

        // Muestra el resultado en contenedor de resultados y arregla el calculo a 2 numeros despues del decimal
        resultContainer.innerHTML = "Hola " + name + ` el valor convertido es: ${result.toFixed(2)}`;
    });
});

function convertirTemperatura() {
    var inputTemperatura = parseFloat(document.getElementById("temperature-input").value);
    var fromScale = document.getElementById("from-scale").value;
    var toScale = document.getElementById("to-scale").value;

    var temperaturaConvertida = convertir(inputTemperatura, fromScale, toScale);

    var resultadoContainer = document.getElementById("result-container-temperature");
    resultadoContainer.textContent = "La temperatura convertida es: " + temperaturaConvertida + " " + toScale;
}

function convertir(temperatura, fromScale, toScale) {
    if (fromScale === toScale) {
        return temperatura;
    }

    if (fromScale === "celsius" && toScale === "fahrenheit") {
        return (temperatura * 9 / 5) + 32;
    } else if (fromScale === "celsius" && toScale === "kelvin") {
        return temperatura + 273.15;
    } else if (fromScale === "fahrenheit" && toScale === "celsius") {
        return (temperatura - 32) * 5 / 9;
    } else if (fromScale === "fahrenheit" && toScale === "kelvin") {
        return ((temperatura - 32) * 5 / 9) + 273.15;
    } else if (fromScale === "kelvin" && toScale === "celsius") {
        return temperatura - 273.15;
    } else if (fromScale === "kelvin" && toScale === "fahrenheit") {
        return ((temperatura - 273.15) * 9 / 5) + 32;
    }

    return temperatura;
}