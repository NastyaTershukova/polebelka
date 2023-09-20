$(document).ready(function() {
    $('.header_burger').click(function(event) {
       $('.header_burger, .menu').toggleClass('active');
       $('body').toggleClass('lock');
    });
  });
  $(document).ready(function() {
    $('.nav-links').click(function(event) {
    $('.menu').hide();
    $('.header_burger.active').hide();
    });
});