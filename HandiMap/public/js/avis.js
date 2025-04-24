document.addEventListener("click", function (e) {
  if (e.target.matches(".info-btn")) {
    const targetId = e.target.getAttribute("data-target");
    const container = document.getElementById(targetId);
    if (container) {
      container.style.display =
        container.style.display === "block" ? "none" : "block";
    }
  } else if (
    !e.target.closest(".feedback-container") &&
    !e.target.matches(".info-btn")
  ) {
    document
      .querySelectorAll(".feedback-container")
      .forEach((c) => (c.style.display = "none"));
  }
});
