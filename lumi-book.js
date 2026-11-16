(() => {
  const video = document.getElementById('lumi-book-video');
  const button = document.getElementById('lumi-book-play');
  const printer = document.getElementById('amazon-intro-video');
  if (!video || !button) return;
  button.addEventListener('click', async () => {
    video.muted = false;
    try { await video.play(); }
    catch { button.hidden = false; button.textContent = '▶ Buchvideo erneut starten'; }
  });
  video.addEventListener('play', () => { printer?.pause(); video.classList.add('has-started'); button.hidden = true; });
  video.addEventListener('pause', () => { button.hidden = false; });
  video.addEventListener('ended', () => { button.hidden = false; });
})();
