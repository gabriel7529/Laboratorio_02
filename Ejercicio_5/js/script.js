const suma = 0;
function genera_tabla(){
  let body = document.getElementsByTagName("body")[0];

  let tabla = document.createElement("table");
  let tbBody = document.createElement("tbody");
  let columnas = document.getElementById("columnas");
  let filas = document.getElementById("filas");
  let numC = columnas.value;
  let numF = filas.value;
  for (let i=0; i<numF; i++){
    let hilera = document.createElement("tr");
    for(let j=0; j<numC; j++){
      let celda = document.createElement("td");
      let num = document.createTextNode(Math.ceil(Math.random()*(100 - 1)+1));
      celda.appendChild(num);
      
      hilera.appendChild(celda);
    }
    tbBody.appendChild(hilera);
  }
  tabla.appendChild(tbBody);
  body.appendChild(tabla);
}
