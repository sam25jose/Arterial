// Obtener el formulario y el elemento donde se mostrarán los resultados
const form = document.getElementById("bp-form");
const resultBox = document.getElementById("bp-result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const systolic = document.getElementById("systolic").value;
    const diastolic = document.getElementById("diastolic").value;
    const phone = document.getElementById("phone").value;

    // Validación simple
    if (!systolic || !diastolic || !phone) {
        alert("Por favor, ingresa todos los campos.");
        return;
    }

    // Mostrar los resultados en la página
    resultBox.innerHTML = `
        <h3>Resultado del Registro</h3>
        <p><strong>Presión Sistólica:</strong> ${systolic} mmHg</p>
        <p><strong>Presión Diastólica:</strong> ${diastolic} mmHg</p>
        <p><strong>Número de Teléfono:</strong> ${phone}</p>
    `;
    resultBox.style.display = "block";

    // Crear el mensaje para enviar por WhatsApp
    const message = encodeURIComponent(`¡Hola! Aquí están los resultados de mi presión arterial:\nPresión Sistólica: ${systolic} mmHg\nPresión Diastólica: ${diastolic} mmHg`);
    
    // Crear el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phone}?text=${message}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappLink, "_blank");
});

