document.addEventListener('DOMContentLoaded', () => {
    const calculatorForm = document.getElementById('calculatorForm');

    // --- CONSTANTES DE DOSIFICACIÓN ---
    // Dosis por cada 10,000 litros de agua
    const DOSES = {
        cloroLiquido: 0.5, // 0.5 litros
        cloroPolvo: 20, // 20 gramos
        alguicida: 100, // 100 ml
        clarificante: 100 // 100 ml
    };

    // --- MULTIPLICADORES POR ESTADO DE LA PILETA ---
    const MULTIPLIERS = {
        initialTreatment: { cloro: 3, alguicida: 2, clarificante: 0 },
        maintenance: { cloro: 1, alguicida: 1, clarificante: 1 },
        murky: { cloro: 1.5, alguicida: 1, clarificante: 2 },
        green: { cloro: 3, alguicida: 2.5, clarificante: 1.5 }
    };

    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const poolVolume = parseFloat(document.getElementById('poolVolume').value);
        const poolCondition = document.getElementById('poolCondition').value;
        
        if (poolVolume > 0) {
            const volumeRatio = poolVolume / 10000;
            const multiplier = MULTIPLIERS[poolCondition];

            // --- CÁLCULOS ---
            const chlorineAmount = (DOSES.cloroLiquido * volumeRatio * multiplier.cloro).toFixed(2);
            const powderChlorineAmount = (DOSES.cloroPolvo * volumeRatio * multiplier.cloro).toFixed(0);
            const algaecideAmount = (DOSES.alguicida * volumeRatio * multiplier.alguicida).toFixed(0);
            const clarifierAmount = (DOSES.clarificante * volumeRatio * multiplier.clarificante).toFixed(0);
            
            // --- MOSTRAR RESULTADOS ---
            document.getElementById('chlorineResult').innerHTML = `<i class="fa-solid fa-bottle-droplet"></i> Cloro Líquido: <strong>${chlorineAmount} litros</strong>`;
            document.getElementById('powderedChlorineResult').innerHTML = `<i class="fa-solid fa-pills"></i> Cloro Polvo/Granulado: <strong>${powderChlorineAmount} gramos</strong>`;
            document.getElementById('algaecideResult').innerHTML = `<i class="fa-solid fa-leaf"></i> Alguicida: <strong>${algaecideAmount} ml</strong>`;
            
            // Lógica especial para el clarificante
            if (clarifierAmount > 0) {
                document.getElementById('clarifierResult').innerHTML = `<i class="fa-solid fa-water"></i> Clarificante: <strong>${clarifierAmount} ml</strong>`;
                document.getElementById('clarifierResult').style.display = 'flex';
            } else {
                document.getElementById('clarifierResult').style.display = 'none';
            }

            // Animar y mostrar los contenedores de resultados
            const resultsContainer = document.getElementById('results-container');
            const recommendations = document.getElementById('recommendations');
            
            resultsContainer.classList.remove('hidden');
            resultsContainer.classList.add('fade-in');
            
            recommendations.classList.remove('hidden');
            recommendations.classList.add('fade-in');

        } else {
            // Manejo de error simple
            alert('Por favor, introduce un volumen válido y positivo.');
        }
    });

    // --- Lógica del Carrusel de Fondo ---
    const backgroundImages = [
        'url("img/pileta1.jpg")',
        'url("img/pileta2.jpg")',
        'url("img/pileta3.jpg")' // Asegúrate de tener esta imagen o cámbiala
    ];
    let currentIndex = 0;
    const bodyElement = document.body;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        bodyElement.style.backgroundImage = backgroundImages[currentIndex];
    }

    // Cambiar la imagen cada 7 segundos (7000 milisegundos)
    setInterval(changeBackground, 7000); 

    // Establecer la imagen inicial al cargar la página
    bodyElement.style.backgroundImage = backgroundImages[currentIndex];
});