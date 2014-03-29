$(function(){

  var getGallery = function (gallery_id) {
    var gallery_section = $('#galeria'),
        gallery = $(".popup-gallery");

    // images
    $.getJSON('//graph.facebook.com/' + gallery_id + '/photos?callback=?', function(json, status, xhr) {
      var imgs = json.data;

      for (var i = 0, l = imgs.length - 1; i < l; i++) {

        $('<a href="'+ imgs[i].images[3].source + '" class="fb-photo-link photo-' + i + '"><img src="' + imgs[i].images[3].source + '"></a>').appendTo(gallery);

      };

       gallery.magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Cargando la imagen #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">La imagen #%curr%</a> no se pudo cargar.',
            
          }
        });

    });

  };

  getGallery('790550367639887');  

});
      

