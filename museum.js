(() => {
  const button = document.querySelector("[data-play]");
  const status = document.querySelector("#demo-status");
  const note = document.querySelector("#demo-note");
  const meter = document.querySelector(".meter span");

  if (!button || !status || !note || !meter) return;

  const alert = new Audio(button.dataset.play);

  button.addEventListener("click", async () => {
    try {
      alert.currentTime = 0;
      await alert.play();
      status.textContent = "New item!";
      meter.style.width = "100%";
      note.textContent = "Playing the original Woot-Off alert.";

      window.setTimeout(() => {
        status.textContent = "50% left.";
        meter.style.width = "50%";
        note.textContent = "No popup or Flash required.";
      }, 5000);
    } catch {
      note.textContent = "Your browser blocked playback. Use the audio gallery below.";
    }
  });
})();
