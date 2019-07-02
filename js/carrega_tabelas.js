var  mesTabela=[];
var resultadoTabela=[];
$.ajax({

    type:'GET',
    url: 'js/dados_tabelas.json',
    dataType: 'JSON',

    success: function(lista){
      
        $.each(lista, function(key, item){
            mesTabela.push(item.mes);
            resultadoTabela.push(item.resultado);
         });   

var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
       
        type: 'bar',
          data: {
              
              labels: mesTabela,
              datasets: [{
                  label: 'Indicadores Atendimento Middle',
                  data: resultadoTabela,
                  backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(75, 192, 192, 1)',
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
                type: 'line',
                label: 'Objetivo',
                data: [3,3,3,3],
                backgroundColor: 
                'rgba(0,0,0,0.1)'
                // Changes this dataset to become a line
               
             
            }, {
                label: 'Relizado em dias',
                data: [1,1,1,5],
                backgroundColor: 
                    'rgba(20, 46, 138, 1)'
               
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
 

    }
    
});