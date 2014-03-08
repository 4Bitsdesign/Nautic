$(function(){

	
	var hayScroll = false;
	var mouseDown = false;

	var initPos = 0;

	var secciones = [

		$(".wrapper-inicio"),
		$("#quienes-somos"),
		$("#galeria"),
		$("#contacto")

	];

	var cont_actual = 0;

	

	function scrll_to(xpos){


      $('html, body').animate({
          scrollTop: xpos
          },      100, 'linear');
    };

    function scrll_top(elemento){

      var xpos = 0;
		for(var i = 0; i < cont_actual; i++)
			xpos += secciones[cont_actual].height();

      console.log("xpos "+xpos);

      $('html, body').animate({
          scrollTop: xpos
          },      200);
    };

    function scrll(delta){

      var posy = - delta*0.05;

      $('body').animate({
          scrollTop: '+=' + posy
          },      0);
    };

    function check(){

		var anterior = $(".anterior");
		var actual = $(".actual");
		var siguiente = $(".siguiente");

		var win_top = $('body').scrollTop();
		var win_bot = $('body').scrollTop()+$('body').height();

		var anterior_bot = 0;
		for(var i = 0; i < cont_actual; i++)
			anterior_bot += secciones[cont_actual].height();

		var anterior_top = anterior_bot-anterior.height();
		
		var actual_bot = anterior_bot + actual.height();
		var actual_top = anterior_bot;

		var siguiente_top = actual_bot;

		console.log("-----------------------");
		console.log("anterior_bot "+anterior_bot); 
		console.log("actual_bot "+actual_bot);
		console.log("actual_top "+actual_top);
		console.log("siguiente_top "+siguiente_top);
		console.log("win_top "+win_top);
		console.log("win_bot "+win_bot);
		console.log("-----------------------");


		if(win_top > (actual_top) && win_bot < (siguiente_top))
		{
			scrll_top(actual);
		}
		else if(win_bot >= (siguiente_top+5))
		{
			scrll_to(siguiente_top)

			if(cont_actual != 0)
				secciones[cont_actual-1].removeClass("anterior");
			else
				secciones[cont_actual].removeClass("anterior");

			secciones[cont_actual].removeClass("actual");

			if(cont_actual < 3)
				secciones[cont_actual+1].removeClass("siguiente");
			else
				secciones[cont_actual].removeClass("siguiente");
			

			/////////////////

			++cont_actual;

			secciones[cont_actual-1].addClass("anterior");
			secciones[cont_actual].addClass("actual");
			
			if(cont_actual < 3)
				secciones[cont_actual+1].addClass("siguiente");
			else
				secciones[cont_actual].addClass("siguiente");

			

		}
		else if(win_top < (anterior_bot))
		{
			scrll_to(anterior_top);

			if(cont_actual != 0)
				secciones[cont_actual-1].removeClass("anterior");
			else
				secciones[cont_actual].removeClass("anterior");

			secciones[cont_actual].removeClass("actual");

			if(cont_actual < 3)
				secciones[cont_actual+1].removeClass("siguiente");
			else
				secciones[cont_actual].removeClass("siguiente");

			////////////////

			--cont_actual;

			secciones[cont_actual+1].addClass("siguiente");
			secciones[cont_actual].addClass("actual");

			if(cont_actual > 0)
				secciones[cont_actual-1].addClass("anterior");
			else
				secciones[cont_actual].addClass("anterior");
			 
		}
	};


	
	$(document).on("vmousedown", function(event){
			mouseDown = true;
			initPos = event.pageY;
	});

	$(document).on("vmouseup", function(){
			mouseDown = false;
	});

	$(document).on("vmousemove", function(event){
			if(mouseDown)
			{
				var anterior = $(".anterior");
				var actual = $(".actual");

				var win_top = $('body').scrollTop();
				var win_bot = $('body').scrollTop()+$('body').height();

				var anterior_bot = 0;
				for(var i = 0; i < cont_actual; i++)
					anterior_bot += secciones[cont_actual].height();

				var actual_bot = anterior_bot + actual.height();
				
				var delta = event.pageY - initPos;
				if(win_bot >= (actual_bot-0.0000001)){
				scrll(delta);
				hayScroll = true;}
			}
	});

	// $(window).on("mousewheel", function(event){
	// 		scrll(event.deltaY);
	// 		hayScroll = true;

	// });


	setInterval(function(){
		if(hayScroll && !mouseDown)
		{
			check();
			hayScroll = false;
		}
	
	}, 200);

	$( window ).load(function() {
      hayScroll = false;

    });

	
});