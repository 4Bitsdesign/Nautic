$(function(){

	var hayScroll = false;
	var hayUp = false;

	var footer = $("#footer");
	var address = $("#footer>address");
	var nth = $("address>a:nth-of-type(2)");
	var wrapper = $(".wrapper-inicio");

	var footer_arriba = {

		background: 'transparent',
		position: 'static',
		bottom: 'auto',
		'box-shadow': '0 0 0 0'

	};
	var address_arriba = {

		padding: '2em 0',
		margin: '10px auto 70px auto',
		'font-size': '0.96em'

	};
	var a_nth_arriba = {

		margin: 'auto'

	};


	var footer_medio = {

		
		background: 'rgb(0,0,0)',
		position: 'fixed',
		bottom: 0,
		'box-shadow': '0 -5px 1px rgba(0,0,0,0.2)'

	};

	var address_medio = {

		padding: '0.5em 0',
		margin: '0 auto',
		'font-size': '0.8em'

	};

	var a_nth_medio = {

		'margin-left': '-1.5em',
		'margin-top': '0.2em'

	};

	

	function efecto () {
		
		hayScroll = false;

		var winpos = $(window).scrollTop();
		
		if(winpos > 50)
		{
			if(footer.hasClass("arriba"))
			{
				footer.removeClass("arriba");
				footer.addClass("medio");
				footer.animate(footer_medio,0);
				address.animate(address_medio,0);
				nth.animate(a_nth_medio,0);
				wrapper.animate({"padding-bottom":"250px"},0);
			}
		}
		if(winpos < 50)
		{
			if(footer.hasClass("medio"))
			{
				footer.removeClass("medio");
				footer.addClass("arriba");
				footer.animate(footer_arriba,0);
				address.animate(address_arriba,0);
				nth.animate(a_nth_arriba,0);
				wrapper.animate({"padding-bottom":"0"},0);
			}
		}	

	};

	$(document).on("vmouseup", function(){

		hayUp = true;

	});


	$('body').scroll(function(){

		hayScroll = true;	

	});

	setInterval(function(){
		
		if(hayScroll && hayUp)
		{
			efecto();
			hayScroll = false;
			hayUp = false;
		}


	}, 200);


});