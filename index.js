var katzDeli = [];
function takeANumber(katzDeli, person){
  
  katzDeli.push(`${person}`);
  return(`Welcome, ${person}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  var i = 0;
  while(i < katzDeli.length){
    i++;
  }
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return(`Currently serving ${katzDeli.shift()}.`);
  }
}

function currentLine(line){
  if (line> 0){
    
  }
}