document.addEventListener("DOMContentLoaded", () => {

    // Historial de pasos visitados
    const stepHistory = [];

    // Función para ir a un paso específico
    window.step = function (nextStep) {
        const allSteps = document.querySelectorAll("[id^='step']");
        const nextContent = document.querySelector(`#step${nextStep}`);

        if (!nextContent) {
            console.error(`Paso no encontrado: step${nextStep}`);
            return;
        }

        // Registrar el paso actual en el historial
        const currentStep = Array.from(allSteps).find(step => step.style.display === 'block');
        if (currentStep) {
            stepHistory.push(currentStep.id);
        }

        // Ocultar todos los pasos
        allSteps.forEach(step => step.style.display = 'none');

        // Mostrar el paso siguiente
        nextContent.style.display = 'block';
    };

    // Función para regresar al paso anterior
    window.stepBack = function () {
        if (stepHistory.length === 0) {
            console.error("No hay pasos anteriores en el historial.");
            return;
        }

        const allSteps = document.querySelectorAll("[id^='step']");

        // Recuperar el último paso del historial
        const previousStepId = stepHistory.pop();
        const previousContent = document.getElementById(previousStepId);

        if (!previousContent) {
            console.error(`Paso anterior no encontrado: ${previousStepId}`);
            return;
        }

        // Ocultar todos los pasos
        allSteps.forEach(step => step.style.display = 'none');

        // Mostrar el paso anterior
        previousContent.style.display = 'block';
    };

    // Asignar evento a botones con la clase "back-toggle"
    document.addEventListener("click", (event) => {
        console.log(event.target.classList)
        if (event.target.classList.contains("back-toggle") || event.target.classList.contains("back-img")) {
            stepBack();
        }
    });

    step(1);
});
