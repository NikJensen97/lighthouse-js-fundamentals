function range (start, end, step){
  var list = []
  if(step <= 0 || start >= end || typeof start == 'undefined' || typeof end == 'undefined' || typeof step == 'undefined'){
    return list;
  }
  else
  list.push(start);
  var jump = start
  while(jump <= end){
    jump += step;
    if(jump <= end){
      list.push(jump);
    }
  }
  return list;
}
