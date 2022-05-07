function obtenerCodigo(link){
  let codigo = link.subString(25,36);
  let letras = codigo.subString(0,3) + codigo.subString(5,8) + codigo.subString(10,12);
  document.getElementById("newcodigo").innerHTML =  letras;
}

