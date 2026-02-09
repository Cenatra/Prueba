function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById("reloj").textContent = hora;
}

function actualizarFecha() {
    const ahora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-MX', opciones);
    document.getElementById("fecha").textContent = fecha;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
actualizarFecha();
