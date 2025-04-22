document.addEventListener('DOMContentLoaded', function () {
  console.log("Script d'avis chargé");
  
  // Sélectionner tous les boutons "Laisser un avis"
  const infoBtns = document.querySelectorAll('.info-btn');
  console.log("Boutons trouvés:", infoBtns.length);
  
  // Attacher un gestionnaire d'événements à chaque bouton
  infoBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      console.log("Bouton cliqué:", this.getAttribute('data-id'));
      e.stopPropagation(); // Empêcher la propagation
      
      // Utiliser l'attribut data-target pour trouver le conteneur
      const targetId = this.getAttribute('data-target');
      console.log("Cible:", targetId);
      
      if (targetId) {
        const feedbackContainer = document.getElementById(targetId);
        
        if (feedbackContainer) {
          console.log("Conteneur trouvé, état actuel:", feedbackContainer.style.display);
          
          if (feedbackContainer.style.display === 'none' || feedbackContainer.style.display === '') {
            feedbackContainer.style.display = 'block';
          } else {
            feedbackContainer.style.display = 'none';
          }
        } else {
          console.error("Conteneur non trouvé:", targetId);
        }
      }
    });
  });
  
  // Empêcher la fermeture du formulaire quand on clique dedans
  document.querySelectorAll('.feedback-container').forEach(function(container) {
    container.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
  
  // Fermer le formulaire si on clique ailleurs sur la page
  document.addEventListener('click', function() {
    document.querySelectorAll('.feedback-container').forEach(function(container) {
      container.style.display = 'none';
    });
  });
});