$(() => {
  $('header a').on('click', function () {
    $('main, header').animate({
      opacity: 0.75,
      opacity: 0.5,
      opacity: 0.25,
      opacity: 0
    }, 1100)
    let viewportHeight = $(window).height();
    let viewportWidth = $(window).width();
    let h1Height = $('h1').outerHeight();
    let h1Width = $('h1').outerWidth();
    let topOffset = 65; // Change this value as needed
    let leftOffset = 65; // Change this value as needed
    let topPosition = ((viewportHeight / 2) - (h1Height / 2)) - topOffset;
    let leftPosition = ((viewportWidth / 2) - (h1Width / 2)) - leftOffset;
    $('h1').animate({
      left: leftPosition + 'px',
      top: topPosition + 'px',
      fontSize: '3em',
      fontSize: '5vh',
      fontSize: '10vh'
    }, 1100, function () {
      // Animation complete.
      window.location.href = '/';
    })
  })
})