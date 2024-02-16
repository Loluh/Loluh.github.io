$(() => {
  $('.buttons a').on('click', function () {
    var url = $(this).data('url');
    $('.square').fadeOut(1100);
    $('a').hide(1000);
    $('h1').animate({
      left: '20',
      top: '20',
      fontSize: '3em',
      fontSize: '5vh'
    }, 1100, function () {
      window.location.href = url;
    });
  })
})