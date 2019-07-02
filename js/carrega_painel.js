$(document).ready(function(){
carrega_painel();
});

function carrega_painel(){

  $.ajax({

    type:'GET',
    url: 'js/dados_painel.json',
    dataType: 'JSON',

    success: function(data){

      $.each(data, function(key, item){

    $('#resultadoAuditoriaBndes').html(item.resultadoAuditoriaBndes);
    $('#resultadoOperacoesBndes').html(item.resultadoOperacoesBndes);
    $('#resultadoComexAccAce').html(item.resultadoComexAccAce);
    $('#resultadoComexExportacao').html(item.resultadoComexExportacao);
    $('#resultadoComexAntecipados').html(item.resultadoComexAntecipados);
    $('#resultadoSigcb').html(item.resultadoSigcb);
    $('#resultadoParametrizacaoMge').html(item.resultadoParametrizacaoMge);
    $('#resultadoAtendimentoMiddle').html(item.resultadoAtendimentoMiddle);
    $('#resultadoParametrizacaoGarantias').html(item.resultadoParametrizacaoGarantias);
      });
     
    }
   })
}           

