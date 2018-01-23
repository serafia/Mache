function stopCarousel() {
	var w = $(window).innerWidth();
	console.log(w);
	if(w < 1201) {
		alert(w);
		$('#myCarousel').attr("data-interval", "false");
	} else {
		$('#myCarousel').attr("data-interval", "5000");
	}
}
stopCarousel();
