document.addEventListener('DOMContentLoaded', function() {
  console.log("Script de la page d'avis chargé");
  
  // Gestion du bouton pour ajouter un avis
  const addReviewBtn = document.getElementById('add-review-btn');
  if (addReviewBtn) {
    addReviewBtn.addEventListener('click', function() {
      const feedbackContainer = document.querySelector('.feedback-container');
      
      if (feedbackContainer) {
        if (feedbackContainer.style.display === 'none' || feedbackContainer.style.display === '') {
          feedbackContainer.style.display = 'block';
          this.textContent = 'Annuler';
        } else {
          feedbackContainer.style.display = 'none';
          this.textContent = 'Ajouter un avis';
        }
      }
    });
  }
});