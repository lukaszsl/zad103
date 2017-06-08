$(function() {
	var carouselList = $('#carousel ul');

	function changeSlide() {
		carouselList.animate('marginLeft:-400', 500, moveFirstSlide);
	} 

	function moveFirstSlide() {
			var firstItem = $('#carousel li:first'),
				lastItem = $('#carousel li:last');

			lastItem.after(firstItem);

			carouselList.css('marginLeft:0');
	}

	setInterval(changeSlide, 3000);
});
