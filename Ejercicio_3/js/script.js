function diasRestantes (){
  let inicio = new Date();
  let fin = new Date("2022,08,15");
  let diferencia = Math.abs(fin - inicio);
  let restantes = Math.round(diferencia / (1000*3600*24))+1;
  document.getElementById("days").innerHTML = "Faltan " + restantes + " Días.";
}
