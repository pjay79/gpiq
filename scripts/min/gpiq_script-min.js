$(window).on("beforeunload",function(){$(window).scrollTop(0),$(window).location.reload(!0)});var fullscreen=function(){$("main").css({width:$(window).width(),height:$(window).height()})};fullscreen(),$(window).resize(function(){fullscreen()}),$("body").bind("touchstart",function(){}),$(window).on("load",function(){var e=new TimelineMax({paused:!0,delay:.5});e.set($(".main__content"),{visibility:"visible"}).from($(".main__content img"),1,{autoAlpha:0,scale:0,ease:Power4.easeOut}).staggerFrom($(".main__content h1 span"),1,{autoAlpha:0,ease:Power4.easeOut,delay:.5},.15,0).from($(".main__content p"),.25,{autoAlpha:0,ease:Power1.easeOut},1).from($(".main__content .call-to-action"),.15,{autoAlpha:0,y:50,ease:Expo.easeOut},1.25).from($(".main__social"),.15,{autoAlpha:0,scale:0,ease:Power2.easeOut}).add("headerIn"),e.play()});var controller=new $.ScrollMagic.Controller,scene=new $.ScrollMagic.Scene({triggerElement:"#trigger-a"}),section__animation_a=new TimelineMax;section__animation_a.from($(".one h1"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut}).staggerFrom($(".one p"),1,{autoAlpha:0,cycle:{x:[150,-150]},ease:Power4.easeOut},.25,.5),scene.setTween(section__animation_a),scene.addTo(controller);var scene=new $.ScrollMagic.Scene({triggerElement:"#trigger-aa"}),section__animation_aa=new TimelineMax;section__animation_aa.from($(".two h1"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut}).staggerFrom($(".two p"),1,{autoAlpha:0,cycle:{x:[150,-150]},ease:Power4.easeOut},.25,.5),scene.setTween(section__animation_aa),scene.addTo(controller);var scene=new $.ScrollMagic.Scene({triggerElement:"#trigger-b"}),section__animation_b=new TimelineMax;section__animation_b.from($(".left h3"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut}).from($(".left img"),1,{autoAlpha:0,scale:0,ease:Power4.easeOut},.25).from($(".right h3"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut},.5).from($(".right img"),1,{autoAlpha:0,scale:0,ease:Power4.easeOut},.75),scene.setTween(section__animation_b),scene.addTo(controller);var scene=new $.ScrollMagic.Scene({triggerElement:"#trigger-c"}),section__animation_c=new TimelineMax;section__animation_c.from($(".four img"),.5,{autoAlpha:0,scale:0,ease:Power4.easeOut}).staggerFrom($(".four h3"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut},.25,0),scene.setTween(section__animation_c),scene.addTo(controller);var scene=new $.ScrollMagic.Scene({triggerElement:"#trigger-e"}),section__animation_e=new TimelineMax;section__animation_e.staggerFrom($(".five img"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut},.25),scene.setTween(section__animation_e),scene.addTo(controller);var scene=new $.ScrollMagic.Scene({triggerElement:"#portal"}),section__animation_portal=new TimelineMax;section__animation_portal.from($(".portal h1"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut}).staggerFrom($(".portal h3"),1,{autoAlpha:0,y:"+=100px",ease:Power4.easeOut},.25,.25),scene.setTween(section__animation_portal),scene.addTo(controller),$("form").submit(function(){var e=new TimelineMax;e.to($("#confirmation"),1,{autoAlpha:1,ease:Expo.easeOut}).to($("#confirmation"),1,{autoAlpha:0,ease:Expo.easeOut,delay:.5}),event.preventDefault();var a=$("form").serialize();return $.ajax({type:"POST",url:$("form").attr("action"),data:a}),$("#name").val(""),$("#email").val(""),$("#message").val(""),!1}),$(".terms-and-privacy").click(function(){$(".terms-and-privacy__content").slideToggle(),$("html, body").animate({scrollTop:$(document).height()},1e3)});