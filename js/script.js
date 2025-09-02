// Smooth scroll for internal anchors (works on pages that use #ids)
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return; // only prevent default if target exists on the page
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle + persistence
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkToggle');
  const toggleBtnMobile = document.getElementById('darkToggleMobile');

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
  if (toggleBtnMobile) {
    toggleBtnMobile.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});

// Animated Gradient Background Logic
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  const gradient = document.getElementById('gradient');
  if (!gradient) return;
  
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";

  // Set the background style using vanilla JavaScript
  gradient.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  gradient.style.background = `-webkit-linear-gradient(left, ${color1}, ${color2})`;
  
  step += gradientSpeed;
  if ( step >= 1 ) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}

setInterval(updateGradient, 10);