function calculateRectangleArea(length, width){
  var area
  if(length > 0 && width > 0){
    area = length * width;
  }
  return area;
}

function calculateTriangleArea(base, height){
  var area
  if(base > 0 && height > 0){
    area = base * height / 2;
  }
  return area;
}

function calculateCircleArea(radius){
  var area
  if (radius > 0){
    area = Math.PI * Math.pow(radius, 2); 
  }
