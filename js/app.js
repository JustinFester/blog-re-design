$("div.hamburger").on("click", function() {
	$("#main-nav").slideToggle().toggleClass("hide");
});

$('#carousel-example-generic').carousel({
  interval: 6000

})

$('.hamburger').on('mouseenter', function() {
	$('.hamburger-bar').addClass('blue');
});
$('.hamburger').on('mouseleave', function() {
	$('.hamburger-bar').removeClass('blue');
});