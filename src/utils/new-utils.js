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
  const scrolly = document.getElementsByClassName('.scrolly');

  function currentYPosition() {

    // Find the current Y coordinate position on the page.

    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) {
      return self.pageYOffset;
    }

    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }

    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) {
      return document.body.scrollTop;
    }

    return 0;
  }

  // window.learnMoreScroll = (target) => {
  //   let scrollContainer = target;
  //
  //   do {
  //     scrollContainer = scrollContainer.offsetTop;
  //
  //     if (scrollContainer) {
  //       target.scrollTop -= scrollContainer;
  //     }
  //
  //     while (scrollContainer.scrollTop == 0)
  //   }
  // }

}
