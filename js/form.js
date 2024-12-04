const form = document.getElementById("contactoForm");
const mensajeEstado = document.getElementById("mensajeEstado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            mensajeEstado.style.display = "block";
            form.reset();
        } else {
            alert("Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.");
    });

    setTimeout(() => {
        mensajeEstado.style.display = "none";
    }, 6000);
});
