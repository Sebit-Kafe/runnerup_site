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
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo',
    delay: 600
  });

  // Stagger fade in for each paragraph in the poetry section
  anime.timeline({loop: false})
    .add({
      targets: '.poetry p',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: anime.stagger(300)  // Stagger the animation for each paragraph by 300ms
    });
});
