// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const questionButtons = document.querySelectorAll(".question-btn");
  const revealButton = document.getElementById("reveal-btn");
  const giftSection = document.getElementById("gift-section");
  const musicPlayer = document.getElementById("music-player");
  const lyricsContainer = document.getElementById("lyrics");

  // Step 1: Handle each question button tap
  questionButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.textContent = "💖 Answered!";
      btn.disabled = true;

      // Once all question buttons are answered, show the reveal button
      const allAnswered = Array.from(questionButtons).every(b => b.disabled);
      if (allAnswered) {
        revealButton.style.display = "block";
        revealButton.classList.add("pop");
      }
    });
  });

  // Step 2: When "Reveal your gift 💝" is clicked
  revealButton.addEventListener("click", () => {
    revealButton.style.display = "none";
    giftSection.style.display = "block";

    // Show music player
    musicPlayer.style.display = "block";

    // Add confetti effect 🎉
    startConfetti();

    // Show lyrics gradually
    const lyrics = [
      "🎶 Haseen lagti hai tu, jab hasi karti hai 💕",
      "Dil ye keh raha hai, bas tu hi meri hai 💖",
      "Pal pal tere bina, lagta adhura sa hai 🌸",
      "Sun le zara, meri jaan, ye dil tera hi hai 💫"
    ];

    let index = 0;
    const lyricInterval = setInterval(() => {
      if (index < lyrics.length) {
        const line = document.createElement("p");
        line.textContent = lyrics[index];
        lyricsContainer.appendChild(line);
        index++;
      } else {
        clearInterval(lyricInterval);
      }
    }, 4000); // show a new line every 4 seconds
  });

  // Simple confetti animation 🎊
  function startConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confetti.style.backgroundColor =
        ["#ffb6c1", "#ffc0cb", "#ff69b4", "#ffe4e1"][Math.floor(Math.random() * 4)];
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }
  }
});
