document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("stream-player");
  const statusText = document.getElementById("status-text");
  const reloadBtn = document.getElementById("reload-btn");

  if (player && statusText && reloadBtn) {
    player.addEventListener("playing", () => {
      statusText.innerText = "Streaming Active";
      statusText.style.color = "#4ade80";
    });

    player.addEventListener("pause", () => {
      statusText.innerText = "Stream Paused";
      statusText.style.color = "#facc15";
    });

    reloadBtn.addEventListener("click", () => {
      statusText.innerText = "Reloading Stream...";
      statusText.style.color = "#38bdf8";
      player.load();
      player.play().catch(() => {
        statusText.innerText = "Autoplay Blocked - Tap Play";
      });
    });
  }
});
