// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let ultimoGanador = null; // Para evitar repetir el mismo ganador dos veces seguidas

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreDeAmigo = input.value.trim();

    if (nombreDeAmigo !== "") {
        listaDeAmigos.push(nombreDeAmigo);
        console.log("✅ Amigo agregado:", nombreDeAmigo);
        console.log("📋 Lista de Amigos:", listaDeAmigos);

        actualizarLista(); // Actualizar la lista en pantalla
        input.value = "";
        input.focus();
    } else {
        alert("⚠️ Por favor, inserte un nombre.");
    }
}

function sortearAmigo() {
    let ganadorTexto = document.getElementById("ganador");

    if (!ganadorTexto) {
        console.warn("⚠️ Advertencia: No se encontró el elemento con id='ganador'.");
        return;
    }

    if (listaDeAmigos.length === 0) {
        alert("⚠️ No hay amigos en la lista para sortear.");
        return;
    }

    ganadorTexto.textContent = "🎲 Sorteando...";

    setTimeout(() => {
        let indiceGanador;
        do {
            indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
        } while (listaDeAmigos.length > 1 && listaDeAmigos[indiceGanador] === ultimoGanador);
        
        let nombreGanador = listaDeAmigos[indiceGanador];
        ultimoGanador = nombreGanador; // Guardar el ganador para evitar repetición

        ganadorTexto.textContent = `🎉 El amigo secreto es: ${nombreGanador}`;
        console.log("🎉 Amigo Sorteado:", nombreGanador);

        // Vaciar la lista de amigos después del sorteo
        listaDeAmigos = [];
        actualizarLista(); // Llamar la función para limpiar la lista en pantalla

    }, 2000); // Espera 2 segundos antes de mostrar el resultado y vaciar la lista
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista en pantalla
}