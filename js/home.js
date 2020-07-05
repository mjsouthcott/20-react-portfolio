$(document).ready(function () {
  // Initialize variables
  const $figureImage = $('figure.image');
  const $html = $('html');
  const $modalClose = $('.modal-close');

  // Event listener on figure images to activate modals
  $figureImage.on('click', function () {
    var target = $(this).data('target');
    $html.addClass("is-clipped");
    $(target).addClass("is-active");
  });

  // Event listener on modal
  $modalClose.on('click', function () {
    console.log('test')
    $html.removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
  });
});