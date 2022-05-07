function convertirPalabra(){
  let tagWord = document.getElementById("word");
  const word = tagWord.value ;
  let newWord = "";
  for (let i= word.length ; i>0;i--){
    newWord.concat(word.substring(i-1,i));
  }
}
