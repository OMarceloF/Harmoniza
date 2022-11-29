var semana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
var d = new Date();
document.getElementById("day").innerHTML = semana[d.getDay()];
