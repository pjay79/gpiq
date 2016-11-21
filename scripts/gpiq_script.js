$(document).ready(function(){
  // Set 100% viewport width/height to div's
  var fullscreen = function(){
    $('main').css({width: $(window).width(), height: $(window).height()});
  };
  fullscreen();
  // Run the function again in case of window resize
  $(window).resize(function() {
    fullscreen();
  });
  // Hover touch
  $('body').bind('touchstart', function(){});
  // Main animation
  //window.addEventListener("load");
  //$(window).on("load", handler);
 //$(window).on("load", function() {
  var main = new TimelineMax({paused:true});
  main.set($('.main__content'), {visibility: "visible"})
      .from($('.main__content img'), 0.3, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
      .staggerFrom($('.main__content h1 span'), 0.3, {autoAlpha: 0, ease: Power4.easeIn}, 0.15, 0)
      .from($('.main__content p'), 0.3, {autoAlpha: 0, ease: Power4.easeOut})
      .from($('.main__content .call-to-action'), 0.3, {autoAlpha: 0, y: 50, ease: Power1.easeOut})
      .from($('.main__social'), 0.3, {autoAlpha: 0, ease: Power4.easeOut})
      .add('headerIn');
  main.play();
  //});
  // Form submission
  $('form').submit(function() {
        var message__confirmation = new TimelineMax();
            message__confirmation.to($('#confirmation'), 0.5, {opacity: 1, ease: Expo.easeOut})
                                 .to($('#confirmation'), 0.5, {autoAlpha: 0, ease: Expo.easeOut}, +0.5);
        event.preventDefault();
        var formData = $('form').serialize();
        $.ajax({
          type: 'POST',
          url: $('form').attr('action'),
          data: formData
        });
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        return false;
    });

});
