function verificar() {
  var peso = document.querySelector("input#peso");
  var res = document.getElementById("res");
  var altura = document.getElementById("altura");
  var imc = Number(peso.value) / Number(altura.value ** 2);
  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (imc < 18.5) {
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(
      2
    )}</strong>. Você está abaixo do preso `;
  } else if (imc >= 18.5 && imc <= 24.9) {
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(
      2
    )}</strong>. Seu peso é normal`;
  } else if (imc >= 25 && imc <= 29.9) {
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(
      2
    )}</strong>. Você está com Sobrepeso`;
  } else if (imc >= 30 && imc <= 34.9) {
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(
      2
    )}</strong>. Você possui Obesidade grau 1! <strong>Procure um médico!</strong><br>`;
    img.setAttribute("src", "medico.jpg");
  } else if (imc >= 35 && imc <= 39.9) {
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(
      2
    )}</strong>. Você possui Obesidade grau 2! <strong>Procure um médico!</strong> <br>`;
    img.setAttribute("src", "medico.jpg");
  } else {
    res.innerHTML = `Seu IMC é <strong>${imc.toFixed(
      2
    )}</strong>. Você possui Obesidade grau 3! <strong>Procure um médico!</strong> <br>`;
    img.setAttribute("src", "medico.jpg");
  }
  res.style.textAlign = "center";
  res.appendChild(img);
}
