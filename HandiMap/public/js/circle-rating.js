window.initCircleRatings = function (root = document) {
  root.querySelectorAll(".circle-rating").forEach((container) => {
    const rawStr = (container.dataset.grade || "0")
      .toString()
      .replace(",", ".");
    const num = parseFloat(rawStr) || 0;

    const grade = num <= 5 ? num : (num / 100) * 5;

    const circles = container.querySelectorAll(".circle");
    const full = Math.floor(grade);
    const half = grade % 1 >= 0.25 && grade % 1 < 0.75;

    circles.forEach((c, i) => {
      c.classList.remove("filled", "half");
      if (i < full) c.classList.add("filled");
      else if (half && i === full) c.classList.add("half");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  window.initCircleRatings();
});
