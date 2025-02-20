document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded successfully.');

  // Animate the headline with an elastic effect using Anime.js
  anime({
    targets: '.headline',
    scale: [0.8, 1],
    duration: 1500,
    easing: 'easeOutElastic(1, .8)'
  });

  // Animate the subheadline with a slide effect
  anime({
    targets: '.subheadline',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 500
  });

  // Fade in the poem text
  anime({
    targets: '.poetry p',
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuad',
    delay: 1500
  });
});
