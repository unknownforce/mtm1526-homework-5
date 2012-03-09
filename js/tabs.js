$(document).ready(function() {
	
	$('a').on('click', function(ev) {
		$.ajax({
			cache: true
		});
	});
	
	$('.home').on('click', function(ev) {
		$('.fill-me').load('home.html');
	});
	
	$('.products').on('click', function(ev) {
		$('.fill-me').load('products.html');
	});
	
	$('.contact').on('click', function(ev) {
		$('.fill-me').load('contact.html');
	});
	
	$('.about').on('click', function(ev) {
		
		$('.fill-me').load('about.html');
		
	});
	
	
	//$('.target').hide();
	
});