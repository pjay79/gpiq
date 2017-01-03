(function() {

// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../bower_components/gsap/src/minified/TweenMax.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

// Force scroll to top on refresh + force cache reload
$(window).on('beforeunload', function(){
$(window).scrollTop(0);
$(window).location.reload(true);
});
// Set 100% viewport width/height to div's
var fullscreen = function(){
  // Main
  $('main').css({width: $(window).width(), height: $(window).height()});
  // Section 1
  $('.one').css({width: $(window).width(), height: $(window).height()});
  // Section 2
  $('.two').css({width: $(window).width(), height: $(window).height()});
  // Section 3
  $('.left').css({height: $(window).height()});
  $('.right').css({height: $(window).height()});
  // Section 4
  $('.left2').css({height: $(window).height() * 0.5});
  $('.right2').css({height: $(window).height() * 0.5});
  // Portal
  $('.portal').css({width: $(window).width(), height: $(window).height()});
  // Sponsors
  $('.sponsors').css({width: $(window).width(), height: $(window).height()});
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
// Section swipes / pins
/*var allPins = document.querySelectorAll(".pins");
for (var i = 0; i < allPins.length; i++) {
new $.ScrollMagic.Scene({
		triggerElement: allPins[i]
	})
	.setPin(allPins[i])
	.addTo(controller);
} */
var pin01 = new $.ScrollMagic.Scene({ triggerElement: "#trigger-one", triggerHook: "onLeave", duration: "30%"});
pin01.setPin('.pin01')
     .addIndicators()
     .addTo(controller);
var pin02 = new $.ScrollMagic.Scene({ triggerElement: "#trigger-two", triggerHook: "onLeave", duration: "30%"});
pin02.setPin('.pin02')
     .addIndicators()
     .addTo(controller);
var pin03 = new $.ScrollMagic.Scene({ triggerElement: "#trigger-three", triggerHook: "onLeave", duration: "30%"});
pin03.setPin('.pin03')
     .addIndicators()
     .addTo(controller);
// Trigger 1
var scene1 = new $.ScrollMagic.Scene({triggerElement: "#trigger-one"});
var sectionOne = new TimelineMax();
sectionOne.from($('.one h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
          .staggerFrom($('.one p'), 1, {autoAlpha: 0, cycle:{x:[150,-150]}, ease: Power4.easeOut}, 0.25, 0.5);
scene1.setTween(sectionOne);
scene1.addTo(controller);
// Trigger 2
var scene2 = new $.ScrollMagic.Scene({triggerElement: "#trigger-two"});
var sectionTwo = new TimelineMax();
sectionTwo.from($('.two h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
          .staggerFrom($('.two p'), 1, {autoAlpha: 0, cycle:{x:[150,-150]}, ease: Power4.easeOut}, 0.25, 0.5);
scene2.setTween(sectionTwo);
scene2.addTo(controller);
//Trigger 3
var scene3 = new $.ScrollMagic.Scene({triggerElement: "#trigger-three"});
var sectionThree = new TimelineMax();
sectionThree.from($('.left h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
                        .from($('.left img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut}, 0.25)
                        .from($('.right h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.5)
                        .from($('.right img'), 1, {autoAlpha: 0, scale: 0, ease: Power4.easeOut}, 0.75 );
scene3.setTween(sectionThree);
scene3.addTo(controller);
//Trigger 4
var scene4 = new $.ScrollMagic.Scene({triggerElement: "#trigger-four"});
var sectionFour = new TimelineMax();
sectionFour.from($('.four img'), 0.5, {autoAlpha: 0, scale: 0, ease: Power4.easeOut})
                       .staggerFrom($('.four h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0);
scene4.setTween(sectionFour);
scene4.addTo(controller);
//Portal
var portal = new $.ScrollMagic.Scene({triggerElement: "#portal"});
var sectionPortal = new TimelineMax();
sectionPortal.from($('.portal h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
            .staggerFrom($('.portal h3'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0.25);
portal.setTween(sectionPortal);
portal.addTo(controller);
//Trigger 5
var scene5 = new $.ScrollMagic.Scene({triggerElement: "#sponsors"});
var sectionSponsors = new TimelineMax();
sectionSponsors.from($('.sponsors h1'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut})
               .staggerFrom($('.sponsors img'), 1, {autoAlpha: 0, y: "+=100px", ease: Power4.easeOut}, 0.25, 0.25);
scene5.setTween(sectionSponsors);
scene5.addTo(controller);
// Form submission
$('form').submit(function(event) {
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

})();
