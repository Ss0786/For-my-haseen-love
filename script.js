const q1 = document.getElementById('question1');
const q2 = document.getElementById('question2');
const revealBtn = document.getElementById('revealBtn');
const gift = document.getElementById('gift');
const lyrics = document.getElementById('lyrics');

q1.addEventListener('click', () => {
  q1.classList.add('hidden');
  q2.classList.remove('hidden');
});

q2.addEventListener('click', () => {
  q2.classList.add('hidden');
  revealBtn.classList.remove('hidden');
});

revealBtn.addEventListener('click', () => {
  revealBtn.classList.add('hidden');
  gift.classList.remove('hidden');
  showLyrics();
  startConfetti();
});

// 🌸 Vibe lines inspired by “Haseen – Talwiinder”
const lines = [
"Tere Ishq Da Jaam Haseen Ae",
"Subah Haseen Meri Shaam Haseen Ae",
"Eh Be-Matlabi Zindagi Jadon Di Tere Naam Haseen Ae",

"Tere Ishq Da Jaam Haseen Ae",
"Subah Haseen Meri Shaam Haseen Ae",
"Eh Be-Matlabi Zindagi Jadon Di Tere Naam Haseen Ae",

"Rang Agge Naalon Pehlaan Vadh Dikhan Lagge Ne",
"Kiven Sohne Hone Supne Vi Sikhan Lagge Ne",
"Pehlaan Horaan Baare Likhde Si Gallan Jo",
"Hun Gane Tere Mere Utte Likhan Lagge Ne",

"Rang Agge Naalon Pehlaan Vadh Dikhan Lagge Ne"
"Kiven Sohne Hone Supne Vi Sikhan Lagge Ne"
"Pehlaan Horaan Baare Likhde Si Gallan Jo"
"Hun Gane Tere Mere Utte Likhan Lagge Ne"

"Tu Haseen Tera Naam Haseen Ae",
"Tere Ishq Da Jaam Haseen Ae",
"Eh Be-Matlabi Zindagi",
"Jadon Di Tere Naam Haseen Ae",

"Tere Ishq Da Jaam Haseen Ae",
"Subah Haseen Meri Shaam Haseen Ae",
"Eh Be-Matlabi Zindagi Jadon Di Tere Naam",

"Tere Ishq Da Jaam Haseen Ae LyricsRead"
"Subah Haseen Meri Shaam Haseen Ae",
"Eh Be-Matlabi Zindagi Jadon Di Tere Naam",

"Ohnu Kiven Na Hove Pyar Tere Naal Ni",
"Jehne Vekh Leya Hasdi Nu Ik Vaar Ni",
"Panjvaan Mile Taan Oh Vi Tera Karda",
"Pehla Hi Aa Tere Naam Din Chaar Ni",

"Ohnu Kiven Na Hove Pyar Tere Naal Ni",
"Jehne Vekh Leya Hasdi Nu Ik Vaar Ni",
"Panjvaan Mile Taan Oh Vi Tera Karda",
"Pehla Hi Aa Tere Naam Din Chaar Ni",

"Tu Jo Devin Paigham Haseen Ae",
"Khaas Hoye Ya Aam Haseen Ae",
"Tere Naal Jo Pal Lange",
"Oh Pal Da Anjaam Haseen Ae",

"Tere Ishq Da Jaam Haseen Ae LyricsRead"
"Subah Haseen Meri Shaam Haseen Ae",
"Eh Be-Matlabi Zindagi Jadon Di Tere Naam",


"Tere Ishq Da Jaam Haseen Ae LyricsRead"
"Subah Haseen Meri Shaam Haseen Ae",
"Eh Be-Matlabi Zindagi Jadon Di Tere Naam",

];

let lineIndex = 0;
function showLyrics() {
  lyrics.textContent = "";
  const interval = setInterval(() => {
    if (lineIndex < lines.length) {
      lyrics.textContent = lines[lineIndex];
      lineIndex++;
    } else {
      clearInterval(interval);
    }
  }, 4000);
}

// 🎊 Confetti animation
function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const confetti = [];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach((p) => {
      p.y += p.d;
      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 30);
}


