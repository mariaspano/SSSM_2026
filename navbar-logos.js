// Inserisce i loghi UNINA e DiSES nella navbar
(function() {
  window.addEventListener('load', function() {
    // Trova la navbar
    const navbar = document.querySelector('.navbar-container');
    
    if (navbar) {
      // Crea il container per i loghi
      const logosDiv = document.createElement('div');
      logosDiv.className = 'navbar-right-logos';
      logosDiv.style.cssText = 'display: flex; align-items: center; gap: 25px; margin-left: 20px;';
      
      // Crea logo UNINA
      const logoUnina = document.createElement('img');
      logoUnina.src = 'images/logos/logo_unina.png';
      logoUnina.alt = 'Università Federico II';
      logoUnina.style.cssText = 'height: 50px; width: auto;';
      
      // Crea logo DiSES
      const logoDises = document.createElement('img');
      logoDises.src = 'images/logos/dises.svg';
      logoDises.alt = 'DiSES';
      logoDises.style.cssText = 'height: 50px; width: auto;';
      
      // Aggiungi i loghi al container
      logosDiv.appendChild(logoUnina);
      logosDiv.appendChild(logoDises);
      
      // Inserisci nella navbar
      navbar.appendChild(logosDiv);
    }
  });
})();
