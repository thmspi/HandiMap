(function () {
  const questions = window.clientQuestions || [];
  let idx = window.startIdx || 0;
  const total = questions.length;

  const card = document.getElementById("question-card");
  const prog = document.getElementById("progress-fill");
  const form = document.getElementById("qform");
  const hiddenInput = document.getElementById("responses");
  const responses = Array(total).fill(null);

  function render() {
    if (idx < total) {
      card.textContent = questions[idx];
      prog.style.width = (idx / total) * 100 + "%";
    } else {
      hiddenInput.value = responses.map((v) => (v ? "yes" : "no")).join(",");
      form.submit();
    }
  }

  document.getElementById("yes-btn").addEventListener("click", function () {
    responses[idx] = true;
    slide("right");
  });

  document.getElementById("no-btn").addEventListener("click", function () {
    responses[idx] = false;
    slide("left");
  });

  document.getElementById("back-btn").addEventListener("click", function () {
    if (idx > 0) {
      idx--;
      render();
    }
  });

  function slide(direction) {
    var anim =
      direction === "right"
        ? "animate__slideOutRight"
        : "animate__slideOutLeft";
    card.classList.add(anim);
    setTimeout(function () {
      card.classList.remove("animate__slideOutLeft", "animate__slideOutRight");
      idx++;
      render();
    }, 500);
  }

  render();
})();
