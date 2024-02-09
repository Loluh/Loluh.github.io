$(() => {
  $('a').on('click', function () {
    $('.square').fadeOut(1100);
    $('a').hide(1000);
    $('h1').animate({
      left: '7',
      top: '7',
      fontSize: '3em',
      fontSize: '5vh'
    }, 1100, function () {
      // Animation complete.
      window.location.href = '/skins';
    });
  })
})