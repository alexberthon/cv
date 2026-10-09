// pdf.js waits for this before printing
window.addEventListener('load', function () {
  document.fonts.ready.then(function () {
    window.status = 'ready';
  });
});
