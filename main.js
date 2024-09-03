
document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const poolVolume = document.getElementById('poolVolume').value;
    
    if (poolVolume > 0) {
        const chlorineAmount = (poolVolume * 1) / 20000; // 1 litro de cloro por 20,000 litros
        const algaecideAmount = (poolVolume * 250) / 50000; // 80 ml de alguicida por 20,000 litros
        const clarifierAmount = (poolVolume * 500) / 50000; // 200 ml de clarificante por 20,000 litros
        const cloroPolvoAmount = (poolVolume * 4) / 10000; // 4 cucharadas de cloro en polvo cada 10.000 litros
        
        document.getElementById('chlorineResult').innerText = `Cloro Líquido: ${chlorineAmount.toFixed(2)} litros`;
        document.getElementById('algaecideResult').innerText = `Alguicida: ${algaecideAmount.toFixed(2)} ml`;
        document.getElementById('clarifierResult').innerText = `Clarificante: ${clarifierAmount.toFixed(2)} ml`;
        document.getElementById('cloroPolvoResult').innerText = `Cloro Polvo: ${cloroPolvoAmount.toFixed(0)} cucharada`;
    } else {
        document.getElementById('results').innerText = 'Por favor, introduce un volumen válido.';
    }
});

//Play an animation back on second click

let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/calendar.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('mouseenter', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
    });

      iconMenu.addEventListener('mouseleave', (e) => {
      animationMenu.setDirection(-directionMenu);
      animationMenu.play();
    });