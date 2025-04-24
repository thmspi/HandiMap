document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const resultsContainer = document.querySelector(".results");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value;
    const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
    const html = await response.text();

    resultsContainer.innerHTML = html;

    if (window.initCircleRatings) {
      window.initCircleRatings(resultsContainer);
    }
  });
});
