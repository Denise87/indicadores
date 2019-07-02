
 	$(function() {
        var body = $('body');
        var backgrounds = new Array(
        'url(img/imagem1.jpg)',
        'url(img/imagem2.jpg)',
        'url(img/imagem3.jpg)'
        );
        var current = 0;
        
        function nextBackground() {
        body.css(
        'background',
        backgrounds[current = ++current % backgrounds.length],
       
        );
     
        setTimeout(nextBackground, 10000);
        body.css('background-repeat', "no-repeat");
        body.css('background-size','cover');
        }
        setTimeout(nextBackground, 10000);
        body.css('background', backgrounds[0]);
        body.css('background-repeat', "no-repeat");
        body.css('background-size','cover');
        });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        height:520,
        indicators: true,
    });
      setInterval(function() {
        $('.carousel').carousel('next');
      }, 10000);

    // função que verifica se a pessoa está no IE
    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
        
        return is_ie; 
      }
      /* Create an alert to show if the browser is IE or not */
      if (isIE()){
       
        window.location.href =("paginaIE.html")
            
      }