console.log("external js works");
// tell browser that language is jquery
// $ means we are writing in jquery
$(document).ready(function(){
	console.log("jquery has loaded");

	// to hide all divs:
	// $("div").hide();
	// $("#box2").hide(); Target unique element to hide them (ID name should only appear once)
	// $(".box").hide();  All elements with class of box will hide

	// $("#box4").show(); // shows the element



	$("#box1").click(function(){
		// console.log("red box has been clicked")
		// $("#box2").hide(2000);
		// $("#box2").toggle(1000);	
		// $("#box2").fadeOut();
		// $("#box4").fadeIn();
		// $("#box2").fadeToggle();
		// $("#box4").fadeToggle();
		// $("#box2").addClass("boxLarge purple");
		// $("#box2").toggleClass("boxLarge purple");
		// $("#box2").css("width","400px");
		// $("#box2").css({"width":"400px","height":"300px"});

	});



	$("#box3").click(function(){
		console.log("yellow box has been clicked")
		$("#box2").show();
	});

	$("#box5").dblclick(function(){
		console.log("green box has been clicked")
		$("#box4").show();
	});


	$(".box").click(function(){
		$(this).toggleClass("boxLarge");
	});




	// $("#box1").click(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").hide();
	// })

	// $("#box3").click(function(){
	// 	// console.log("red box has been clicked");
	// 	$("#box2").show();
	// })



	// .click();
	// .dblclick();
	// .mouseover();
	// .mouseleave();
	// .hover();















})