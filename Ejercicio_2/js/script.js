function convertirPalabra(){
  const tagWord = document.getElementById("word");
  const word = tagWord.value ;
  let newWord = "";
  for (let i= word.length ; i>0;i--){
    newWord+=word.substring(i-1,i);
  }
  document.getElementById("neWord").innerHTML = newWord;
}
