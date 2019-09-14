function carregar() {
  var msg = document.getElementById("msg");
  var imagem = document.getElementById("imagem");
  //var dataAtual = new Date();
  var horaAtual = 22;
  msg.innerHTML = `Agora são ${horaAtual} horas.`;

  if (horaAtual > 0 && horaAtual < 12) {
    //Bom dia!
    imagem.src = "dia.jpg";
    document.body.style.background = "#80bfff";
  } else if (horaAtual >= 12 && horaAtual <= 18) {
    //Boa tarde!
    imagem.src = "tarde.jpg";
    document.body.style.background = "#ffb380";
  } else {
    //Boa noite!
    imagem.src = "noite.jpg";
    document.body.style.background = "#00001a";
  }
}
