(() => {
  const video = document.getElementById('amazon-intro-video');
  const play = document.getElementById('amazon-intro-play');
  if (!video || !play) return;
  video.muted = true;
  const start = () => video.play().catch(() => { play.hidden = false; });
  video.addEventListener('playing', () => { play.hidden = true; });
  play.addEventListener('click', start);
  start();
})();
