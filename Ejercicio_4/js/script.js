function obtenerCodigo(){
  let f = document.getElementById("codigo");
  const link = f.value;
  let codigo = link.substring(24,36);
  let letras = codigo.substring(0,3) + codigo.substring(4,8) + codigo.substring(9,13);
  document.getElementById("newcodigo").innerHTML =  letras;
}

