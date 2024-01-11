document.addEventListener('DOMContentLoaded', function () {
    const frutas = [];
    const container = document.getElementById('frutas-container');

    // Función para agregar una fruta al arreglo
    function agregarFruta() {
        const link = document.getElementById('link').value;
        const nombre = document.getElementById('nombre').value;
        const youtubeLink = document.getElementById('youtube-link').value; // Obtener la URL de YouTube

        if (link && nombre) {
            if (!frutaRepetida(link, nombre)) {
                const fruta = { link, nombre, youtubeLink }; // Agregar la URL de YouTube al objeto fruta
                frutas.push(fruta);

                document.getElementById('link').value = '';
                document.getElementById('nombre').value = '';
                document.getElementById('youtube-link').value = ''; // Limpiar el campo de URL de YouTube

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
        container.innerHTML = '';

        let i = 0;
        do {
            if (frutas[i]) {
                const fruta = frutas[i];
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <a href="${fruta.youtubeLink}" target="_blank"> <!-- Enlace a YouTube -->
                        <img class='imagen' src="${fruta.link}">
                        <p>${fruta.nombre}</p>
                    </a>
                    <button class='eliminar-button' data-index="${i}">Eliminar</button>`;

                container.appendChild(card);

                i++;
            }
        } while (frutas[i]);
    }



    // Agregar un evento al botón para agregar frutas
    const agregarButton = document.querySelector('.Gcruz');
    agregarButton.addEventListener('click', agregarFruta);

    // Agregar un evento de delegación al contenedor de frutas para manejar la eliminación de tarjetas
    container.addEventListener('click', function (event) {
        if (event.target.classList.contains('eliminar-button')) {
            // Obtener el índice de la tarjeta a eliminar desde el atributo data-index
            const index = event.target.getAttribute('data-index');

            // Eliminar la tarjeta del arreglo de frutas
            frutas.splice(index, 1);

            // Volver a mostrar las frutas actualizadas
            mostrarFrutas();
        }
    });



});

