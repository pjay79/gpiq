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
      .from($('.main__content img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
      .staggerFrom($('.main__content h1 span'), 1, {autoAlpha: 0, ease: Power4.easeOut, delay: 0.5}, 0.15, 0)
      .from($('.main__content p'), 0.25, {autoAlpha: 0, ease: Power1.easeOut}, 1)
      .from($('.main__content .call-to-action'), 0.15, {autoAlpha: 0, y: 50, ease: Expo.easeOut}, 1.25)
      .from($('.main__social'), 0.15, {autoAlpha: 0, scale: 0, ease: Power2.easeOut})
      .add('headerIn');
  main.play();
  });
  // ScrollMagic scenes
  var controller = new $.ScrollMagic.Controller();
  // Trigger A
  var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-a"});
  var section__animation_a = new TimelineMax();
  section__animation_a.from($('.one h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                     .staggerFrom($('.one p'), 1, {autoAlpha: 0, cycle:{x:[150,-150]}, ease: Power4.easeOut}, 0.25, 0.5);
	scene.setTween(section__animation_a);
	scene.addTo(controller);
  // Trigger AA
  var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-aa"});
  var section__animation_aa = new TimelineMax();
  section__animation_aa.from($('.two h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                     .staggerFrom($('.two p'), 1, {autoAlpha: 0, cycle:{x:[150,-150]}, ease: Power4.easeOut}, 0.25, 0.5);
  scene.setTween(section__animation_aa);
  scene.addTo(controller);
  //Trigger B
  var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-b"});
  var section__animation_b = new TimelineMax();
  section__animation_b.from($('.left h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                     .from($('.left img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut}, 0.25)
                     .from($('.right h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.5)
                     .from($('.right img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut}, 0.75 );
  scene.setTween(section__animation_b);
  scene.addTo(controller);
  //Trigger C
  var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-c"});
  var section__animation_c = new TimelineMax();
  section__animation_c.from($('.four img'), 0.5, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
                      .staggerFrom($('.four h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0);
  scene.setTween(section__animation_c);
  scene.addTo(controller);
  //Trigger D
  var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-d"});
  var section__animation_d = new TimelineMax();
  section__animation_d.from($('.five h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                      .staggerFrom($('.five h2'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0.25);
  scene.setTween(section__animation_d);
  scene.addTo(controller);
  //Trigger E
  var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-e"});
  var section__animation_e = new TimelineMax();
  section__animation_e.staggerFrom($('.six img'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25);
  scene.setTween(section__animation_e);
  scene.addTo(controller);
  //Portal
  var scene = new $.ScrollMagic.Scene({triggerElement: "#portal"});
  var section__animation_portal = new TimelineMax();
  section__animation_portal.from($('.portal h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                           .staggerFrom($('.portal h2'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0.25);
  scene.setTween(section__animation_portal);
  scene.addTo(controller);
  // Form submission
  $('form').submit(function() {
        var message__confirmation = new TimelineMax();
            message__confirmation.to($('#confirmation'), 1, {autoAlpha: 1, ease: Expo.easeOut})
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
 // Terms and Privacy
 $('.terms-and-privacy').click(function(){
   $('.terms-and-privacy__content').slideToggle();
   $("html, body").animate({ scrollTop: $(document).height() }, 1000);
 });
