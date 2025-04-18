document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.circle-rating').forEach((container, containerIndex) => {
    const raw = (container.dataset.grade || '0').replace(',', '.');
    const score100 = parseFloat(raw);
    const grade = (score100 / 100) * 5;

    console.log(`🎯 [${containerIndex}] raw = "${raw}", out of 100 = ${score100}, scaled = ${grade.toFixed(2)}`);

    const circles = container.querySelectorAll('.circle');

    const full = Math.floor(grade);
    const half = grade % 1 >= 0.25 && grade % 1 < 0.75;
    const ceil = Math.ceil(grade);

    console.log(`🔢 [${containerIndex}] full = ${full}, half = ${half}, total = ${ceil}`);

    circles.forEach((circle, index) => {
      if (index < full) {
        circle.classList.add('filled');
        circle.classList.remove('half');
      } else if (half && index === full) {
        circle.classList.add('half');
        circle.classList.remove('filled');
      } else {
        circle.classList.remove('filled');
        circle.classList.remove('half');
      }
    });
  });
});
