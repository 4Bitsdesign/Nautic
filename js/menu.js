

$(function() {
    
    // var boton = $( ".boton" );

    // function efecto() {
      
          
    //   if(boton.hasClass("first"))
    //   {
    //     boton.animate({right: "-15px"},'1');
    //     $(".menu").toggle('1','slide');
    //   }
    //   else
    //   {
    //     $(".menu").toggle('slide');

    //     if(boton.hasClass("toggled"))
    //     {
    //       boton.animate({right: "135px"},'500');
    //     }
    //     else
    //     {
    //       boton.animate({right: "-15px"},'500'); 
    //     }
    //   }

    //   boton.toggleClass("toggled");
    // };
 
    // boton.click(function(event) {
      
    //   event.preventDefault();
    //   efecto();

    // });



    // $( window ).load(function() {
    //   efecto();

    // });


  var boton = $( ".boton" );
  var menu = $(".menu");

    function efecto() {
      
      

      if(boton.hasClass("toggled"))
      {
        boton.animate({right: "135px"},'500');
        menu.animate({right: 0},'500');
      }
      else
      {
        boton.animate({right: "-15px"},'500');
        menu.animate({right: "-150px"},'500'); 
      }
     

      boton.toggleClass("toggled");
    };
 
    boton.click(function(event) {
      
      event.preventDefault();
      efecto();

    });

  });

