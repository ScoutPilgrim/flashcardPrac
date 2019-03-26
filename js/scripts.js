$(document).ready(function() {
  $(".clickable").click(function() {
    console.log($(this));
    /*$(this).toggleClass('showHidden')*/
    $(this).find('.fuckBootstrap').toggle();
  });
});
