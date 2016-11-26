  // Force scroll to top on refresh + force cache reload
  $(window).on('beforeunload', function(){
  $(window).scrollTop(0);
  $(window).location.reload(true);
  // Internet Explorer 6,7,8 warnings
  //$("body").iealert();
  });
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
  $(window).on("load", function() {
  var main = new TimelineMax({paused:true, delay: 0.5});
  main.set($('.main__content'), {visibility: "visible"})
      .from($('.main__content img'), 0.3, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
      .staggerFrom($('.main__content h1 span'), 0.3, {autoAlpha: 0, ease: Power4.easeOut}, 0.15, 0)
      .from($('.main__content p'), 0.3, {autoAlpha: 0, ease: Power4.easeOut})
      .from($('.main__content .call-to-action'), 0.25, {autoAlpha: 0, x: -150, ease: Power2.easeOut})
      .from($('.main__social'), 0.5, {autoAlpha: 0, scale: 0, y: 150, ease: Power2.easeOut})
      .add('headerIn');
  main.play();
  });
  // Form submission
  $('form').submit(function() {
        var message__confirmation = new TimelineMax();
            message__confirmation.to($('#confirmation'), 1, {opacity: 1, ease: Expo.easeOut})
                                 .to($('#confirmation'), 1, {autoAlpha: 0, ease: Expo.easeOut, delay: 0.5});
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
