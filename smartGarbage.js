function smartGarbage(trash, bins){
if(trash == 'waste'){
bins.waste += 1;
}
else if(trash == 'recycling'){
bins.recycling += 1;
}
else if(trash == 'compost'){
bins.compost += 1;
}

return bins;


}

console.log(smartGarbage('waste', {waste: 3, recycling: 4, compost: 5}));
