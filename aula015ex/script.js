function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtAno");
  var res = document.getElementById("res");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert("[ERRO] Tente novamente");
  } else {
    var fSex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 10) {
        //criança
        img.setAttribute("src", "bebeM.jpg");
      } else if (idade >= 15 && idade < 21) {
        //jovem
        img.setAttribute("src", "jovemM.jpg");
      } else if (idade < 50) {
        //aduto
      } else {
        //idoso
        img.setAttribute("src", "velhoM.jpg");
      }
    } else {
      genero = "Mulher";
    }
    if (idade >= 0 && idade <= 10) {
      //criança
      img.setAttribute("src", "bebeF.jpg");
    } else if (idade >= 15 && idade < 21) {
      //jovem
      img.setAttribute("src", "jovemF.jpg");
    } else if (idade < 50) {
      //aduto
    } else {
      //idoso
      img.setAttribute("src", "velhoF.jpg");
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
