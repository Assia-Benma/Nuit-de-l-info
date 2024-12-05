document.getElementById('zoomImage').addEventListener('click', function(event) {
    // Coordonnées du clic
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Zoom sur la partie cliquée
    this.style.transformOrigin = `${x}px ${y}px`;
    this.style.transform = 'scale(10)';

    // Afficher la boîte de texte
    document.getElementById('textWindow').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    // Réinitialiser l'image
    document.getElementById('zoomImage').style.transform = 'scale(1)';
    document.getElementById('zoomImage').style.transformOrigin = 'center';

    // Cacher la boîte de texte
    document.getElementById('textWindow').style.display = 'none';
});
