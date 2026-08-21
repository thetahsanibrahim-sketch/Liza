// Dynamic Theme Switcher
const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4'];
const themeNames = ['Midnight Magic', 'Ocean Breeze', 'Sunset Glow', 'Neon Pulse'];
let currentThemeIndex = 0;

function changeTheme() {
  document.body.classList.remove(...themes);
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  
  if (currentThemeIndex !== 0) {
    document.body.classList.add(themes[currentThemeIndex]);
  }
  
  document.getElementById('theme-name').innerText = themeNames[currentThemeIndex];
}

// Automatically change theme every 10 seconds
setInterval(changeTheme, 10000);

// Countdown Timer
const targetDate = new Date('August 24, 2026 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  } else {
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Wish Celebration FX
function celebrate() {
  alert('✨ Wish sent to the stars for Liza! May all your dreams come true! ❤️');
  changeTheme(); // Also change theme on click
}
