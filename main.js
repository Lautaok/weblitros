document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const poolVolume = document.getElementById('poolVolume').value;
    
    if (poolVolume > 0) {
        const chlorineAmount = (poolVolume * 1) / 20000; // 1 litro de cloro por 20,000 litros
        const algaecideAmount = (poolVolume * 80) / 20000; // 80 ml de alguicida por 20,000 litros
        const clarifierAmount = (poolVolume * 200) / 20000; // 200 ml de clarificante por 20,000 litros
        
        document.getElementById('chlorineResult').innerText = `Cloro Líquido: ${chlorineAmount.toFixed(2)} litros`;
        document.getElementById('algaecideResult').innerText = `Alguicida: ${algaecideAmount.toFixed(2)} ml`;
        document.getElementById('clarifierResult').innerText = `Clarificante: ${clarifierAmount.toFixed(2)} ml`;
    } else {
        document.getElementById('results').innerText = 'Por favor, introduce un volumen válido.';
    }
});
