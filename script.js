document.addEventListener("DOMContentLoaded", () => {
  const questionButtons = document.querySelectorAll(".question-btn");
  const revealButton = document.getElementById("reveal-btn");
  const giftSection = document.getElementById("gift-section");
  const musicPlayer = document.getElementById("music-player");
  const lyricsContainer = document.getElementById("lyrics");
  const soundcloudFrame = document.getElementById("soundcloud-frame");

  // 🎀 Handle each "Tap here" button
  questionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "💖 Answered!";
      btn.disabled = true;

      const allAnswered = Array.from(questionButtons).every((b) => b.disabled);
      if (allAnswered) {
        revealButton.style.display = "block";
        revealButton.classList.add("pop");
      }
    });
  });

  // 🎁 Reveal gift and play song
  revealButton.addEventListener("click", () => {
    revealButton.style.display = "none";
    giftSection.style.display = "block";
    musicPlayer.style.display = "block";

    // 🌸 Autoplay SoundCloud song
    soundcloudFrame.src =
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/inder-kirat/sets/haseen-talwinder-new-song&color=%23ff66a3&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

    startConfetti();
    showLyrics();
  });

  // 🎶 Lyrics scroll effect
  function showLyrics() {
    const lyrics = [
      "🎶 Tere Ishq Da Jaam Haseen Ae 💕",
      "Subah Haseen Meri Shaam Haseen Ae 🌅",
      "Eh Be-Matlabi Zindagi Jadon Di Tere Naam Haseen Ae 💗",
      "",
      "Tere Ishq Da Jaam Haseen Ae 💕",
      "Subah Haseen Meri Shaam Haseen Ae 🌸",
      "Eh Be-Matlabi Zindagi Jadon Di Tere Naam Haseen Ae 💞",
      "",
      "Rang Agge Naalon Pehlaan Vadh Dikhan Lagge Ne 🎨",
      "Kiven Sohne Hone Supne Vi Sikhan Lagge Ne 🌙",
      "Pehlaan Horaan Baare Likhde Si Gallan Jo ✍️",
      "Hun Gane Tere Mere Utte Likhan Lagge Ne 💕",
      "",
      "Tu Haseen Tera Naam Haseen Ae 🌸",
      "Tere Ishq Da Jaam Haseen Ae 💖",
      "Eh Be-Matlabi Zindagi Jadon Di Tere Naam Haseen Ae 💫",
      "",
      "Ohnu Kiven Na Hove Pyar Tere Naal Ni 💞",
      "Jehne Vekh Leya Hasdi Nu Ik Vaar Ni 💗",
      "Panjvaan Mile Taan Oh Vi Tera Karda 💕",
      "Pehla Hi Aa Tere Naam Din Chaar Ni 🌹",
      "",
      "Tu Jo Devin Paigham Haseen Ae 💌",
      "Khaas Hoye Ya Aam Haseen Ae 💖",
      "Tere Naal Jo Pal Lange ⏳",
      "Oh Pal Da Anjaam Haseen Ae 💫",
      "",
      "Tere Ishq Da Jaam Haseen Ae 🎶",
      "Subah Haseen Meri Shaam Haseen Ae 🌅",
      "Eh Be-Matlabi Zindagi Jadon Di Tere Naam Haseen Ae 💕"
    ];

    let index = 0;
    const lyricInterval = setInterval(() => {
      if (index < lyrics.length) {
        const line = document.createElement("p");
        line.textContent = lyrics[index];
        line.classList.add("fade-in");
        lyricsContainer.appendChild(line);
        index++;
      } else {
        clearInterval(lyricInterval);
      }
    }, 4000);
  }

  // 🎊 Simple pink confetti
  function startConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confetti.style.backgroundColor =
        ["#ffb6c1", "#ffc0cb", "#ff69b4", "#ffe4e1"][Math.floor(Math.]()
