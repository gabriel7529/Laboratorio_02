function obtenerCodigo(){
  let f = document.getElementById("codigo");
  const link = f.value;
  let codigo = link.substring(25,36);
  let letras = codigo.substring(0,3) + codigo.substring(5,8) + codigo.substring(10,12);
  document.getElementById("newcodigo").innerHTML =  letras;
}

