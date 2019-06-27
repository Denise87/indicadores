
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
    //   setInterval(function() {
    //     $('.carousel').carousel('next');
    //   }, 10000);

      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
       
        type: 'bar',
          data: {
              
              labels: ['Comex', 'Bndes', 'SIGCB', 'Middle'],
              datasets: [{
                  label: 'Indicadores',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
      var chart2 = document.getElementById('chartLinhaColuna')
      var chartLinhaColuna = new Chart(chart2, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Relizado em dias',
                data: [1,1,1,5],
                backgroundColor: 
                    'rgba(255, 99, 132, 0.5)'
             
            }, {
                label: 'Objetivo',
                data: [3,3,3,3],
                backgroundColor: 
                'rgba(211, 211, 211, 1)',
                // Changes this dataset to become a line
                type: 'line'
            }],
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril']
        },
        options: {
            scales: {
                
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });