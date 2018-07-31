window.onload = function() {

  const window = document.window;
  const body = document.body;
  const wrapper = document.getElementById('#page-wrapper');
  const banner = document.getElementById('#banner');
  const header = document.getElementById('#header');

  // Breakpoints.
  breakpoints({
    xlarge:   [ '1281px',  '1680px' ],
    large:    [ '981px',   '1280px' ],
    medium:   [ '737px',   '980px'  ],
    small:    [ '481px',   '736px'  ],
    xsmall:   [ null,      '480px'  ]
  });

  // Plays initial animations on page load.
  window.on('load', function() {
    window.setTimeout(function() {
      body.removeClass('is-preload');
    }, 100);
  });

  // Is it a mobile device?
  if (browser.mobile){
    body.setAttribute('class', 'is-mobile');
  }
  else {
    breakpoints.on('>medium', () => {
      body.removeAttribute('class', 'is-mobile');
    });

    breakpoints.on('<=medium', () => {
      body.setAttribute('class', 'is-mobile');
    });
  }

  // Scrolly
  // Now located in a seperate JS file, located in "/src/utils/js/scroll-utils.js"
