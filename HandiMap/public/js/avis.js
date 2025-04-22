document.addEventListener('DOMContentLoaded', function () {
  // Ouvre/ferme la fenêtre d'avis au clic sur le bouton
  document.querySelectorAll('.info-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const feedbackContainer = btn.nextElementSibling;
      if (feedbackContainer.style.display === 'none' || feedbackContainer.style.display === '') {
        feedbackContainer.style.display = 'block';
      } else {
        feedbackContainer.style.display = 'none';
      }
    });
  });

  // Empêche la fermeture quand on clique dans le formulaire
  document.querySelectorAll('.feedback-container').forEach(function(container) {
    container.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  // Ferme la fenêtre si on clique ailleurs
  document.addEventListener('click', function() {
    document.querySelectorAll('.feedback-container').forEach(function(container) {
      container.style.display = 'none';
    });
  });
});
