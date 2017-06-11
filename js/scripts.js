$(function() {
	//carousel
	var carouselList = $('#carousel ol');

	function changeSlide() {
		carouselList.animate('marginLeft:-400', 500, moveRight);
	} 

	function moveRight() {
			var firstItem = $('#carousel li:first'),
				lastItem = $('#carousel li:last');

			lastItem.after(firstItem);

			carouselList.css('marginLeft:0');
	}

	function moveLeft() {
			var firstItem = $('#carousel li:first'),
				lastItem = $('#carousel li:last');

			firstItem.before(lastItem);

			carouselList.css('marginLeft:0');
	}

	setInterval(changeSlide, 10000);

	//side buttons
	var $button1 = $('#button1 button'),
		$button2 = $('#button2 button');

	$button1.click(function() {
		carouselList.animate('marginLeft:-400', 500, moveLeft);
	});

	$button2.click(function() {
		carouselList.animate('marginLeft:400', 500, moveRight);
	});
});
