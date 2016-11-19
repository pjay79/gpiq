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
  // Main header
  var main = new TimelineMax({paused:true});
  main.set($('main'), {visibility: "visible"})
      .from($('header img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
      .staggerFrom($('header h1 span'), 1, {autoAlpha: 0, ease: Power4.easeIn}, 0.25, 0)
      .from($('header p'), 1, {autoAlpha: 0, y: 200, ease: Power1.easeInOut}, '-=0.8')
      .add('headerIn')
      .staggerFrom($('header p span'), 1, {autoAlpha: 0, ease: Power4.easeIn, repeat: -1, repeatDelay: 0.5}, 0.25, 'headerIn-=0.8');
  main.play();
});
