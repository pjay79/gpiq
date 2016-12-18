// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../bower_components/gsap/src/minified/TweenMax.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";

// Force scroll to top on refresh + force cache reload
$(window).on('beforeunload', function(){
$(window).scrollTop(0);
$(window).location.reload(true);
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
// Trigger 1
var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-one"});
var section__animation_one = new TimelineMax();
section__animation_one.from($('.one h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                   .staggerFrom($('.one p'), 1, {autoAlpha: 0, cycle:{x:[150,-150]}, ease: Power4.easeOut}, 0.25, 0.5);
scene.setTween(section__animation_one);
scene.addTo(controller);
// Trigger 2
var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-two"});
var section__animation_two = new TimelineMax();
section__animation_two.from($('.two h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                   .staggerFrom($('.two p'), 1, {autoAlpha: 0, cycle:{x:[150,-150]}, ease: Power4.easeOut}, 0.25, 0.5);
scene.setTween(section__animation_two);
scene.addTo(controller);
//Trigger 4
var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-three"});
var section__animation_three = new TimelineMax();
section__animation_three.from($('.left h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                   .from($('.left img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut}, 0.25)
                   .from($('.right h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.5)
                   .from($('.right img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut}, 0.75 );
scene.setTween(section__animation_three);
scene.addTo(controller);
//Trigger 4
var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-four"});
var section__animation_four = new TimelineMax();
section__animation_four.from($('.four img'), 0.5, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
                    .staggerFrom($('.four h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0);
scene.setTween(section__animation_four);
scene.addTo(controller);
//Portal
var scene = new $.ScrollMagic.Scene({triggerElement: "#portal"});
var section__animation_portal = new TimelineMax();
section__animation_portal.from($('.portal h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                         .staggerFrom($('.portal h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0.25);
scene.setTween(section__animation_portal);
scene.addTo(controller);
//Trigger 5
var scene = new $.ScrollMagic.Scene({triggerElement: "#trigger-five"});
var section__animation_five = new TimelineMax();
section__animation_five.from($('.five h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                       .staggerFrom($('.five img'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0.25);
scene.setTween(section__animation_five);
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
