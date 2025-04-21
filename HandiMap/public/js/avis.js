document.addEventListener('DOMContentLoaded', function () {
  const infoElements = document.querySelectorAll('.info');
  
  infoElements.forEach(function(infoElement) {
    infoElement.addEventListener('click', function() {
      const feedbackForm = infoElement.querySelector('.feedback-form');
      // Toggle visibility of the feedback form
      if (feedbackForm.style.display === 'none' || feedbackForm.style.display === '') {
        feedbackForm.style.display = 'block';
      } else {
        feedbackForm.style.display = 'none';
      }
    });
  });
});

