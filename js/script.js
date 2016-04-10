$(function() {
  var links = $(".links");

  links.click(function() {
    var text = $(".textWrapper");
    text.hide();
    links.parent().removeClass('activelink')
    $($(this).attr("href")).fadeIn(1000);
    $(this).parent().addClass('activelink')
  });

})
