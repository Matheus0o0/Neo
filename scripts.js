function verificarPosicao() {
    var botao = document.getElementById("voltar-ao-topo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      botao.style.display = "block";
    } else {
      botao.style.display = "none";
    }
  }

  function voltarAoTopo() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  window.onscroll = function() {
    verificarPosicao();
  };