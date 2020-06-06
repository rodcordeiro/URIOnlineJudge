let lines = [8,1,7,2,2,4];

function combustiveis(values){
  let alcohol = 0
  let diesel = 0
  let gasoline = 0
  for(var i = 0; i < values.length; i++){
    if(values[i] == 1) alcohol++;
    if(values[i] == 2) gasoline++;
    if(values[i] == 3) diesel++;
    if(values[i] == 4){
      console.log(`MUITO OBRIGADO
Alcool: ${alcohol}
Gasolina: ${gasoline}
Diesel: ${diesel}`)
    }
  }
}
combustiveis(lines)
