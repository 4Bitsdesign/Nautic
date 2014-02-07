/*$(function(){
	$(".menu-button").click(function(param)
			{
				//param.preventDefault();

				$(".dropdown").slideToggle();
			}
	);
});
*/

$(function() {
    
    var boton = $( ".menu-button" );

    function efecto() {
      
          
      if(boton.hasClass("first"))
      {
        boton.animate({right: "-15px"},'1');
        $(".menu").toggle('1','slide');
      }
      else
      {
        $(".menu").toggle('slide');

        if(boton.hasClass("toggled"))
        {
          boton.animate({right: "135px"},'500');
        }
        else
        {
          boton.animate({right: "-15px"},'500'); 
        }
      }

      boton.toggleClass("toggled");
    };
 
    boton.click(function(event) {
      
      event.preventDefault();
      efecto();

    });

    $( window ).load(function() {
      efecto();

    });

  });

