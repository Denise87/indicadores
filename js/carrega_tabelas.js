var  mesTabela=[];
var resultadoTabela=[];
var bordaTabela=[
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(9, 61, 98, 1)',
    'rgba(154, 72, 162, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(9, 61, 98, 1)',
    'rgba(154, 72, 162, 1)'   

];
var corTabela=[
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(9, 61, 98, 1)',
    'rgba(154, 72, 162, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(9, 61, 98, 1)',
    'rgba(154, 72, 162, 1)'
    
];

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
                  backgroundColor: corTabela,
                  borderColor: bordaTabela,                      
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
                borderColor: (0,0,0,0.1),
               
                }, 
                {
                label: 'Relizado em dias',
                data: [1,1,1,5],
                backgroundColor: corTabela,
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
 

    
