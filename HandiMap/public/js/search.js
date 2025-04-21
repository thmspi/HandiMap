// public/js/search.js
document.getElementById('search-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
  
    const response = await fetch(`/search?query=${query}`);
    const data = await response.text();
  
    document.querySelector('.results').innerHTML = data;
});