document.addEventListener("DOMContentLoaded", () => {
    console.log('hola');
    // Hacer que la función esté disponible globalmente
    window.step = function (nextStep) {
        // Seleccionar todos los pasos
        const allSteps = document.querySelectorAll("[id^='step']");

        // Validar si el paso siguiente existe
        const nextContent = document.querySelector(`#step${nextStep}`);
        if (!nextContent) {
            console.error(`Paso no encontrado: step${nextStep}`);
            return;
        }

        // Ocultar todos los pasos
        allSteps.forEach(step => {
            step.style.display = 'none';
        });

        // Mostrar el paso siguiente
        nextContent.style.display = 'block';
    };
});