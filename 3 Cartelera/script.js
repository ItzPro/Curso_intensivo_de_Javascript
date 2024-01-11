document.addEventListener('DOMContentLoaded', function () {
    const frutas = [];
    const container = document.getElementById('frutas-container');

    // Función para agregar una fruta al arreglo
    function agregarFruta() {
        const link = document.getElementById('link').value;
        const nombre = document.getElementById('nombre').value;

        // Verificar si se ingresaron datos
        if (link && nombre) {
            // Verificar si la fruta ya existe en el arreglo
            if (!frutaRepetida(link, nombre)) {
                const fruta = { link, nombre };
                frutas.push(fruta);

                // Limpiar los campos de entrada
                document.getElementById('link').value = '';
                document.getElementById('nombre').value = '';

                mostrarFrutas();
            } else {
                alert('Esta fruta ya ha sido agregada.');
            }
        }
    }

    // Función para verificar si una fruta ya existe en el arreglo
    function frutaRepetida(link, nombre) {
        return frutas.some(fruta => fruta.link === link || fruta.nombre === nombre);
    }

    // Función para mostrar las frutas en el HTML
    function mostrarFrutas() {
        container.innerHTML = ''; // Limpiar el contenedor

        // Utilizar un bucle do...while para mostrar las frutas
        let i = 0;
        do {
            if (frutas[i]) {
                const fruta = frutas[i];
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
            <img class='imagen' src="${fruta.link}">
            <p>${fruta.nombre}</p>`;

                container.appendChild(card);
            }
            i++;
        } while (frutas[i]);
    }

    // Agregar un evento al botón para agregar frutas
    const agregarButton = document.querySelector('.Gcruz');
    agregarButton.addEventListener('click', agregarFruta);
});
