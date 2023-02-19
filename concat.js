function concat(arrayone, arraytwo){
  var array = []
  for(let i = 0; i < arrayone.length; i++){
    array.push(arrayone[i]);
  }
  for(let i = 0; i < arraytwo.length; i++){
    array.push(arraytwo[i]);
  }
  
  return array

}
