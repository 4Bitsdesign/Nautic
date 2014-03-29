$(function(){

	var portrait = true;

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
          },      100, 'linear', function(){
          	efecto = window.Efecto();
			efecto();
          });
    };

    function scrll_top(elemento){

      var xpos = 0;
		for(var i = 0; i < cont_actual; i++)
			xpos += secciones[cont_actual].height();

      $('html, body').animate({
          scrollTop: xpos
          },      200);
    };

    function scrll(delta){

      var posy = - delta*0.5;

      console.log(posy);

      $('html, body').animate({
          scrollTop: '+=' + posy
          },      0);
    };

    function check(){

		var anterior = $(".anterior");
		var actual = $(".actual");
		var siguiente = $(".siguiente");

		var win_top = $('body').scrollTop();
		var win_bot = $('body').scrollTop()+$(window).height();

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

		if(portrait){
			if(win_top > (actual_top) && win_bot < (siguiente_top))
			{
				scrll_top(actual);
			}
			else if(win_bot >= (siguiente_top+5))
			{
				scrll_to(siguiente_top);

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

				if(cont_actual < 3) ++cont_actual;

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

				if(cont_actual > 0) --cont_actual;

				secciones[cont_actual+1].addClass("siguiente");
				secciones[cont_actual].addClass("actual");

				if(cont_actual > 0)
					secciones[cont_actual-1].addClass("anterior");
				else
					secciones[cont_actual].addClass("anterior");
				 
			}
		}		
		
		
	};


	
	$(document).on("vmousedown", function(event){
			mouseDown = false;
			initPos = event.pageY;
			console.log("down");
	});

	$(document).on("vmouseup", function(){
			mouseDown = false;
			console.log("up");
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

				console.log(delta);

				scrll(delta);
				hayScroll = true;

			}
	});



	setInterval(function(){
		if(hayScroll && !mouseDown)
		{
			check();
			hayScroll = false;
		}
	
	}, 200);

	$( window ).load(function() {
      hayScroll = false;
      if(window.matchMedia( "(orientation: landscape" ).matches) 
      {
      	portrait = false;
      	$("body").addClass("landscape");
    	$("html").addClass("landscape");
      }
    });

    $( window ).on("orientationchange", function(event){
    	if(event.orientation=="portrait") 
    	{
    		portrait = true;
    		$("body").removeClass("landscape");
    		$("html").removeClass("landscape");
    	}
    	else
    	{
    		portrait = false;
    		$("body").addClass("landscape");
    		$("html").addClass("landscape");
    	}

    });

    

	
});