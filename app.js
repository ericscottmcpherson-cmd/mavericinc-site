(function () {
  var text = 'taking flight fall 2026';
  var target = document.getElementById('type-target');
  if (!target) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    target.textContent = text;
    return;
  }

  var i = 0;
  function tick() {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, 55 + Math.random() * 55);
    }
  }
  setTimeout(tick, 500);
})();
