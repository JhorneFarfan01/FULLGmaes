// Validación de formulario
const form = document.querySelector("form[name='frm']");
form.addEventListener("submit", (event) => {
    const fname = form.elements["fname"].value;
    const flastname = form.elements["flastname"].value;
    const femal = form.elements["femal"].value;
    const fphone = form.elements["fphone"].value;

    if (!fname || !flastname || !femal || !fphone) {
        event.preventDefault();
        alert("Por favor complete todos los campos del formulario");
    } else if (!validateEmail(femal)) {
        event.preventDefault();
        alert("Correo invalido");
    }
});

// Crear función para validar el correo electrónico
function validateEmail(femal) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(femal).toLowerCase());
}
